/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const RightArrowCTA = (props: SVGIconProps) => {
  const theme = useTheme();
  return (
    <svg
      width={108}
      height={94}
      viewBox={'0 0 108 94'}
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M107.45 48V49.59L62.82 94H41.7L79.16 56.71H0V41.71H101.2L107.45 48ZM63.22 0L94.16 31.34H73.16L42.23 0H63.22Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default RightArrowCTA;
