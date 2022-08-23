/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Buildings: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="94" height="105" viewBox="0 0 94 105" fill="none" xmlns={XMLNS}>
      <path
        d="M62.69 21.52L94 53V104.67H24.3V90.67H48.74V14H14V80.22H0V0H62.69V21.52ZM38.25 24.44V38.38H24.3V24.44H38.25ZM38.25 45.29V59.37H24.3V45.29H38.25ZM38.25 66.29V80.29H24.3V66.29H38.25ZM62.69 90.71H80.09V58.71L62.69 41.3V90.71Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Buildings;
