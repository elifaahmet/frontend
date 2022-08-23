/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Domino: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns={XMLNS}
    >
      <rect
        x="50"
        y="70"
        width="20"
        height="20"
        rx="10"
        transform="rotate(-90 50 70)"
        fill={theme.color[props.color]}
      />
      <path
        d="M86 100.5L86 7L34 7L34 113L70.5 113"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default Domino;
