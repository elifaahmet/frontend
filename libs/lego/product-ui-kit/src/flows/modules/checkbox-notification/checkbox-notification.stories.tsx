/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@tend/lego/product-ui-kit';
import {
  CheckboxNotification,
  CheckboxNotificationProps,
} from './checkbox-notification';

export default {
  component: CheckboxNotification,
  title: 'Flows/Modules/CheckboxNotification',
} as Meta;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Template: Story<CheckboxNotificationProps> = (args) => (
  <Layout>
    <Wrapper>
      <CheckboxNotification {...args} />
    </Wrapper>
  </Layout>
);

const sharedText = 'Your accounts are all up to date and ready for use!';

export const basicUsage = Template.bind({});
basicUsage.args = {
  title: 'Thank you!',
  text: `${sharedText} (No top or bottom padding by default)`,
};

export const withTopPadding = Template.bind({});
withTopPadding.args = {
  title: 'Thank you!',
  text: `${sharedText} (Top padding pushes content down)`,
  paddingTop: 32,
};

export const withBottomPadding = Template.bind({});
withBottomPadding.args = {
  title: 'Thank you!',
  text: `${sharedText} (Bottom padding pushes content up)`,
  paddingBottom: 32,
};
