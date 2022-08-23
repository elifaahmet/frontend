/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExternalBankTransferPostConfirmation } from './external-bank-transfer-post-confirmation';

export default {
  component: ExternalBankTransferPostConfirmation,
  title: 'Flows/Views/Banking/TransferFunds/ExternalBankTransfer/PostTransfer',
} as Meta;

const Template: Story = () => <ExternalBankTransferPostConfirmation />;

export const baseView = Template.bind({});
baseView.args = {};
