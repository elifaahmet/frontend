/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonMarketingCTA from './button-marketing-cta';
import { AnchorButtonProps } from '../button.types';

export default {
  component: ButtonMarketingCTA,
  title: 'Buttons/Marketing',
} as Meta;

const Template: Story<AnchorButtonProps> = (args) => (
  <ButtonMarketingCTA {...args}>{args.children}</ButtonMarketingCTA>
);

export const CTAMedium = Template.bind({});
CTAMedium.args = {
  children: 'Button CTA',
  size: 'medium',
  href: 'https://tend.money',
  target: '_blank',
};

export const CTASmall = Template.bind({});
CTASmall.args = {
  children: 'Button CTA',
  size: 'small',
  href: 'https://tend.money',
  target: '_blank',
};
