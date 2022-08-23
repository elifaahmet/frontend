/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TypographyProps } from '../../typography.types';
import H1 from './h1';

export default {
  component: H1,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <H1 color={args.color}>{args.children}</H1>
);

export const h1 = Template.bind({});
h1.args = {
  children: 'Mobile Headline',
};
