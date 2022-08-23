/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Briefcase: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="109"
      height="105"
      viewBox="0 0 109 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M75.17 27.89H108.24V104.66H24.57V91H94.16V41.84H75.16V80.22H61.23V41.84H47.15V80.22H33.2V41.84H14.2L14.07 76.77H0L0.13 27.89H33.2V0H75.2L75.17 27.89ZM61.23 14H47.15V27.89H61.23V14Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Briefcase;
