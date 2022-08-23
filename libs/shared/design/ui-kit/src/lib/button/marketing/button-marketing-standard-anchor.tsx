/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { AnchorButtonProps } from '../button.types';
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

const StyledButtonAnchor = styled.a<AnchorButtonProps>`
  ${(props) => getSizeBasedStyles(props)};

  background-color: ${(props) => getBackgroundColor(props)};
  color: ${(props) => getTextColor(props)};
  text-decoration: none;

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

export const ButtonMarketingStandardAnchor: React.FC<AnchorButtonProps> = (
  props
) => {
  const { children, fill, variant, size, disabled, href, rel, target } = props;

  const selectedProps = { fill, variant, size, disabled, href, rel, target };

  return <StyledButtonAnchor {...selectedProps}>{children}</StyledButtonAnchor>;
};
ButtonMarketingStandardAnchor.defaultProps = {
  fill: DEFAULT,
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false,
};

export default ButtonMarketingStandardAnchor;
