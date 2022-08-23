/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TypographyProps } from '../../typography.types';
import H3 from './h3';

export default {
  component: H3,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <H3 color={args.color}>{args.children}</H3>
);

export const h3 = Template.bind({});
h3.args = {
  children: 'List Item Headline',
};
