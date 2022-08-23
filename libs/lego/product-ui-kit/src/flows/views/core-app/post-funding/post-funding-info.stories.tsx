/**@format*/

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PostFundingInfo } from './post-funding-info';
import { PostFundingInfoProps } from './post-funding-info.types';

export default {
  component: PostFundingInfo,
  title: 'Flows/Views/Banking/PostFunding',
} as Meta;

const Template: Story<PostFundingInfoProps> = (args) => (
  <PostFundingInfo {...args} />
);

export const US = Template.bind({});
US.args = {
  country: 'us' as const,
  captureEmailInvites: (email) => null,
};

export const mexico = Template.bind({});
mexico.args = {
  country: 'mx' as const,
  captureEmailInvites: (email) => null,
};
