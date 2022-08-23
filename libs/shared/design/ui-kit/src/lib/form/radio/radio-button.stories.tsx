/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './radio-button';

export default {
  component: RadioButton,
  title: 'Form/Elements/Radio',
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const twoGang = Template.bind({});
twoGang.args = {
  labels: ['Accept', 'Reject'],
  radioGroupName: 'offerYouCanRefuse',
};

export const threeGang = Template.bind({});
threeGang.args = {
  labels: ['One', 'Two', 'Three'],
  radioGroupName: 'choices',
};
