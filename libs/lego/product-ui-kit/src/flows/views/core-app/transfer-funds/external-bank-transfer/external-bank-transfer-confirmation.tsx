/**@format */

import React from 'react';
import { ButtonProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  Spacer,
  H1,
  B1,
  L1,
  Separator,
  formatNumberToIntegerMoneyString,
  formatNumberToMoneyString,
} from '@tend/lego/product-ui-kit';
import { ConfirmationStepHeaderWrapper } from './external-bank-transfer.styled';

export interface ExternalBankTransferConfirmationProps {
  amount: number;
  customerName: string;
  accountNumber: string;
  bankName: string;
  date: string;
}

export const ExternalBankTransferConfirmation: React.FC<ExternalBankTransferConfirmationProps> = (
  props
) => {
  const { amount, customerName, accountNumber, bankName, date } = props;
  const buttonsProps: ButtonProps[] = [
    {
      children: 'submit',
    },
  ];

  const pageTemplateProps = {
    buttonsProps,
  };

  const dollarAmount = Number.isInteger(amount)
    ? formatNumberToIntegerMoneyString(amount)
    : formatNumberToMoneyString(amount);

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <ConfirmationStepHeaderWrapper>
        <H1 color="primary-yellow">{dollarAmount}</H1>
        <Spacer top={16} />
        <B1>Amount transferring to Tend</B1>
        <Spacer top={16} />
      </ConfirmationStepHeaderWrapper>
      <Separator contained small color="primary-yellow" />
      <Spacer top={16} />
      <L1>ACH AUTHORIZATION</L1>
      <Spacer top={16} />
      <B1>
        By tapping Submit, you, {customerName} authorize a one-time payment of{' '}
        {dollarAmount} to your Meed account ending in {accountNumber} from your
        pay-from account ending in {bankName} {accountNumber} as an ACH debit.
        The date of the payment to your Meed account will be {date}.
        <br />
        <br />
        The withdrawal from your pay-from account generally happens within 3-5
        business days of this payment date, but the exact timing depends on your
        bank’s processing schedule.
        <br />
        <br />
        You can print or save the confirmation screen for receipt of this
        scheduled payment.
      </B1>
    </PageTemplateBottomDockedButtons>
  );
};

export default ExternalBankTransferConfirmation;
