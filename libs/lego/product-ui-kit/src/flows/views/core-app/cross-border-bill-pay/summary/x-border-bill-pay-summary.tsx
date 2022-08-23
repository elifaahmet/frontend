/**@format */
import React from 'react';

import {
  AccountBalance,
  AccountBalanceProps,
  B1,
  B2,
  B3,
  ConfirmedChoice,
  InputStyleText,
  L1,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  formatNumberToMoneyString,
} from '@tend/lego/product-ui-kit';

import { TransactionSummary } from './x-border-bill-pay-summary.styled';
import { XBorderBillPaySummaryProps } from './x-border-bill-pay-summary.types';

export const XBorderBillPaySummary: React.FC<XBorderBillPaySummaryProps> = (
  props
) => {
  const {
    amountDue,
    amountSending,
    exchangeRate,
    exchangeRateText,
    recipient,
    accountNumber,
    note,
    bankAccountBalance,
    bankAccountLastFour,
    bankAccountType,
    onClickSendPayment,
    onClickCancel,
  } = props;

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'confirm and verify',
        onClick: onClickSendPayment,
      },
      {
        children: 'cancel',
        variant: 'secondary',
        onClick: onClickCancel,
      },
    ],
  };

  const accountBalanceProps: AccountBalanceProps = {
    amount: bankAccountBalance,
    accountNumberLastFour: bankAccountLastFour,
    accountType: bankAccountType,
    errorMessage: '',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <Spacer top={16} bottom={16} />
      <TransactionSummary>
        <L1>AMOUNT DUE</L1>
        <Spacer top={4} />
        <InputStyleText variant="large">
          {formatNumberToMoneyString(amountDue)}
          <span className="currency">MXN</span>
        </InputStyleText>
        <Spacer top={20} bottom={20} />
        <L1>AMOUNT YOU'RE SENDING</L1>
        <Spacer top={4} />
        <InputStyleText variant="large">
          {formatNumberToMoneyString(amountSending)}
          <span className="currency">USD</span>
        </InputStyleText>
        <Spacer top={16} bottom={16} />
        <L1 useOpacity bold>
          1 USD = {exchangeRate} MXN
        </L1>
        <Spacer top={8} />
        <B3 useOpacity>{exchangeRateText}</B3>
      </TransactionSummary>
      <Spacer top={16} bottom={16} />
      <L1>TO</L1>
      <Spacer top={16} />
      <ConfirmedChoice>
        <B1 bold color="neutral-off-white">
          {recipient}
        </B1>
        <Spacer top={8} />
        <B2 color="neutral-off-white">Account: {accountNumber}</B2>
      </ConfirmedChoice>
      <Spacer top={16} bottom={16} />
      {!!note && (
        <>
          <L1>Note</L1>
          <Spacer top={12} />
          <B3 useOpacity>{note}</B3>
        </>
      )}
      <Spacer top={16} bottom={16} />
      <AccountBalance {...accountBalanceProps} />
      <Spacer top={16} />
    </PageTemplateBottomDockedButtons>
  );
};
