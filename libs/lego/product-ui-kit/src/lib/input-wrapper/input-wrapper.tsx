/**@format */

import React from 'react';
import { Input, InputProps } from '@tend/shared/design/ui-kit';
import { InputAdornment } from '../../flows/components/input-adornment-required';
import { Spacer, Dropdown, DropdownProps } from '@tend/lego/product-ui-kit';

export interface InputWrapperProps {
  inputType?: 'text' | 'dropdown';
  inputProps?: InputProps;
  dropdownProps?: DropdownProps;
  isRequired?: boolean;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  inputType,
  inputProps,
  dropdownProps,
  isRequired,
}) => {
  let Component = null;
  let componentProps = null;
  if (inputType === 'text') {
    Component = Input;
    componentProps = inputProps;
  } else if (inputType === 'dropdown') {
    Component = Dropdown;
    componentProps = dropdownProps;
  }
  return isRequired ? (
    <>
      <Component {...componentProps} />
      <InputAdornment text="required" />
      <Spacer top={6} bottom={6} />
    </>
  ) : (
    <>
      <Component {...componentProps} />
      <Spacer top={16} bottom={16} />
    </>
  );
};

InputWrapper.defaultProps = {
  isRequired: false,
  inputType: 'text',
};

export default InputWrapper;
