/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TypographyProps } from '../../typography.types';
import H2 from './h2';

export default {
  component: H2,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <H2 color={args.color}>{args.children}</H2>
);

export const h2 = Template.bind({});
h2.args = {
  children: 'List Item Headline',
};
