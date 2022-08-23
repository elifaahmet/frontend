/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Travel: React.FC<SVGIconProps> = (props) => {
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
        d="M45 54V40.5H74.5V54"
        stroke={theme.color[props.color]}
        strokeWidth="10"
      />
      <line
        x1="75"
        y1="66"
        x2="75"
        y2="106"
        stroke={theme.color[props.color]}
        strokeWidth="10"
      />
      <line
        x1="45"
        y1="66"
        x2="45"
        y2="106"
        stroke={theme.color[props.color]}
        strokeWidth="10"
      />
      <path
        d="M29.2879 112.5H103V61H17V103.581"
        stroke={theme.color[props.color]}
        strokeWidth="14"
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

export default Travel;
