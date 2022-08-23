/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '../../../utils/transformations';
import { ButtonProps } from '../button.types';
import ButtonProductStandard from './button-product-standard';
import { MEDIUM, SECONDARY } from '../../../constants';

const StyledTwoGang = styled.div<ButtonProps>`
  display: flex;
  flex-direction: row;
  button:first-of-type {
    margin-inline-end: ${(props) =>
      calculateWithUnit(props.theme.__spacer(8), 'px', props.theme)};
  }
  button:nth-of-type(2) {
    margin-inline-start: ${(props) =>
      calculateWithUnit(props.theme.__spacer(8), 'px', props.theme)};
  }
`;

const ButtonProductTwoGang = (props: ButtonProps) => {
  const { variant, size, disabled, icon, twoGang, ...restProps } = props;
  const { twoGangLabels, twoGangOnClick } = twoGang;

  const selectedProps = {
    variant,
    size,
    disabled,
    icon,
  };

  const restPropsFirst = {
    ...restProps,
    onClick: twoGangOnClick[0],
  };

  const restPropsSecond = {
    ...restProps,
    onClick: twoGangOnClick[1],
  };

  return (
    <StyledTwoGang>
      <ButtonProductStandard {...selectedProps} {...restPropsFirst}>
        {twoGangLabels[0]}
      </ButtonProductStandard>
      <ButtonProductStandard {...selectedProps} {...restPropsSecond}>
        {twoGangLabels[1]}
      </ButtonProductStandard>
    </StyledTwoGang>
  );
};

ButtonProductTwoGang.defaultProps = {
  variant: SECONDARY,
  size: MEDIUM,
  disabled: false,
};

export default ButtonProductTwoGang;
