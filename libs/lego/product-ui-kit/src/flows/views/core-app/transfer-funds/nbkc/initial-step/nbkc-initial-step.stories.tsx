/**@format*/

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NBKCInitialStep } from './nbkc-initial-step';

export default {
  component: NBKCInitialStep,
  title: 'Flows/Views/Banking/TransferFunds/NBKC/InitialStep',
} as Meta;

const Template: Story = () => <NBKCInitialStep />;

export const baseView = Template.bind({});
