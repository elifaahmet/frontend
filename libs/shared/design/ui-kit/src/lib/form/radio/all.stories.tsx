/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import RadioButton, { RadioButtonProps } from './radio-button';
import { ColorName } from '@tend/shared/design/tokens';

export default {
  component: RadioButton,
  title: 'Form/Elements/Radio',
} as Meta;

interface AllRadioButtonsStoryProps {
  twoGang: RadioButtonProps;
  threeGang: RadioButtonProps;
  selectedColor: null | ColorName;
}

const Template: Story<AllRadioButtonsStoryProps> = (args) => (
  <div>
    <RadioButton {...args.twoGang} selectedColor={args.selectedColor} />
    <br />
    <RadioButton {...args.threeGang} selectedColor={args.selectedColor} />
  </div>
);

export const allRadioButtons = Template.bind({});
allRadioButtons.args = {
  twoGang: {
    labels: ['One', 'Two', 'Three'],
    radioGroupName: 'choices',
  },
  threeGang: {
    labels: ['Accept', 'Reject'],
    radioGroupName: 'offerYouCanRefuse',
  },
  selectedColor: null,
};
