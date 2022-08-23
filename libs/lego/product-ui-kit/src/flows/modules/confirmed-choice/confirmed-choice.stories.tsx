/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { B1, Layout } from '@tend/lego/product-ui-kit';

import { ConfirmedChoice } from './confirmed-choice';

export default {
  component: ConfirmedChoice,
  title: 'Flows/Modules/ConfirmedChoice',
} as Meta;

const Template: Story = (args) => (
  <Layout>
    <ConfirmedChoice {...args} />
  </Layout>
);

export const baseView = Template.bind({});
baseView.args = {
  children: (
    <B1 bold color="neutral-off-white">
      Comisión Federal de Electricidad (CFE)
      <br />
      Michoacan 04
    </B1>
  ),
};
