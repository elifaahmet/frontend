/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Shopping: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M39.5 112.5H93V57H27V97.5"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <path
        d="M75 50.5V45C75 36.7157 68.2843 30 60 30C51.7157 30 45 36.7157 45 45V50.5"
        stroke={theme.color[props.color]}
        strokeWidth="10"
      />
      <path
        d="M115 20L85 20"
        stroke={theme.color[props.color]}
        strokeWidth="10"
      />
      <path
        d="M100 35L100 5"
        stroke={theme.color[props.color]}
        strokeWidth="10"
      />
    </svg>
  );
};

export default Shopping;
