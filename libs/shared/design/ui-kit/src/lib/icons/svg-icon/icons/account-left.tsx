/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const AccountLeft: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="107"
      height="105"
      viewBox="0 0 107 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M27.89 57.91L28.16 58.04L17 68.93H36.66V82.61H17L28.16 93.37L27.89 93.63H13.55L0 80.35V71.05L13.55 57.91H27.89ZM1.73 34.27V47.68H47.28V91.24H38.91V104.66H106.38V91.24H94.56V47.68H106.12L106.38 34.27L54.05 0L1.73 34.27ZM54.05 15.8L82 34.27H25.37L54.05 15.8ZM60.83 47.68H81V91.24H60.83V47.68Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default AccountLeft;
