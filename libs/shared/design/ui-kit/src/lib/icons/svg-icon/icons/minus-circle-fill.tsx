/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const MinusCircleFill: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns={XMLNS}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
        fill={theme.color[props.color]}
      />
      <rect x="6" y="10.5" width="10" height="1" fill="#002923" />
    </svg>
  );
};

export default MinusCircleFill;
