/** @format */

import React from 'react';
import { CheckboxProps } from './checkbox.types';
import {
  StyledCheckbox,
  StyledCheckboxInput,
  StyledCheckboxSpan,
} from './checkbox.styled';

export function Checkbox(props: CheckboxProps) {
  const {
    checkboxColor,
    uppercase,
    labelColor,
    label,
    alternateLabelStyle,
    ...restProps
  } = props;

  const styledCheckboxProps = {
    checkboxColor,
    uppercase,
    labelColor,
    alternateLabelStyle,
  };

  return (
    <StyledCheckbox {...styledCheckboxProps}>
      {label || ''}
      <StyledCheckboxInput type="checkbox" {...restProps} />
      <StyledCheckboxSpan />
    </StyledCheckbox>
  );
}

Checkbox.defaultProps = {
  checkboxColor: 'primary-yellow',
  labelColor: 'neutral-black',
  uppercase: true,
  alternateLabelStyle: false,
  onChange: () => null,
};

export default Checkbox;
