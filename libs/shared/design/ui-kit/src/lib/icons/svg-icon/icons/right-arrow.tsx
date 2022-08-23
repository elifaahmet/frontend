/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const RightArrow: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M0 60L120 60L70.5 10.5"
        stroke={theme.color[props.color]}
        strokeWidth="14"
        strokeLinejoin="bevel"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.9 84L75.4498 114.45L65.5503 104.55L86.1005 84L105.9 84ZM120 69.8995L124.95 64.9498L115.05 55.0503L103.101 67L120 67V69.8995Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default RightArrow;
