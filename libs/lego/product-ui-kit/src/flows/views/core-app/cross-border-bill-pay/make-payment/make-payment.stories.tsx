/**@format */
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { MakePayment, MakePaymentProps } from './make-payment';

export default {
  component: MakePayment,
  title: 'Flows/Views/Banking/CrossBorderBillPay/MakePayment',
} as Meta;

const Template: Story<MakePaymentProps> = (args) => {
  const [convertedAmount, setConvertedAmount] = useState(0);

  const onAmountChange = (amount: string) => {
    setConvertedAmount(
      parseInt(amount.replace(/\D/g, ''), 10) / props.exchangeRate
    );
  };

  const props: MakePaymentProps = {
    ...args,
    amountInUSD: convertedAmount,
    onAmountChange,
  };

  return <MakePayment {...props} />;
};

const exchangeRateText =
  'Exchange rates fluctuate based on market rates, and will be re-priced for each transaction based on the market rates at that time. The rate presented is valid for immediate execution only. Any delays in confirming the transaction, including application time-out, may cause changes to the available exchange rate.';

export const baseView = Template.bind({});
baseView.args = {
  confirmedChoice: 'Comisión Federal de Electricidad (CFE)\rMichoacan 04',
  accountNumber: '011238134987134',
  bankAccountLastFour: 1847,
  bankAccountBalance: 45654,
  bankAccountType: 'checking' as const,
  exchangeRate: 19.718,
  exchangeRateText,
};

export const withError = Template.bind({});
withError.args = {
  confirmedChoice: 'Comisión Federal de Electricidad (CFE)\rMichoacan 04',
  accountNumber: '011238134987134',
  bankAccountLastFour: 1847,
  bankAccountBalance: 45654,
  bankAccountType: 'checking' as const,
  exchangeRate: 19.718,
  exchangeRateText,
  errorMessage: 'Insufficient funds. Enter a smaller amount.',
};
