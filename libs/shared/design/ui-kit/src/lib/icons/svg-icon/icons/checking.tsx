/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Checking: React.FC<SVGIconProps> = (props) => {
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
        y="50"
        width="20"
        height="20"
        rx="10"
        fill={theme.color[props.color]}
      />
      <path
        d="M19.5 86H113V34H7V70.5"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default Checking;
