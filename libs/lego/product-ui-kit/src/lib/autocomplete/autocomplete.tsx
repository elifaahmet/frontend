/**@format */

import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownProps, L1, B3 } from '@tend/lego/product-ui-kit';
import { AutocompleteWrapper, RequiredWrapper } from './autocomplete.styled';

export type AutocompleteResultsType = { value: string; label: string }[];

export interface AutocompleteProps extends DropdownProps {
  onUserType: (userInput: string) => Promise<AutocompleteResultsType>;
  autocompleteLabel?: string;
  required?: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const { onUserType, autocompleteLabel, required, ...restProps } = props;
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [timerId, setTimerId] = useState(null);

  function debounce(callback, delay) {
    if (timerId !== null) clearTimeout(timerId);
    setTimerId(setTimeout(callback, delay));
  }

  useEffect(() => {
    const updateResults = () =>
      onUserType(value).then((results) => setOptions(results));
    debounce(updateResults, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const dropdownProps = {
    ...restProps,
    options,
  };

  return (
    <AutocompleteWrapper>
      <L1>{autocompleteLabel.toUpperCase()}</L1>
      <Dropdown
        {...dropdownProps}
        onInputChange={(v: string) => setValue(v)}
        hideIndicator
      />
      {required && (
        <RequiredWrapper>
          <B3 color="primary-yellow">REQUIRED</B3>
        </RequiredWrapper>
      )}
    </AutocompleteWrapper>
  );
};
Autocomplete.defaultProps = {
  autocompleteLabel: '',
  required: false,
};

export default Autocomplete;
