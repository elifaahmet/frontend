/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import L1 from './l1';
import { TypographyProps } from '../../typography.types';

export default {
  component: L1,
  title: 'Typography/Label',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <L1 color={args.color}>{args.children}</L1>
);

export const l1 = Template.bind({});
l1.args = {
  children: 'Entry Header',
};
