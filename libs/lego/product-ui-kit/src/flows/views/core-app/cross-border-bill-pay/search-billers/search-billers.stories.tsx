/**@format */
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import * as pendingBillersMock from '../../../../../lib/lists/list/mocks/pending-billers.json';
import * as previousBillersMock from '../../../../../lib/lists/list/mocks/previous-billers.json';
import * as billersMocks from './mocks/billers.json';
import { SearchBillers, SearchBillersProps } from './search-billers';

export default {
  component: SearchBillers,
  title: 'Flows/Views/Banking/CrossBorderBillPay/SearchBillers',
} as Meta;

const Template: Story<SearchBillersProps> = (args) => {
  const [results, setResults] = useState([]);
  const onSearchChange = (e) => {
    const { value } = e.target;
    setResults(
      !value
        ? []
        : billersMocks['billers'].filter((word) =>
            word.toLowerCase().startsWith(value.toLowerCase())
          )
    );
  };

  const props: SearchBillersProps = {
    ...args,
    searchResults: results,
    onSearchChange,
  };

  return <SearchBillers {...props} />;
};

export const noPreviousBillers = Template.bind({});
noPreviousBillers.args = {
  previousBillers: [],
};

export const withPreviousBillers = Template.bind({});
withPreviousBillers.args = {
  previousBillers: previousBillersMock.transactions,
};

export const withPreviousAndPendingBillers = Template.bind({});
withPreviousAndPendingBillers.args = {
  pendingBillers: pendingBillersMock.transactions,
  previousBillers: previousBillersMock.transactions,
};
