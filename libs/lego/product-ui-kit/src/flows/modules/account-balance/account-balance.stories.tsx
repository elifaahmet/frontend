/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Layout } from '@tend/lego/product-ui-kit';

import { AccountBalance, AccountBalanceProps } from './account-balance';

export default {
  component: AccountBalance,
  title: 'Flows/Modules/AccountBalance',
} as Meta;

const Template: Story<AccountBalanceProps> = (args) => (
  <Layout>
    <AccountBalance {...args} />
  </Layout>
);

export const checking = Template.bind({});
checking.args = {
  amount: 10345,
  accountType: 'checking' as const,
  accountNumberLastFour: 3471,
};

export const checkingWithError = Template.bind({});
checkingWithError.args = {
  amount: 10345,
  accountType: 'checking' as const,
  accountNumberLastFour: 3471,
  errorMessage: 'Insufficient funds, please enter a smaller amount.',
  inline: true,
};

export const savings = Template.bind({});
savings.args = {
  amount: 46120.5,
  accountType: 'savings' as const,
  accountNumberLastFour: 7982,
};
