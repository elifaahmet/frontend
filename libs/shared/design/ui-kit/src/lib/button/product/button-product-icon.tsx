/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '../../../utils/transformations';
import { ButtonProps } from '../button.types';
import ButtonProductStandard from './button-product-standard';
import { MEDIUM, TERTIARY } from '../../../constants';
import SVGIcon from '../../icons/svg-icon/svg-icon';

const StyledIconButton = styled.div`
  button {
    display: flex;
    flex-direction: row;
    .svg-wrapper {
      margin-top: ${(props) => calculateWithUnit(2, 'rem', props.theme)};
      margin-left: auto;
    }
  }
`;

const ButtonProductIcon = (props: ButtonProps) => {
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
    <StyledIconButton>
      <ButtonProductStandard {...selectedProps} {...restProps}>
        {children}
        <SVGIcon
          iconName="personal-details"
          color="neutral-black"
          boxSize={12}
        />
      </ButtonProductStandard>
    </StyledIconButton>
  );
};

ButtonProductIcon.defaultProps = {
  variant: TERTIARY,
  size: MEDIUM,
  disabled: false,
};

export default ButtonProductIcon;
