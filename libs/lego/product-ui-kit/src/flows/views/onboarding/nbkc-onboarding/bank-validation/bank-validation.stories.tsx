/**@format */
import { Meta, Story } from '@storybook/react';

import { BankValidationView } from './bank-validation';
import { BankValidationProps } from './bank-validation.types';
import { stateLabelValues } from './helpers';

export default {
  component: BankValidationView,
  title: 'Flows/Views/Onboarding/nbkc/Step 2 - Bank Validation',
} as Meta;

const Template: Story<BankValidationProps> = (args) => (
  <BankValidationView {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  idTypeOptions: [
    {
      value: 'dl',
      label: "Driver's License",
    },
    {
      value: 'pp',
      label: 'Passport',
    },
    {
      value: 'sid',
      label: 'State ID',
    },
    {
      value: 'mid',
      label: 'Military ID',
    },
  ],
  issuerOptions: stateLabelValues.options,
  onContinue: (state) => null,
};
