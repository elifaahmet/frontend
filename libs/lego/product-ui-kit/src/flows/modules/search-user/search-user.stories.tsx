/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { SearchUser, SearchUserProps } from './search-user';
import * as usersData from '../../mocks/users.json';

export default {
  component: SearchUser,
  title: 'Flows/Modules/SearchUser',
} as Meta;

const StoryWrapper = styled.div`
  display: block;
  width: 100%;
  padding: ${(props) => calculateWithUnit(props.theme.__spacer(16), 'rem')};
`;

const Template: Story = (args: SearchUserProps) => {
  return (
    <StoryWrapper>
      <SearchUser {...args} />
    </StoryWrapper>
  );
};

export const empty = Template.bind({});
empty.args = {
  onChange: (e) => e,
};

export const withUserResults = Template.bind({});
withUserResults.args = {
  onChange: (e) => e,
  searchResults: usersData.users.map((user) => ({ data: user })),
};
