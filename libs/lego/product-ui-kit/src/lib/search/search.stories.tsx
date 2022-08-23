/**@format */
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { B1, Layout, Spacer } from '@tend/lego/product-ui-kit';

import * as randomWordsMockData from './json/random-words.json';
import { Search } from './search';
import { SearchProps } from './search.types';

export default {
  component: Search,
  title: 'Components/Search',
} as Meta;

const Template: Story<SearchProps> = (args) => {
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    const { value } = e.target;
    setResults(
      !value
        ? []
        : randomWordsMockData['words'].filter((word) =>
            word.toLowerCase().startsWith(value.toLowerCase())
          )
    );
  };

  const props = {
    ...args,
    searchResults: results,
    onChange,
  };

  return (
    <Layout>
      <Search {...props} />
      <Spacer top={16} bottom={16}>
        <B1 color="neutral-off-white">
          I will not be visible once the results show up, just gonna hide behind
          Mr. Overlay...
        </B1>
      </Spacer>
    </Layout>
  );
};

export const simpleSearch = Template.bind({});
simpleSearch.args = {
  id: 'simple-search',
  label: 'search'.toUpperCase(),
};

export const withSubtextAndPlaceholder = Template.bind({});
withSubtextAndPlaceholder.args = {
  id: 'simple-search',
  label: 'search'.toUpperCase(),
  subtext: "Type anything, we'll see if we can find it...",
  placeholder: 'Click clack',
};
