/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Plus: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns={XMLNS}
    >
      <line
        x1="120"
        y1="60"
        x2="75"
        y2="60"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <line
        x1="45"
        y1="60"
        y2="60"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <line
        x1="60"
        y1="120"
        x2="60"
        y2="75"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <path
        d="M60 45L60 0"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default Plus;
