/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const PersonalDetails = (props: SVGIconProps) => {
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
        d="M40 84H80V70H40V84ZM80 84C88.8366 84 96 91.1634 96 100H110C110 83.4315 96.5685 70 80 70V84ZM40 70C23.4315 70 10 83.4315 10 100H24C24 91.1634 31.1634 84 40 84V70Z"
        fill={theme.color[props.color]}
      />
      <circle
        cx="60"
        cy="35"
        r="18"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
      <path
        d="M103 100V112.5H30"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default PersonalDetails;
