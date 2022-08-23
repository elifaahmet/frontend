/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const LogOut = (props: SVGIconProps) => {
  const theme = useTheme();
  return (
    <svg
      width={100}
      height={105}
      viewBox="0 0 100 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M85.66 23.64H71.85V13.55H13.68V91.11H71.85V81H85.66V104.64H0V0H85.66V23.64ZM99.34 47.64V57L86.06 70H71.85L71.72 69.87L82.61 59.1H53.92V45.55H82.61L71.72 34.8L71.85 34.66H86.06L99.34 47.64Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default LogOut;
