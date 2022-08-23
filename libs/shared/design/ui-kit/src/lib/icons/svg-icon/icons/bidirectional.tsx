/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Bidirectional: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="109"
      height="109"
      viewBox="0 0 109 109"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M0 30.28L5.84 24.44H108.11V38.38H27.11L48 59.23H28.29L0 31.34V30.28ZM108.11 75.28L102.27 69.71H0V83.67H81.68L57 108.11H76.77L108.11 76.77V75.28ZM36.92 14H17.13L31.08 0H50.87L36.92 14ZM70.92 59.28H90.71L76.77 45.29H57L70.92 59.28Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Bidirectional;
