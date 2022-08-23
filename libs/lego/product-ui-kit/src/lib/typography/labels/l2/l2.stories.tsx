/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import L2, { L2Props } from './l2';

export default {
  component: L2,
  title: 'Typography/Label',
} as Meta;

const Template: Story<L2Props> = (args) => (
  <L2 color={args.color} bold={args.bold}>
    {args.children}
  </L2>
);

export const l2Regular = Template.bind({});
l2Regular.args = {
  children: 'Radio Button Unselected',
};

export const l2Bold = Template.bind({});
l2Bold.args = {
  children: 'Radio Button Selected & Cta Disabled',
  bold: true,
};
