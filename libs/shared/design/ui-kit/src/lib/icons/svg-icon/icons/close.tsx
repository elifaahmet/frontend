/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Close = (props: SVGIconProps) => {
  const theme = useTheme();

  return (
    <svg width={87} height={87} viewBox="0 0 87 87" fill="none" xmlns={XMLNS}>
      <path
        d="M9.83 0L37.05 27.09L27.05 37.09L0 9.83L9.83 0ZM37.05 59.23L9.83 86.33L0 76.5L27.09 49.27L37.05 59.23ZM76.5 0L86.33 9.83L59.23 37.05L49.23 27.05L76.5 0ZM59.23 49.27L86.33 76.5L76.5 86.33L49.27 59.23L59.23 49.27Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Close;
