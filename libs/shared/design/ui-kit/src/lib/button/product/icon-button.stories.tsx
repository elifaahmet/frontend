/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonProps } from '../button.types';
import ButtonProductIcon from './button-product-icon';

export default {
  component: ButtonProductIcon,
  title: 'Buttons/Product',
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const { children, ...rest } = args;
  return <ButtonProductIcon {...rest}>{children}</ButtonProductIcon>;
};

export const icon = Template.bind({});
icon.args = {
  children: 'Button',
  disabled: false,
  iconName: 'personal-details',
};
