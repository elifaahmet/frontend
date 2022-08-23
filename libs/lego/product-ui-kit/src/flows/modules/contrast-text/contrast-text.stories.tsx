/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { B1, Layout } from '@tend/lego/product-ui-kit';

import { ContrastText } from './contrast-text';

export default {
  component: ContrastText,
  title: 'Flows/Modules/ContrastText',
} as Meta;

const Template: Story = (args) => (
  <Layout>
    <ContrastText {...args} />
  </Layout>
);

export const simpleText = Template.bind({});
simpleText.args = {
  children: <B1 color="neutral-off-white">Nothing to see here...</B1>,
};
