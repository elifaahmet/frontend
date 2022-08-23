/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PersonalInfo } from './personal-info';
import { PersonalInfoProps } from './personal-info.types';

export default {
  component: PersonalInfo,
  title: 'Flows/Views/Onboarding/Invex/Step 5 - Personal Info',
} as Meta;

const Template: Story<PersonalInfoProps> = (args) => <PersonalInfo {...args} />;

export const baseView = Template.bind({});
baseView.args = {
  onContinue: (state) => null,
  countryOptions: [
    {
      value: 'mx',
      label: 'Mexico',
    },
    {
      value: 'us',
      label: 'USA',
    },
  ],
  placeOfBirthOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  sexOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  maritalStatusOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  educationOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  occupationOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  professionOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  economicActivityOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
  banxicoActivityOptions: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ],
};
