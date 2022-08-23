/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B3 from './b3';
import { TypographyProps } from '../../typography.types';

export default {
  component: B3,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <B3 color={args.color}>{args.children}</B3>
);

export const b3 = Template.bind({});
b3.args = {
  children: 'Legal',
};
