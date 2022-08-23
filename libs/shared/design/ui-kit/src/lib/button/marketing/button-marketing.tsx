/** @format */

import React from 'react';
import { ButtonProps } from '../button.types';
import {
  MEDIUM,
  PRIMARY,
  DEFAULT,
  SECONDARY,
  TERTIARY,
} from '../../../constants';
import ButtonMarketingStandard from './button-marketing-standard';
import ButtonMarketingStandardAnchor from './button-marketing-standard-anchor';
import ButtonMarketingCTA from './button-marketing-cta';

export const ButtonMarketing: React.FC<ButtonProps> = (props) => {
  const {
    children,
    fill,
    variant,
    size,
    disabled,
    href,
    target,
    rel,
    ...restProps
  } = props;

  const spreadProps = { fill, variant, size, disabled, ...restProps };
  const anchorSpreadProps = {
    fill,
    variant,
    size,
    disabled,
    target,
    rel,
    href,
  };

  switch (variant) {
    case TERTIARY:
      return (
        <ButtonMarketingCTA {...anchorSpreadProps}>
          {children}
        </ButtonMarketingCTA>
      );
    case SECONDARY:
    case PRIMARY:
    default:
      return href ? (
        <ButtonMarketingStandardAnchor {...anchorSpreadProps}>
          {children}
        </ButtonMarketingStandardAnchor>
      ) : (
        <ButtonMarketingStandard {...spreadProps}>
          {children}
        </ButtonMarketingStandard>
      );
  }
};

ButtonMarketing.defaultProps = {
  fill: DEFAULT,
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false,
  twoGang: null,
};

export default ButtonMarketing;
