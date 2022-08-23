/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B2 from './b2';
import { TypographyProps } from '../../typography.types';

export default {
  component: B2,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <B2 color={args.color}>{args.children}</B2>
);

export const b2 = Template.bind({});
b2.args = {
  children: 'Placeholder',
};
