/**@format */

/**@format*/

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NBKCDirectDeposit } from './nbkc-direct-deposit';

export default {
  component: NBKCDirectDeposit,
  title: 'Flows/Views/Banking/TransferFunds/NBKC/DirectDeposit',
} as Meta;

const Template: Story = () => <NBKCDirectDeposit />;

export const baseView = Template.bind({});
