/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ExternalBankTransferConfirmation,
  ExternalBankTransferConfirmationProps,
} from './external-bank-transfer-confirmation';

export default {
  component: ExternalBankTransferConfirmation,
  title: ' Flows/Views/Banking/TransferFunds/ExternalBankTransfer/Confirmation',
} as Meta;

const Template: Story<ExternalBankTransferConfirmationProps> = (args) => (
  <ExternalBankTransferConfirmation {...args} />
);

export const basicView = Template.bind({});
basicView.args = {
  amount: 100,
  customerName: 'Andre Agassi',
  accountNumber: '5260',
  bankName: 'Wells Fargo',
  date: '01/03/2022',
};
