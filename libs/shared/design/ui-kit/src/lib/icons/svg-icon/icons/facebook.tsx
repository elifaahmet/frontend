/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Facebook = (props: SVGIconProps) => {
  const theme = useTheme();
  return (
    <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns={XMLNS}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9949 5.37498C13.1542 5.20685 12.0187 5.08124 11.3047 5.08124C9.37108 5.08124 9.24548 5.92192 9.24548 7.26702V9.6615H14.0789L13.6576 14.6216H9.24548V29.7084H3.19354V14.6216H0.0830078V9.6615H3.19354V6.59348C3.19354 2.39103 5.16866 0.0371094 10.1277 0.0371094C11.8506 0.0371094 13.1116 0.289317 14.7505 0.625592L13.9949 5.37498Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Facebook;
