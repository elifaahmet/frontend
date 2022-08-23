/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const SavingsCompact: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="109" height="88" viewBox="0 0 109 88" fill="none" xmlns={XMLNS}>
      <path
        d="M83.67 87.12H24.44V73.18H69.73V45.29H14V62.69H0V31.34H83.67V87.12ZM108.11 52.33H94.11V14H38.38V20.9H24.44V0H108.11V52.33Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default SavingsCompact;
