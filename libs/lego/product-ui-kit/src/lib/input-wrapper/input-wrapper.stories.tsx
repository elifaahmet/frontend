/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputWrapper, InputWrapperProps } from './input-wrapper';

export default {
  component: InputWrapper,
  title: 'InputWrapper',
} as Meta;

const inputProps = {
  type: 'text',
  name: 'street-name',
  label: 'street name',
};
const Template: Story<InputWrapperProps> = (args) => <InputWrapper {...args} />;

export const defaultRender = Template.bind({});
defaultRender.args = {
  inputProps: inputProps,
};

export const requiredRender = Template.bind({});
requiredRender.args = {
  inputProps: inputProps,
  isRequired: true,
};
