/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
  XBorderBillPaySuccess,
  XBorderBillPaySuccessProps,
} from './x-border-bill-pay-success';

export default {
  component: XBorderBillPaySuccess,
  title: 'Flows/Views/Banking/CrossBorderBillPay/Success',
} as Meta;

const Template: Story<XBorderBillPaySuccessProps> = (args) => (
  <XBorderBillPaySuccess {...args} />
);

const disclaimer = `
You have the right to dispute errors in your transaction.  If you think there is an error, contact us within 180 days at  XXX-XXX-XXXX.  You can also contact us for a written explanation of your rights.
<br/><br/>
You can cancel for a full refund within 30 minutes of paymet, unless the funds have been picked up or deposited.
<br/><br/>
For questions or complaints about NAME OF BANK, contact:
<br/><br/>
State Regulatory Agency<br/>
California Department of Corporations<br/>
Financial Services Division<br/>
1515 K Street, Suite 200<br/>
Sacramento, CA 95814<br/>
866-275-2677<br/>
www.corp.ca.gov<br/>
<br/><br/>
Consumer Financial Protection Bureau<br/>
855-411-2372<br/>
855-729-2372 (TTY/TDD)<br/>
Consumerfinance.gov/sending-money
`;

export const baseView = Template.bind({});
baseView.args = {
  amountDue: 45 * 19.178,
  amountSending: 45,
  recipient: 'Comisión Federal de Electricidad (CFE)\rMichoacan 04',
  referenceNumber: '12345678910',
  date: 'November 02, 2021',
  disclaimer,
  status: 'success',
};

export const pendingView = Template.bind({});
pendingView.args = {
  amountDue: 45 * 19.178,
  amountSending: 45,
  recipient: 'Comisión Federal de Electricidad (CFE)\rMichoacan 04',
  referenceNumber: '12345678910',
  date: 'November 02, 2021',
  disclaimer,
  status: 'pending',
};
