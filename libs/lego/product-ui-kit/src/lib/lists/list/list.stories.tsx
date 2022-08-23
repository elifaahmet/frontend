/** @format */
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { List, ListProps } from './list';
import * as previousBillersMock from './mocks/previous-billers.json';
import * as searchResultUsersMock from './mocks/search-results-user.json';
import * as sendAgainUsersMock from './mocks/seng-again-users.json';
import * as transactionMock from './mocks/transcations.json';

export default {
  component: List,
  title: 'List',
  argTypes: { onActionClick: { action: 'clicked' } },
} as Meta;

const Wrapper = styled.div`
  width: 100%;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const Template: Story<ListProps> = (args) => (
  <Wrapper>
    <List {...args} />
  </Wrapper>
);

/**
 * Stories
 */

export const sendAgain = Template.bind({});
sendAgain.args = {
  listType: 'user',
  list: sendAgainUsersMock.users,
  isActionEdit: true,
  listContainerProps: {
    title: 'Send again',
    actionLabel: 'Edit',
    actionLabelAlt: 'Done',
  },
};

export const userSearchResults = Template.bind({});
userSearchResults.args = {
  listType: 'user',
  list: searchResultUsersMock.users,
};

export const waitingForPayment = Template.bind({});
waitingForPayment.args = {
  list: transactionMock.transactions,
  listType: 'payment',
  isActionEdit: true,
  listContainerProps: {
    title: 'Waiting For Payment',
    actionLabel: 'Edit',
    actionLabelAlt: 'Done',
  },
};

export const previousBillers = Template.bind({});
previousBillers.args = {
  list: previousBillersMock.transactions,
  listType: 'payment',
  isActionEdit: true,
  listContainerProps: {
    title: 'PREVIOUS PAYMENTS',
    actionLabel: 'Edit',
    actionLabelAlt: 'Done',
  },
};

export const payments = Template.bind({});
payments.args = {
  listType: 'payment',
  list: transactionMock.transactions,
};

export const paymentsThisWeek = Template.bind({});
paymentsThisWeek.args = {
  listType: 'payment',
  list: transactionMock.transactions,
  isActionEdit: true,
  listContainerProps: {
    title: 'This week',
  },
};
