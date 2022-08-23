/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Money: React.FC<SVGIconProps> = (props) => {
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
        d="M105 33H30.725C23.1449 33 17 39.1449 17 46.725V46.725C17 54.3051 23.1449 60.45 30.725 60.45H89.725C97.0566 60.45 103 66.3934 103 73.725V73.725C103 81.0566 97.0566 87 89.725 87H15"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <line
        x1="60"
        x2="60"
        y2="17"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <line
        x1="60"
        y1="103"
        x2="60"
        y2="120"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default Money;
