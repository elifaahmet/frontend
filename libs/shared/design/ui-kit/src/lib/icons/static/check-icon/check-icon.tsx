/** @format */
import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { calculateWithUnit } from '../../../../utils/transformations';

export interface CheckIconProps {
  boxSize?: number;
}

const XMLNS = 'http://www.w3.org/2000/svg';
const IconWrapper = styled.span<CheckIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    calculateWithUnit(props.boxSize || 100, 'rem', props.theme)};
  height: ${(props) =>
    calculateWithUnit(props.boxSize || 100, 'rem', props.theme)};
`;

const SVGCheckIcon = () => {
  const theme = useTheme();
  return (
    <svg width="95" height="80" viewBox="0 0 95 80" fill="none" xmlns={XMLNS}>
      <rect
        x="94.1772"
        y="12.0791"
        width="88"
        height="18"
        transform="rotate(130 94.1772 12.0791)"
        fill={theme.color['primary-magenta']}
      />
      <rect
        x="18.4717"
        y="64.179"
        width="22"
        height="18"
        transform="rotate(-140 18.4717 64.179)"
        fill={theme.color['primary-orange']}
      />
    </svg>
  );
};

export const CheckIcon = (props: CheckIconProps) => {
  return (
    <IconWrapper {...props}>
      <SVGCheckIcon />
    </IconWrapper>
  );
};
export default CheckIcon;
