/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
  XBorderBillPaySummary,
  XBorderBillPaySummaryProps,
} from './x-border-bill-pay-summary';

export default {
  component: XBorderBillPaySummary,
  title: 'Flows/Views/Banking/CrossBorderBillPay/Summary',
} as Meta;

const Template: Story<XBorderBillPaySummaryProps> = (args) => (
  <XBorderBillPaySummary {...args} />
);

const exchangeRateText =
  'Exchange rates fluctuate based on market rates, and will be re-priced for each transaction based on the market rates at that time. The rate presented is valid for immediate execution only. Any delays in confirming the transaction, including application time-out, may cause changes to the available exchange rate.';
const note =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo...';

export const baseView = Template.bind({});
baseView.args = {
  amountDue: 45 * 19.178,
  amountSending: 45,
  exchangeRate: 19.718,
  exchangeRateText,
  accountNumber: '0956852334567876-09',
  note,
  recipient: 'Comisión Federal de Electricidad (CFE)\rMichoacan 04',
  bankAccountLastFour: 1847,
  bankAccountBalance: 45654,
  bankAccountType: 'checking' as const,
  onClickSendPayment: () => null,
};
