/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AccountType } from './account-type';

export default {
  component: AccountType,
  title: 'Flows/Views/Onboarding/Invex/Step 4 - Account Type',
} as Meta;

const Template: Story = () => <AccountType />;

export const baseView = Template.bind({});
