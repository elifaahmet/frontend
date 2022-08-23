/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Statements = (props: SVGIconProps) => {
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
        d="M79 0L99.34 16.73V104.66H23.91V91.11H85.66V23L74 13.55H13.68V81H0V0H79ZM51.4 23.64V37.19H23.91V23.64H51.4ZM75.4 60.83H23.91V47.28H75.44L75.4 60.83Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Statements;
