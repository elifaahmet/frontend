/** @format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  SearchUserView,
  P2PTransferSearchUserViewProps,
} from './search-user-view';
import * as users from '../../../../../mocks/users.json';
import * as sendAgainUsersMock from '../../../../../../lib/lists/list/mocks/seng-again-users.json';
import * as transactionMock from '../../../../../../lib/lists/list/mocks/transcations.json';

export default {
  component: SearchUserView,
  title: 'Flows/Views/Banking/P2PCrossBorderTransfer/SendMoney/SearchUser',
} as Meta;

const Template: Story<P2PTransferSearchUserViewProps> = (args) => (
  <SearchUserView {...args} />
);

/**
 * Data
 */
const searchResults = users.users
  .filter((user) => user.nickname.match('an'))
  .map((user) => ({ data: user }));

const waitingForPayment = transactionMock.transactions.map((transaction) => {
  const {
    nickname,
    memberId,
    currency,
    amount,
    transactionDate: requestDate,
  } = transaction.data;
  return { nickname, memberId, currency, amount, requestDate };
});

const sendAgain = sendAgainUsersMock.users.map((user) => {
  const { data } = user;
  const currency = data.country === 'us' ? 'usd' : 'mxn';
  return {
    ...data,
    currency,
  };
});

const recentActivity = transactionMock.transactions.map((transaction) => {
  const {
    nickname,
    memberId,
    currency,
    amount,
    transactionDate,
  } = transaction.data;
  return {
    nickname,
    memberId,
    currency,
    amount,
    transactionDate,
    note: `for ${currency === 'usd' ? 'whiskey' : 'tequila'}`,
  };
});

/**
 * Stories
 */

export const withSearchResults = Template.bind({});
withSearchResults.args = {
  searchUser: {
    onChange: (e) => null,
    searchResults,
    waitingForPayment,
    sendAgain,
    recentActivity,
  },
};

export const withWaitingForPayment = Template.bind({});
withWaitingForPayment.args = {
  searchUser: {
    onChange: (e) => null,
    searchResults: [],
  },
  waitingForPayment,
};

export const withSendAgainUsers = Template.bind({});
withSendAgainUsers.args = {
  searchUser: {
    onChange: (e) => null,
    searchResults: [],
  },
  sendAgain,
};

export const withRecentActivity = Template.bind({});
withRecentActivity.args = {
  searchUser: {
    onChange: (e) => null,
    searchResults: [],
  },
  recentActivity,
};

export const withAllListsPopulated = Template.bind({});
withAllListsPopulated.args = {
  searchUser: {
    onChange: (e) => null,
    searchResults: [],
  },
  waitingForPayment,
  sendAgain,
  recentActivity,
};
