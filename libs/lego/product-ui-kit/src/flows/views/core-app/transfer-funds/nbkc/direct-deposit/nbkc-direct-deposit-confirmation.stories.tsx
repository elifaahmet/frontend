/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  NBKCDirectDepositConfirmation,
  NBKCDirectDepositConfirmationProps,
} from './nbkc-direct-deposit-confirmation';

export default {
  component: NBKCDirectDepositConfirmation,
  title: 'Flows/Views/Banking/TransferFunds/NBKC/DirectDepositConfirmation',
} as Meta;

const Template: Story<NBKCDirectDepositConfirmationProps> = (args) => (
  <NBKCDirectDepositConfirmation {...args} />
);

export const defaultView = Template.bind({});
defaultView.args = {};

export const plaid = Template.bind({});
plaid.args = {
  source: 'plaid',
};

export const complete = Template.bind({});
complete.args = {
  source: 'complete',
};

export const employer = Template.bind({});
employer.args = {
  source: 'hr',
};
