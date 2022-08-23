/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExternalBankTransferInitialStep } from './external-bank-transfer-initial-step';

export default {
  component: ExternalBankTransferInitialStep,
  title: 'Flows/Views/Banking/TransferFunds/ExternalBankTransfer/InitialStep',
} as Meta;

const Template: Story = () => <ExternalBankTransferInitialStep />;

export const baseView = Template.bind({});
baseView.args = {};
