/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { CheckboxProps, calculateWithUnit } from '@tend/shared/design/ui-kit';
import { CheckboxLabelProps } from './checkbox.types';

export const StyledCheckboxInput = styled.input<CheckboxProps>`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: auto;

  &:disabled {
    cursor: none;
  }
`;

export const StyledCheckboxSpan = styled.span`
  position: absolute;
  top: ${(props) =>
    calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)};
  left: 0;
  height: ${(props) => calculateWithUnit(14, 'rem', props.theme)};
  width: ${(props) => calculateWithUnit(14, 'rem', props.theme)};
  pointer-events: auto;
  cursor: pointer;
`;

export const StyledCheckbox = styled.label<CheckboxLabelProps>`
  display: inline-block;
  position: relative;
  padding-inline-start: ${(props) => calculateWithUnit(23, 'rem', props.theme)};
  color: ${(props) => props.theme.color[props.labelColor]};
  font-size: ${(props) =>
    calculateWithUnit(
      props.theme.__fontSize(props.alternateLabelStyle ? 16 : 14),
      'rem',
      props.theme
    )};
  font-weight: ${(props) =>
    props.theme.fontWeight[props.alternateLabelStyle ? 'regular' : 'bold']};
  line-height: ${(props) =>
    props.theme.__lineHeight(props.alternateLabelStyle ? 1 : 1.38)};
  text-transform: ${(props) =>
    props.uppercase && !props.alternateLabelStyle ? 'uppercase' : 'none'};
  user-select: none;
  pointer-events: ${(props) => (props.alternateLabelStyle ? 'auto' : 'none')};

  & {
    a,
    a:visited {
      text-decoration: none;
      color: ${(props) => props.theme.colorScheme.secondary.text};
    }
  }

  & > input ~ span {
    border: solid 1px ${(props) => props.theme.color[props.checkboxColor]};
  }
  & > input:checked ~ span {
    background-color: ${(props) => props.theme.color[props.checkboxColor]};
  }
  & > input:focus-visible ~ span {
    outline: 0.5px auto -webkit-focus-ring-color;
  }
  & > input:disabled ~ span {
    cursor: not-allowed;
  }
`;
