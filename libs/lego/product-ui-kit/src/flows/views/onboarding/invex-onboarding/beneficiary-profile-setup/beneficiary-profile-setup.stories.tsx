/**@format */

import { Meta, Story } from '@storybook/react';
import { BeneficiaryProfileSetup } from './beneficiary-profile-setup';
import { BeneficiarySetupProps } from './beneficiary-profile-setup.types';

export default {
  component: BeneficiaryProfileSetup,
  title: 'Flows/Views/Onboarding/Invex/Step 3 - Beneficiary Profile Setup View',
} as Meta;

const Template: Story<BeneficiarySetupProps> = (args) => (
  <BeneficiaryProfileSetup {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  onContinue: (state) => null,
  relationshipOptions: [
    {
      value: 'spouse',
      label: 'Spouse',
    },
    {
      value: 'child',
      label: 'Child',
    },
    {
      value: 'parent',
      label: 'Parent',
    },
  ],
};
