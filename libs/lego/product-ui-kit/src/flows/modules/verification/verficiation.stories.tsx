/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@tend/lego/product-ui-kit';
import { Verification, VerificationProps } from './verification';

export default {
  component: Verification,
  title: 'Flows/Modules/Verification',
} as Meta;

const Template: Story<VerificationProps> = (args) => (
  <Layout>
    <Verification {...args} />
  </Layout>
);

export const primary = Template.bind({});
primary.args = {
  phoneNumberLastFour: 3456,
};
