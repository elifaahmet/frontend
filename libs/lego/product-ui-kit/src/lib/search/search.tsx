/**@format */
import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import { B3, L1, Spacer } from '@tend/lego/product-ui-kit';
import { Input, InputProps } from '@tend/shared/design/ui-kit';

import { SearchResults, SearchWrapper } from './search.styled';
import { SearchProps, SearchState } from './search.types';

export { SearchProps } from './search.types';

export const Search: React.FC<SearchProps> = (props) => {
  const theme = useTheme();
  const [state, setState] = useState<SearchState>({
    resultsTopYCoordinate: 0,
    searchText: '',
  });

  useEffect(() => {
    const inputDomWrapper: HTMLElement = document.getElementById(props.id);

    if (inputDomWrapper) {
      const domRectangle = inputDomWrapper.getBoundingClientRect();
      setState((prevState) => ({
        ...prevState,
        resultsTopYCoordinate:
          domRectangle.top + domRectangle.height + theme.__spacer(16),
      }));
    }
  }, []);

  const { searchResults, id, onChange, label, subtext, placeholder } = props;

  const inputProps: InputProps = {
    type: 'text',
    name: id,
    id: id,
    onChange: (e) => {
      const { value } = e.target;

      setState((prevState) => ({
        ...prevState,
        searchText: value,
      }));
      onChange(e);
    },
    variant: 'boxed',
    placeholder: placeholder || '',
  };

  return (
    <SearchWrapper>
      {label && (
        <Spacer bottom={subtext ? 4 : 8}>
          <L1>{label}</L1>
        </Spacer>
      )}
      {subtext && (
        <Spacer bottom={8}>
          <B3>{subtext}</B3>
        </Spacer>
      )}
      <Input {...inputProps} />
      {Boolean(searchResults?.length) && (
        <SearchResults topY={state.resultsTopYCoordinate}>
          <ul>
            {searchResults.map((result) => (
              <li
                dangerouslySetInnerHTML={{
                  __html: result.replace(
                    new RegExp(`^${state.searchText}`, 'i'),
                    (pattern) => `<span class="highlighted">${pattern}</span>`
                  ),
                }}
              />
            ))}
          </ul>
        </SearchResults>
      )}
    </SearchWrapper>
  );
};

export default Search;
