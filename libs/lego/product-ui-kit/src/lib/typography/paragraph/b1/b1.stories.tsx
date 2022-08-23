/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B1 from './b1';
import { TypographyProps } from '../../typography.types';

export default {
  component: B1,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <B1 color={args.color}>{args.children}</B1>
);

export const b1 = Template.bind({});
b1.args = {
  children: 'Mobile Sub',
};
