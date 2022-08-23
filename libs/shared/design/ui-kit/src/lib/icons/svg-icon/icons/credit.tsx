/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Credit: React.FC<SVGIconProps> = (props) => {
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
        d="M22.3197 89H103C105.761 89 108 86.7614 108 84V36C108 33.2386 105.761 31 103 31H16C13.2386 31 11 33.2386 11 36V77.2885"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <path d="M8 55H111" stroke={theme.color[props.color]} strokeWidth="10" />
    </svg>
  );
};

export default Credit;
