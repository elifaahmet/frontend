/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonProductStandard from './button-product-standard';
import { ButtonProps } from '../button.types';
import { PRIMARY, SECONDARY } from '../../../constants';

export default {
  component: ButtonProductStandard,
  title: 'Buttons/Product',
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const { children, ...rest } = args;
  return <ButtonProductStandard {...rest}>{children}</ButtonProductStandard>;
};

export const primary = Template.bind({});
primary.args = {
  variant: PRIMARY,
  children: 'Button Primary',
};

export const secondary = Template.bind({});
secondary.args = {
  variant: SECONDARY,
  children: 'Button Secondary',
};
