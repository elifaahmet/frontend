/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Hamburger: React.FC<SVGIconProps> = (props) => {
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
        y2="60"
        stroke={theme.color[props.color]}
        stroke-width="14"
      />
      <line
        x1="120"
        y1="12"
        y2="12"
        stroke={theme.color[props.color]}
        stroke-width="14"
      />
      <line
        x1="120"
        y1="107"
        y2="107"
        stroke={theme.color[props.color]}
        stroke-width="14"
      />
    </svg>
  );
};

export default Hamburger;
