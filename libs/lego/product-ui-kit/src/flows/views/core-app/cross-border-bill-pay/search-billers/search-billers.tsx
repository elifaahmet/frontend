/**@format */
import React from 'react';

import { Layout, Search, SearchProps, Spacer } from '@tend/lego/product-ui-kit';

import { BillersList, BillersListProps } from './components/billers-list';
import { SearchBillersProps } from './search-billers.types';

export const SearchBillers: React.FC<SearchBillersProps> = (props) => {
  const { previousBillers, pendingBillers, searchResults, onSearchChange } =
    props;

  const searchProps: SearchProps = {
    id: 'search-billers',
    label: 'SEARCH BILLERS',
    subtext: 'Use your bill to search for a biller.',
    placeholder: 'Search our directory for International Billers',
    searchResults,
    onChange: onSearchChange,
  };

  const billersListProps: BillersListProps = {
    previousBillers,
    pendingBillers,
  };
  const noPreviousBillers = !previousBillers?.length;

  return (
    <Layout>
      <Spacer top={16} bottom={16} />
      <Search {...searchProps} />
      <Spacer top={noPreviousBillers ? 16 : 4} bottom={16} />
      <BillersList {...billersListProps} />
    </Layout>
  );
};

export default SearchBillers;
