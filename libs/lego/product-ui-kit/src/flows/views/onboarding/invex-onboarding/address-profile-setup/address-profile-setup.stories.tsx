/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AddressProfileSetup } from './address-profile-setup';
import { AddressProfileSetupProps } from './address-profile-setup.types';

export default {
  component: AddressProfileSetup,
  title: 'Flows/Views/Onboarding/Invex/Step 2 - Address Profile Setup',
} as Meta;

const Template: Story<AddressProfileSetupProps> = (args) => (
  <AddressProfileSetup {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  onContinue: (state) => null,
  addressTypeOptions: [
    {
      value: 'home',
      label: 'Home',
    },
    {
      value: 'work',
      label: 'Work',
    },
  ],
  propertyTypeOptions: [
    {
      value: 'owned',
      label: 'Owned',
    },
    {
      value: 'rented',
      label: 'Rented',
    },
  ],
  suburbOptions: [
    {
      value: 'suburb_1',
      label: 'Suburb #1',
    },
    {
      value: 'suburb_2',
      label: 'Suburb #2',
    },
  ],
  state: '',
  municipality: '',
  city: '',
};

export const withStaticAddressDataPopulated = Template.bind({});
withStaticAddressDataPopulated.args = {
  onContinue: (state) => null,
  addressTypeOptions: [
    {
      value: 'home',
      label: 'Home',
    },
    {
      value: 'work',
      label: 'Work',
    },
  ],
  propertyTypeOptions: [
    {
      value: 'owned',
      label: 'Owned',
    },
    {
      value: 'rented',
      label: 'Rented',
    },
  ],
  suburbOptions: [
    {
      value: 'suburb_1',
      label: 'Suburb #1',
    },
    {
      value: 'suburb_2',
      label: 'Suburb #2',
    },
  ],
  state: 'CIUDAD DE MÉXICO',
  municipality: 'MIGUEL HIDALGO',
  city: 'CIUDAD DE MÉXICO',
};
