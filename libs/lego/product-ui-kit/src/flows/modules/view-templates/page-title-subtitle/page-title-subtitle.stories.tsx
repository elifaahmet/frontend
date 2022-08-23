/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import {
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';

export default {
  component: PageTitleSubtitle,
  title: 'Flows/Modules/PageTemplates/PageTitleSubtitle',
} as Meta;

const StoryWrapper = styled.div`
  display: block;
  width: 100%;
  padding: ${(props) => calculateWithUnit(props.theme.__spacer(16), 'rem')};
`;

const Template: Story = (args: PageTitleSubtitleProps) => {
  return (
    <StoryWrapper>
      <PageTitleSubtitle {...args} />
    </StoryWrapper>
  );
};

export const primary = Template.bind({});
primary.args = {
  title: 'Welcome to Tend.',
  subtitle: 'Let us know your email, phone and location\nto get started.',
};
