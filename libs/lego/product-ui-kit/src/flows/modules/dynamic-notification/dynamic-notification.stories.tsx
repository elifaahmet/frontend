/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { H3, Layout, Spacer } from '@tend/lego/product-ui-kit';
import {
  DynamicNotification,
  DynamicNotificationProps,
} from './dynamic-notification';

export default {
  component: DynamicNotification,
  title: 'Flows/Modules/DynamicNotification',
} as Meta;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Template: Story<DynamicNotificationProps> = (args) => (
  <Layout>
    <Wrapper>
      <DynamicNotification {...args} />
    </Wrapper>
  </Layout>
);

const sharedText = 'Your accounts are all up to date and ready for use!';
const SpacerComponent = { component: Spacer, top: 16, bottom: 16 };
export const basicUsage = Template.bind({});
basicUsage.args = {
  componentList: [
    SpacerComponent,
    { component: H3, children: 'Congratulations!' },
    SpacerComponent,
    { component: H3, children: sharedText },
  ],
  centerAlignText: true,
};

export const withCheckIcon = Template.bind({});
withCheckIcon.args = {
  componentList: [
    SpacerComponent,
    { component: H3, children: 'Congratulations!' },
    SpacerComponent,
    { component: H3, children: sharedText },
  ],
  checkIcon: true,
  centerAlignText: true,
};
