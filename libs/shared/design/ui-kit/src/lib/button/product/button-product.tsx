/** @format */

import React from 'react';
import { ButtonProps } from '../button.types';
import {
  MEDIUM,
  PRIMARY,
  DEFAULT,
  TERTIARY,
  SECONDARY,
} from '../../../constants';
import ButtonProductStandard from './button-product-standard';
import ButtonProductIcon from './button-product-icon';
import ButtonProductTwoGang from './button-product-two-gang';

export const ButtonProduct: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant,
    size,
    disabled,
    href,
    target,
    rel,
    icon,
    twoGang,
    ...restProps
  } = props;

  const spreadProps = { variant, size, disabled, icon, ...restProps };

  switch (variant) {
    case TERTIARY:
      return <ButtonProductIcon {...spreadProps}>{children}</ButtonProductIcon>;
    case SECONDARY:
      return twoGang ? (
        <ButtonProductTwoGang {...spreadProps} twoGang={twoGang}>
          {children}
        </ButtonProductTwoGang>
      ) : (
        <ButtonProductStandard {...spreadProps}>
          {children}
        </ButtonProductStandard>
      );
    case PRIMARY:
    default:
      return (
        <ButtonProductStandard {...spreadProps}>
          {children}
        </ButtonProductStandard>
      );
  }
};

ButtonProduct.defaultProps = {
  fill: DEFAULT,
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false,
  twoGang: undefined,
};

export default ButtonProduct;
