/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Caret: React.FC<SVGIconProps> = (props) => {
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
        d="M89 30L125 65"
        stroke={theme.color[props.color]}
        strokeWidth="14"
        strokeLinejoin="bevel"
      />
      <path
        d="M125 55L89 90"
        stroke={theme.color[props.color]}
        strokeWidth="14"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};

export default Caret;
