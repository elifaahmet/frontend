/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const AccountDetails = (props: SVGIconProps) => {
  const theme = useTheme();
  return (
    <svg
      width={105}
      height={105}
      viewBox="0 0 105 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M104.66 91.24V104.66H34.66V91.24H45.55V47.68H25.37V81.15H11.82V47.68H0.27L0 34.27L52.33 0L104.66 34.27V47.68H92.84V91.24H104.66ZM52.33 15.8L24.44 34.27H81L52.33 15.8ZM59.1 91.24H79.29V47.68H59.1V91.24Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default AccountDetails;
