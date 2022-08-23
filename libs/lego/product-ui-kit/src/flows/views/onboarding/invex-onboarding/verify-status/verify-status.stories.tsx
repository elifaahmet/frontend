/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VerifyStatus } from './verify-status';
import { VerifyStatusProps } from './verify-status.types';

export default {
  component: VerifyStatus,
  title: 'Flows/Views/Onboarding/Invex/Step 7 - Verify Status',
} as Meta;

const Template: Story<VerifyStatusProps> = (args) => <VerifyStatus {...args} />;

export const baseView = Template.bind({});
baseView.args = {
  governmentPositions: [
    {
      value: 'corpo',
      label: 'Corporate Shill',
    },
    {
      value: 'thug',
      label: 'Military IC Shill',
    },
    {
      value: 'hack',
      label: 'Partisan Hack',
    },
    {
      value: 'all-of-the-above',
      label: 'Senator',
    },
  ],
  relativeContributionOptions: [
    {
      value: '25%',
      label: '25%',
    },
    {
      value: '50%',
      label: '50%',
    },
    {
      value: '75%',
      label: '75%',
    },
    {
      value: '100%',
      label: '100%',
    },
  ],
  onContinue: (state) => null,
};
