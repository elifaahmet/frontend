/** @format **/
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useService } from '@tend/frontend/shared/react-utils';
import {
  IUser,
  InitiateTransferView,
  InitiateTransferViewProps,
} from '@tend/lego/product-ui-kit';

enum Currency {
  USD = 'USD',
  MXN = 'MXN',
}

enum TransactionType {
  CROSS_BORDER = 'CROSS_BORDER',
  INTERNAL_TO_INTERNAL = 'INTERNAL_TO_INTERNAL',
}

enum AccountType {
  DDA = 'DDA',
  SSA = 'SSA',
  LOC = 'LOC',
}

export function InitiateTransfer(props) {
  const {
    2: { queries: queriesTransaction, mutations: mutationsTransaction },
  } = useService('service_transaction');
  const {
    2: { queries: queriesAuth },
  } = useService('service_auth');
  const location = useLocation();
  const state = location.state as IUser;

  const [accountInfo, setAccountInfo] = useState({
    type: 'checking',
    lastFour: '9999',
    balance: 0.0,
    phoneNumberLastFour: '9999',
  });
  const [conversionRate, setConversionRate] = useState(0.0);
  const [transferType, setTransferType] = useState('us-to-us');
  const [transactionObject, setTransactionObject] = useState({
    amount: 0.0,
    currency: Currency.USD,
    note: '',
    otp: '',
    toId: state.memberId,
    transferType: TransactionType.INTERNAL_TO_INTERNAL,
  });
  const [showModalTC, setShowModalTC] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation(['mf-p2p']);
  const {
    currentUser,
    country,
    setShowSpinner,
    showModalAndRedirect,
    showModalNoRedirection,
    devicePlatform,
  } = props;

  const onClickCloseErrorModal = () => {
    navigate('/');
  };

  const catchError = (error) => {
    if (error.message === 'Authentication Token is expired.') {
      return showModalAndRedirect('/logout/done')({
        flag: true,
        message: error.message,
        code: '0001',
      });
    }
    const possibleCode = Number.parseInt(error.message);
    if (Number.isNaN(possibleCode)) {
      showModalAndRedirect('/')({
        flag: true,
        message: error.message,
        code: '',
      });
    } else if (error.message === '0001') {
      showModalAndRedirect('/logout/done')({
        flag: true,
        message: error.message,
        code: error.message,
      });
    } else {
      showModalAndRedirect('/')({
        flag: true,
        message: error.message,
        code: error.message,
      });
    }
  };

  useEffect(() => {
    if (transferType === 'us-to-mx') {
      const { dwollaTncAccepted, currencyCloudTncAccepted } = currentUser;
      setShowModalTC(!dwollaTncAccepted || !currencyCloudTncAccepted);
      if (dwollaTncAccepted && currencyCloudTncAccepted) {
        onSendAmountChange(1);
      }
    }
  }, [transferType]);

  useEffect(() => {
    queriesTransaction
      .getAccounts()
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          throw new Error(code);
        }
        const { getAccounts } = data;
        const { phone } = currentUser;

        const foundAccount = getAccounts.find(
          (account) =>
            account.accountType === AccountType.DDA && account.status === 'Open'
        );
        if (foundAccount) {
          setAccountInfo({
            type: 'checking',
            balance: Number.parseFloat(foundAccount.availableBalance),
            phoneNumberLastFour: phone,
            lastFour: foundAccount.accountNumber,
          });
          setTransferType(
            `${country.toLowerCase()}-to-${state.country.toLowerCase()}`
          );
        } else {
          throw new Error('Account Not Found');
        }
      })
      .catch(catchError);
  }, []);

  const withOnSendOrReceiveAmountChange =
    (fromCurrency) => (toCurrency) => (amount) => {
      if (fromCurrency === toCurrency) {
        return Promise.resolve(amount);
      }
      return queriesTransaction
        .getP2PFxRate({
          amount,
          fromCurrency,
          toCurrency,
        })
        .then(({ data, errors, code }) => {
          if (errors?.length) {
            throw new Error(code);
          }
          const {
            p2pFxRate: { rate, amount },
          } = data;
          setConversionRate(Number.parseFloat(rate));
          return amount;
        })
        .catch(catchError);
    };

  const onSendAmountChange = withOnSendOrReceiveAmountChange(
    country === 'US' ? Currency.USD : Currency.MXN
  )(state.country.toUpperCase() === 'US' ? Currency.USD : Currency.MXN);
  const onReceivedAmountChange = withOnSendOrReceiveAmountChange(
    state.country.toUpperCase() === 'US' ? Currency.USD : Currency.MXN
  )(country === 'US' ? Currency.USD : Currency.MXN);

  const debouncedOnSendOrReceivedAmountChange = (ms) => (fn) => {
    let timer = null;
    return (amount) => {
      clearTimeout(timer);
      return new Promise((res, rej) => {
        timer = setTimeout(
          () =>
            fn(amount)
              .then((data) => res(data))
              .catch((err) => rej(err)),
          ms
        );
      });
    };
  };

  const debouncedWith750ms = debouncedOnSendOrReceivedAmountChange(750);

  const onClickAgreeModalTC = (isCheckBoxClicked) => {
    if (isCheckBoxClicked) {
      mutationsTransaction
        .getExternalTermsAndConditions({
          currencyCloudAccepted: true,
          dwollaAccepted: true,
        })
        .then(({ data, errors, code }) => {
          if (errors?.length) {
            throw new Error(code);
          }
          if (data.externalTermsAndConditions.ok) {
            setShowModalTC(false);
            onSendAmountChange(1);
          } else {
            throw new Error(data.externalTermsAndConditions.message);
          }
        })
        .catch(catchError);
    }
  };

  const sendCodeAndPrepareTransaction = (amount, note = '') => {
    mutationsTransaction
      .sendVerificationCodeForP2p({})
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          throw new Error(code);
        }
        const { sendVerificationCodeForP2p } = data;
        const transactionType =
          transferType === 'us-to-mx'
            ? TransactionType.CROSS_BORDER
            : TransactionType.INTERNAL_TO_INTERNAL;

        setTransactionObject((prevState) => ({
          ...prevState,
          otp: sendVerificationCodeForP2p.code,
          amount,
          transferType: transactionType,
          note,
        }));
      })
      .catch(catchError);
  };

  const sendToUser = state;
  const transferProps = {
    sendToUser,
    transferType,
    accountInfo: {
      ...accountInfo,
      lastFour: Number.parseInt(accountInfo.lastFour.slice(-4)),
      phoneNumberLastFour: Number.parseInt(
        accountInfo.phoneNumberLastFour.slice(-4)
      ),
    },
    rateInfo: {
      conversionRate,
      explainerText: t('mf-p2p.initiate-transfer.explainerText'),
      modalExplainerText: t('mf-p2p.initiate-transfer.modalExplainerText'),
    },
    onSendAmountChange: debouncedWith750ms(onSendAmountChange),
    onReceivedAmountChange: debouncedWith750ms(onReceivedAmountChange),
    withCaptureSingleDigitInputValue: (cb) => (value) => {
      if (value.toString().length === 6) {
        setShowSpinner(true);
        mutationsTransaction
          .createTransaction({
            transfer: { ...transactionObject, otp: value.toString() },
          })
          .then(({ data, errors, code }) => {
            setShowSpinner(false);
            if (errors?.length) {
              throw new Error(code);
            }
            if (data.createTransaction.ok) {
              const referenceNumber =
                data.createTransaction.transfer.transactionId;
              cb(referenceNumber);
            }
          })
          .catch(catchError);
      }
    },
    onDoneClick: () => navigate('/'),
    onConfirmClick: sendCodeAndPrepareTransaction,
    resendCode: sendCodeAndPrepareTransaction,
    onCancel: () => navigate('/'),
  } as InitiateTransferViewProps;

  return (
    <InitiateTransferView
      {...transferProps}
      onClickCloseErrorModal={onClickCloseErrorModal}
      showModalTC={showModalTC}
      onClickAgreeModalTC={onClickAgreeModalTC}
      devicePlatform={devicePlatform}
    />
  );
}
