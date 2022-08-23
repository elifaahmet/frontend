/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../button.types';
import {
  getBackgroundColor,
  getTextColor,
  themeStylesToCssString,
} from '../helpers';
import {
  getBackgroundColorHover,
  getBorderHover,
  getInvertedPaddingHoverStylesOverrideAsString,
  getTextColorHover,
} from './helpers';
import {
  DEFAULT,
  INVERTED,
  LARGE,
  MEDIUM,
  PRIMARY,
  SMALL,
} from '../../../constants';

const getSizeBasedStyles = (props) => {
  switch (props.size) {
    case LARGE:
      return themeStylesToCssString(props.theme, 'button-large');
    case MEDIUM:
      return themeStylesToCssString(props.theme, 'button-medium');
    case SMALL:
    default:
      return themeStylesToCssString(props.theme, 'button-small');
  }
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => getSizeBasedStyles(props)};

  background-color: ${(props) => getBackgroundColor(props)};
  color: ${(props) => getTextColor(props)};

  &:hover {
    background-color: ${(props) => getBackgroundColorHover(props)};
    color: ${(props) => getTextColorHover(props)};
    ${(props) =>
      props.fill === INVERTED && props.variant === PRIMARY
        ? getBorderHover(props)
        : ''}
    ${(props) =>
      props.fill === INVERTED && props.variant === PRIMARY
        ? getInvertedPaddingHoverStylesOverrideAsString(props)
        : ''};
  }

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const ButtonMarketingStandard = (props: ButtonProps) => {
  const { children, variant, size, disabled, ...restProps } = props;

  const selectedProps = {
    variant,
    size,
    disabled,
  };

  return (
    <StyledButton {...selectedProps} {...restProps}>
      {children}
    </StyledButton>
  );
};
ButtonMarketingStandard.defaultProps = {
  fill: DEFAULT,
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false,
};

export default ButtonMarketingStandard;
