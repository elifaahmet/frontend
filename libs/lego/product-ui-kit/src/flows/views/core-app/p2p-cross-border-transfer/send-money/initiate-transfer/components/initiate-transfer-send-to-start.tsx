/**@format */
import React, { useState } from 'react';

import { compose, noEmojis } from '@tend/frontend/shared/utils';
import {
  Spacer,
  onBlurReformatValueToMoney,
  onChangeFormatInputToDollarString,
  sanitizeMoneyInput,
} from '@tend/lego/product-ui-kit';
import { Input } from '@tend/shared/design/ui-kit';

import { InitiateTransferSendToProps } from '../initiate-transfer-view.types';
import { InitiateTransferSendToSectionFromAccount } from './initiate-transfer-send-to-section-from-account';
import { InitiateTransferSendToSectionRateInfo } from './initiate-transfer-send-to-section-rate-info';
import { InitiateTransferSendToUserSection } from './initiate-transfer-send-to-section-user';

export const InitiateTransferSendToStart: React.FC<
  InitiateTransferSendToProps
> = (props) => {
  const {
    sendToUser,
    transferType,
    accountInfo,
    state,
    setState,
    rateInfo,
    onSendAmountChange,
    onReceivedAmountChange,
  } = props;

  const initiateTransferSendToUserSectionProps = {
    sendToUser,
    heading: 'SEND TO' as const,
  };

  const initiateTransferSendToSectionFromAccount = {
    accountInfo,
    state,
  };

  const [doesSendHasFocus, setDoesSendHasFocus] = useState(false);

  const amountSendingProps = {
    type: 'text',
    name: transferType === 'us-to-us' ? 'amount-sending' : 'amount-sending-usd',
    label: transferType === 'us-to-us' ? 'Amount' : "Amount you're sending",
    variant: 'large' as const,
    placeholder: '$0.00',
    errorOrValidationSubtext: state.errorMessage,
    error: state.error,
    value: state.sendAmount || '',
    onChange: (e) => {
      const newValue = onChangeFormatInputToDollarString(e);
      if (newValue !== null) {
        setState((prevState) => ({
          ...prevState,
          sendAmount: newValue,
        }));

        if (onSendAmountChange && doesSendHasFocus) {
          const sanitizeParseAndChangeSendAmount = compose(
            onSendAmountChange,
            sanitizeMoneyInput
          );
          sanitizeParseAndChangeSendAmount(newValue).then((receivedAmount) =>
            setState((prevState) => ({
              ...prevState,
              receivedAmount,
            }))
          );
        }
      }
    },
    onBlur: () => {
      if (!state.sendAmount) return;
      setState((prevState) => ({
        ...prevState,
        sendAmount: onBlurReformatValueToMoney(state.sendAmount),
      }));
    },
    onFocus: () => setDoesSendHasFocus(true),
  };

  const amountReceivedProps = {
    type: 'text',
    name: 'amount-received-mxn',
    label: 'Amount they receive',
    variant: 'large' as const,
    placeholder: '$0.00',
    errorOrValidationSubtext: state.errorMessage,
    error: state.error,
    value: state.receivedAmount || '',
    onChange: (e) => {
      const newValue = onChangeFormatInputToDollarString(e);
      if (newValue !== null) {
        setState((prevState) => ({
          ...prevState,
          receivedAmount: newValue,
        }));
        if (onReceivedAmountChange && !doesSendHasFocus) {
          const sanitizeParseAndChangeReceivedAmount = compose(
            onReceivedAmountChange,
            sanitizeMoneyInput
          );
          sanitizeParseAndChangeReceivedAmount(newValue).then((sendAmount) =>
            setState((prevState) => ({
              ...prevState,
              sendAmount,
            }))
          );
        }
      }
    },
    onBlur: () => {
      if (!state.receivedAmount) return;
      setState((prevState) => ({
        ...prevState,
        receivedAmount: onBlurReformatValueToMoney(state.receivedAmount),
      }));
    },
    onFocus: () => setDoesSendHasFocus(false),
  };

  const noteInputProps = {
    type: 'text',
    name: 'note',
    label: 'note',
    placeholder: 'Add a note (optional)',
    value: state.note,
    onChange: (e) => {
      const { value } = e.target;

      setState((prevState) => ({
        ...prevState,
        note: noEmojis(value),
      }));
    },
  };

  return (
    <div>
      <InitiateTransferSendToUserSection
        {...initiateTransferSendToUserSectionProps}
      />
      <Spacer top={20} bottom={20} />
      <Input {...amountSendingProps} inputMode="numeric" />
      {transferType === 'us-to-mx' && (
        <>
          <Spacer top={20} bottom={20} />
          <Input {...amountReceivedProps} inputMode="numeric" />
        </>
      )}
      {transferType === 'us-to-mx' && (
        <InitiateTransferSendToSectionRateInfo {...rateInfo} />
      )}
      <Spacer top={20} bottom={20} />
      <Input {...noteInputProps} type="text" />
      <Spacer top={20} bottom={20} />
      <InitiateTransferSendToSectionFromAccount
        {...initiateTransferSendToSectionFromAccount}
      />
    </div>
  );
};

export default InitiateTransferSendToStart;
