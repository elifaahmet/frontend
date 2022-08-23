/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../button.types';
import {
  themeStylesToCssString,
  getTextColor,
  getBackgroundColor,
} from '../helpers';
import { MEDIUM, PRIMARY, SECONDARY, TERTIARY } from '../../../constants';
import { IPropsWithTheme } from '../../../theme/extended-theme';
import { getBorder, getBorderedPaddingStylesAsString } from './helpers';

function getVariantStyles(props: ButtonProps & IPropsWithTheme) {
  switch (props.variant) {
    case TERTIARY:
      return themeStylesToCssString(props.theme, 'button-product-icon');
    case SECONDARY:
      return getBorderedPaddingStylesAsString();
    case PRIMARY:
    default:
      return themeStylesToCssString(props.theme, 'button-product-standard');
  }
}

const StyledButtonProduct = styled.button<ButtonProps>`
  background: ${(props) => getBackgroundColor(props)};
  color: ${(props) => getTextColor(props)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${(props) => getVariantStyles(props)};
  ${(props) => (props.variant === SECONDARY ? getBorder(props) : '')}
`;

const ButtonProductStandard = (props: ButtonProps) => {
  const {
    children,
    variant,
    size,
    disabled,
    icon,
    twoGang,
    ...restProps
  } = props;

  const selectedProps = {
    variant,
    size,
    disabled,
    icon,
    twoGang,
  };

  return (
    <StyledButtonProduct {...selectedProps} {...restProps}>
      {children}
    </StyledButtonProduct>
  );
};

ButtonProductStandard.defaultProps = {
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false,
};

export default ButtonProductStandard;
