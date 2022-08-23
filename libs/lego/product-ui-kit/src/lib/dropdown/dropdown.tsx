/**@format */

import React from 'react';
import { useTheme } from '@emotion/react';
import Select, { Props } from 'react-select';
import { appendValuesWithUnits, pick } from '@tend/shared/design/ui-kit';
import { L1 } from '../typography/labels';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DropdownProps extends Props {
  label?: string;
  hideIndicator?: boolean;
}

const getCustomStyles = (theme, hideIndicator) => ({
  container: (provided) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided) => ({
    ...provided,
    background: 'none',
    borderRadius: 0,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderWidth: 2,
    borderColor: theme.colorScheme.secondary.text,
    boxShadow: 'none',
    ':hover': {
      borderColor: theme.colorScheme.secondary.text,
      boxShadow: 'none',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'inherit',
  }),
  input: (provided) => ({
    ...provided,
    color: theme.colorScheme.primary.text,
    marginLeft: -8,
    ...pick(appendValuesWithUnits(theme.base.input['default'], ['fontSize']), [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'letterSpacing',
      'lineHeight',
    ]),
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.colorScheme.primary.text,
    marginLeft: -8,
    ...pick(appendValuesWithUnits(theme.base.input['default'], ['fontSize']), [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'letterSpacing',
      'lineHeight',
    ]),
  }),
  menu: (provided) => ({
    ...provided,
    background: theme.colorScheme.primary.background,
    borderRadius: 0,
    position: 'absolute',
    top: 38,
    left: 0,
    marginTop: 0,
    color: theme.colorScheme.primary.text,
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    backgroundColor: isFocused
      ? theme.colorScheme.secondary.background
      : 'inherit',
    color: isFocused
      ? theme.colorScheme.secondary.text
      : theme.colorScheme.primary.text,
    ...pick(appendValuesWithUnits(theme.base.input['default'], ['fontSize']), [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'letterSpacing',
      'lineHeight',
    ]),
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: theme.colorScheme.secondary.text,
    ':hover': {
      color: theme.colorScheme.secondary.text,
    },
    display: hideIndicator ? 'none' : 'block',
  }),
  placeholder: (provided) => ({
    ...provided,
    marginLeft: -8,
    ...pick(appendValuesWithUnits(theme.base.input['default'], ['fontSize']), [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'letterSpacing',
      'lineHeight',
    ]),
  }),
});

export const Dropdown: React.FC<DropdownProps> = ({ label, ...props }) => {
  const theme = useTheme();
  const selectProps = {
    ...props,
    styles: getCustomStyles(theme, props.hideIndicator),
  };
  if (label) {
    return (
      <>
        <L1>{label.toUpperCase()}</L1>
        <Select {...selectProps} />
      </>
    );
  }
  return <Select {...selectProps} />;
};

Dropdown.defaultProps = {
  hideIndicator: false,
};

export default Dropdown;
