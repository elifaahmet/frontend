import {Meta, Story} from '@storybook/react';
import {ButtonProps} from '../button.types';
import ButtonMarketingStandard from './button-marketing-standard';
import {DEFAULT, LARGE, MEDIUM, PRIMARY, SMALL} from '../../../constants';
import React from 'react';

export default {
  component: ButtonMarketingStandard,
  title: 'Buttons/Marketing',
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const { children, ...rest } = args;
  return <ButtonMarketingStandard {...rest}>{children}</ButtonMarketingStandard>;
}

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  fill: DEFAULT,
  children: 'Button Small',
  variant: PRIMARY,
  size: SMALL,
  disabled: false
};

export const ButtonMedium = Template.bind({});
ButtonMedium.args = {
  fill: DEFAULT,
  children: 'Button Medium',
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  fill: DEFAULT,
  children: 'Button Large',
  variant: PRIMARY,
  size: LARGE,
  disabled: false
};
