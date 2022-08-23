/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VerifyFunding } from './verify-funding';
import { VerifyFundingProps } from './verify-funding.types';

export default {
  component: VerifyFunding,
  title: 'Flows/Views/Onboarding/Invex/Step 6 - Verify Funding',
} as Meta;

const Template: Story<VerifyFundingProps> = (args) => (
  <VerifyFunding {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  onContinue: (state) => null,
};
