/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OXXOMoneyDeposit, OXXOMoneyDepositProps } from './oxxo-money-deposit';

export default {
  component: OXXOMoneyDeposit,
  title: 'Flows/Views/Banking/TransferFunds/Invex/OXXOMoneyDeposit',
} as Meta;

const Template: Story<OXXOMoneyDepositProps> = (args) => (
  <OXXOMoneyDeposit {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  tendDebitCardNumber: 'Tend card number',
  tendBankName: 'Tend bank name',
  directDepositOnClick: (e) => null,
  doneOnClick: (e) => null,
};
