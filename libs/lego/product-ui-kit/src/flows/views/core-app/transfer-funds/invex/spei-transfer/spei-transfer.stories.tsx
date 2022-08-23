/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SPEITransfer, SPEITransferProps } from './spei-transfer';

export default {
  component: SPEITransfer,
  title: 'Flows/Views/Banking/TransferFunds/Invex/SPEITransfer',
} as Meta;

const Template: Story<SPEITransferProps> = (args) => <SPEITransfer {...args} />;

export const baseView = Template.bind({});
baseView.args = {
  tendAccountClabe: 'Tend account clabe',
  tendBankName: 'Tend bank name',
  directDepositOnClick: (e) => null,
  doneOnClick: (e) => null,
};
