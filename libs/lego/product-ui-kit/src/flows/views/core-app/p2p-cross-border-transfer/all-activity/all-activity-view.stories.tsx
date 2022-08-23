/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AllActivityView, AllActivityViewProps } from './all-activity-view';
import * as transactionsMocks from '../../../../../lib/lists/list/mocks/transcations.json';
import * as recentTransactionsMocks from '../../../../../lib/lists/list/mocks/recentTransactions.json';

export default {
  component: AllActivityView,
  title: 'Flows/Views/Banking/P2PCrossBorderTransfer/AllActivity',
} as Meta;

const Template: Story<AllActivityViewProps> = (args) => (
  <AllActivityView {...args} />
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = () => {};

export const emptyState = Template.bind({});
emptyState.args = {
  searchOnChange: emptyFunction,
  onFiltersApplyClick: emptyFunction,
  setDates: emptyFunction,
};

export const withRecentTransactions = Template.bind({});
withRecentTransactions.args = {
  searchOnChange: emptyFunction,
  onFiltersApplyClick: emptyFunction,
  setDates: emptyFunction,
  transactionsThisWeek: recentTransactionsMocks.transactions,
};

export const withManyTransactions = Template.bind({});
withManyTransactions.args = {
  searchOnChange: emptyFunction,
  onFiltersApplyClick: emptyFunction,
  setDates: emptyFunction,
  transactionsThisWeek: recentTransactionsMocks.transactions,
  allOtherTransactions: transactionsMocks.transactions,
};
