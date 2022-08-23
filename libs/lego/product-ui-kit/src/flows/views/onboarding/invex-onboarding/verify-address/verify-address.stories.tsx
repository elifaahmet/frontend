/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VerifyAddress } from './verify-address';
import { VerifyAddressProps } from './verify-address.types';

export default {
  component: VerifyAddress,
  title: 'Flows/Views/Onboarding/Invex/Step 8 - Verify Address',
} as Meta;

const Template: Story<VerifyAddressProps> = (args) => (
  <VerifyAddress {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  utilityBillOptions: [
    {
      value: 'electric',
      label: 'Electric Bill',
    },
    {
      value: 'phone',
      label: 'Phone Bill',
    },
    {
      value: 'bank',
      label: 'Bank Statement',
    },
  ],
  onContinue: (e) => null,
  fileUploadProps: {
    onFileSelect: () => null,
    id: 'file-upload',
    caption: 'Scan Utility Bill',
    onUpload: (e) => Promise.resolve({ success: true }),
  },
};
