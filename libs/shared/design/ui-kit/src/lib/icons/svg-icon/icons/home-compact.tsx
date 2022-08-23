/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const HomeCompact: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="94" height="98" viewBox="0 0 94 98" fill="none" xmlns={XMLNS}>
      <path
        d="M94 97.62H24.3V84.07H80.09V47.68L47 18.86L14 47.68V73.31H0V40.77L47 0L94 40.77V97.62Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default HomeCompact;
