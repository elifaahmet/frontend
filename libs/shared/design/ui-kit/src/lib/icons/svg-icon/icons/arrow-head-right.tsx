/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const ArrowHeadRight = (props: SVGIconProps) => {
  const theme = useTheme();

  return (
    <svg width="58" height="88" viewBox="0 0 58 88" fill="none" xmlns={XMLNS}>
      <path
        d="M20.85 0L57.51 37.72V51.27L20.85 87.12H0L44.36 44.36L0 0H20.85Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default ArrowHeadRight;
