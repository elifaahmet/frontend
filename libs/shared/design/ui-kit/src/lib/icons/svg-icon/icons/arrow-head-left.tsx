/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const ArrowHeadLeft = (props: SVGIconProps) => {
  const theme = useTheme();

  return (
    <svg width="58" height="88" viewBox="0 0 58 88" fill="none" xmlns={XMLNS}>
      <path
        d="M36.66 0L1.14441e-05 37.72V51.27L36.66 87.12H57.51L13.15 44.36L57.51 0H36.66Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default ArrowHeadLeft;
