/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const ATMFinder = (props: SVGIconProps) => {
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
        d="M104.66 54.05H81V104.66H47.28V91.11H67.47V37.19H37.19V81H23.64V54H0V0H104.66V54.05ZM13.55 13.55V40.55H23.64V23.64H81V40.51H91.11V13.51L13.55 13.55ZM57.38 67.47V84.34H43.83V67.47H57.38Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default ATMFinder;
