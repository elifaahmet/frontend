/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Savings: React.FC<SVGIconProps> = (props) => {
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
        d="M24.3269 99H90V53.5H7V81.3304"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <path
        d="M113 76V22H30V37.5"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default Savings;
