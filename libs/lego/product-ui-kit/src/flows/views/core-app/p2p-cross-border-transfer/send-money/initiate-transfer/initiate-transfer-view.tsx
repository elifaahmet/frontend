/**@format */
import React, { useEffect, useState } from 'react';

import { compose } from '@tend/frontend/shared/utils';
import {
  B1,
  Layout,
  Spacer,
  Verification,
  sanitizeMoneyInput,
} from '@tend/lego/product-ui-kit';
import { ButtonProduct, Checkbox } from '@tend/shared/design/ui-kit';

import { ESignAgreement } from './components/e-sign-agreement';
import { InitiateTransferComplete } from './components/initiate-transfer-complete';
import { InitiateTransferSendToConfirm } from './components/initiate-transfer-send-to-confirm';
import { InitiateTransferSendToStart } from './components/initiate-transfer-send-to-start';
import { CheckBoxWrapper } from './components/initiate-transfer.styled';
import { TermsAndConditionsModal } from './components/terms-and-conditions.modal';
import {
  InitiateTransferSteps,
  InitiateTransferViewProps,
  InitiateTransferViewState,
  defaultErrorMessage,
} from './initiate-transfer-view.types';

export const InitiateTransferView: React.FC<InitiateTransferViewProps> = (
  props
) => {
  const [state, setState] = useState<InitiateTransferViewState>({
    sendAmount: '',
    receivedAmount: '',
    referenceNumber: '',
    note: '',
    attemptedNext: !!props.errorMessage,
    error: !!props.errorMessage,
    errorMessage: (props.errorMessage || '').trim() || defaultErrorMessage,
  });
  const [step, setStep] = useState<InitiateTransferSteps>('start');
  const [isFraudDisclaimerChecked, setIsFraudDisclaimerChecked] =
    useState(true);
  const [showESignAgreementConfirm, setShowESignAgreementConfirm] =
    useState(false);

  const {
    sendToUser,
    transferType,
    accountInfo,
    rateInfo,
    onSendAmountChange,
    onReceivedAmountChange,
    resendCode,
    withCaptureSingleDigitInputValue,
    onDoneClick,
    onConfirmClick,
    onClickCloseErrorModal,
    showModalTC,
    onClickAgreeModalTC,
    onCancel,
    devicePlatform,
  } = props;

  const sanitizeAndParse = compose(parseFloat, sanitizeMoneyInput);
  const [minAmount, setMinAmount] = useState(1.0);

  useEffect(() => {
    if (transferType === 'us-to-us') {
      setMinAmount(1.0);
    } else {
      setMinAmount(5.0);
    }
  }, [transferType]);

  useEffect(() => {
    const sendAmountNum = sanitizeAndParse(state.sendAmount);

    if (typeof sendAmountNum !== 'number') return;

    setState((prevState) => ({
      ...prevState,
      error: sendAmountNum > accountInfo.balance || sendAmountNum < minAmount,
      errorMessage:
        sendAmountNum > accountInfo.balance
          ? defaultErrorMessage
          : `You need to send at least ${minAmount.toFixed(2)}`,
    }));
  }, [state.sendAmount, accountInfo.balance]);

  const initiateTransferSendToProps = {
    sendToUser,
    transferType,
    accountInfo,
    state,
    setState,
    rateInfo,
    onSendAmountChange,
    onReceivedAmountChange,
  };

  const now = new Date();

  const initiateTransferCompleteProps = {
    sendToUser,
    amountSent: state.sendAmount,
    amountReceived: state.receivedAmount,
    referenceNumber: state.referenceNumber,
    transactionDate: now.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    transferType,
    onDoneClick,
  };

  const transferWithinUS = transferType === 'us-to-us';
  const validMoneyInputs =
    (transferWithinUS && !state.error && !!state.sendAmount) ||
    (!transferWithinUS &&
      !state.error &&
      !!state.sendAmount &&
      !!state.receivedAmount);

  const onNextClick = () => {
    setState((prevState) => ({
      ...prevState,
      attemptedNext: true,
    }));

    if (validMoneyInputs && step === 'start') {
      setStep('confirm');
    } else if (step === 'confirm') {
      const sanitizeParseAndFix = compose(
        (money) => money.toFixed(2),
        sanitizeAndParse
      );
      onConfirmClick(sanitizeParseAndFix(state.sendAmount), state.note);
      setStep('verify');
    } else if (step === 'verify') {
      setStep('complete');
    }
  };

  const afterCorrectOTP = (referenceNumber) => {
    setState((prevState) => ({
      ...prevState,
      referenceNumber,
    }));
    onNextClick();
  };

  return (
    <>
      <Layout>
        {step === 'verify' && (
          <Verification
            phoneNumberLastFour={accountInfo.phoneNumberLastFour}
            resendCode={resendCode}
            captureSingleDigitInputValue={withCaptureSingleDigitInputValue(
              afterCorrectOTP
            )}
          />
        )}
        {(step === 'start' || step === 'confirm') && (
          <>
            <Spacer top={12}>
              {step === 'start' && (
                <InitiateTransferSendToStart
                  {...initiateTransferSendToProps}
                  onClickCloseErrorModal={onClickCloseErrorModal}
                  devicePlatform={devicePlatform}
                />
              )}
              {step === 'confirm' && (
                <InitiateTransferSendToConfirm
                  {...initiateTransferSendToProps}
                  onClickCloseErrorModal={onClickCloseErrorModal}
                  devicePlatform={devicePlatform}
                />
              )}
            </Spacer>
            {step === 'confirm' && transferType === 'us-to-mx' ? (
              <>
                <Spacer top={12} bottom={12}>
                  <CheckBoxWrapper>
                    <Checkbox
                      defaultChecked={true}
                      onChange={() =>
                        setIsFraudDisclaimerChecked(!isFraudDisclaimerChecked)
                      }
                    />
                    <B1>
                      By continuing with this transaction you agree to our{' '}
                      <a
                        style={{ textDecoration: 'underline' }}
                        onClick={(e) =>
                          setShowESignAgreementConfirm(
                            !showESignAgreementConfirm
                          )
                        }
                      >
                        E-Sign Agreement
                      </a>
                      ,{' '}
                      <a
                        href="https://s3.amazonaws.com/static.tend.money/legal/us/en/TERMS_CONDITIONS_AR.pdf"
                        target="_blank"
                      >
                        Terms and Conditions
                      </a>
                      , and{' '}
                      <a
                        href="https://s3.amazonaws.com/static.tend.money/legal/us/en/Tend_Privacy_Policy_AR.pdf"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </B1>
                  </CheckBoxWrapper>
                </Spacer>
                {showESignAgreementConfirm && <ESignAgreement />}
              </>
            ) : (
              <Spacer top={12} bottom={12} />
            )}
            <ButtonProduct
              onClick={() => onNextClick()}
              disabled={
                state.error ||
                !validMoneyInputs ||
                (step === 'confirm' &&
                  !isFraudDisclaimerChecked &&
                  transferType === 'us-to-mx')
              }
            >
              {step === 'confirm' ? 'CONFIRM AND VERIFY' : 'NEXT'}
            </ButtonProduct>
            <Spacer top={16}>
              <ButtonProduct variant="secondary" onClick={onCancel}>
                CANCEL
              </ButtonProduct>
            </Spacer>
          </>
        )}
        {step === 'complete' && (
          <InitiateTransferComplete {...initiateTransferCompleteProps} />
        )}
      </Layout>
      <TermsAndConditionsModal
        showModalTC={showModalTC}
        onClickCloseErrorModal={onClickCloseErrorModal}
        onClickAgreeModalTC={onClickAgreeModalTC}
        devicePlatform={devicePlatform}
      />
    </>
  );
};

export default InitiateTransferView;
