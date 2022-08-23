/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const FaceID = (props: SVGIconProps) => {
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
        d="M104.66 0V104.66H23.66V91.11H91.11V13.55H13.55V81H0V0H104.66ZM74.77 73.18C71.811 76.14 68.3199 78.5149 64.48 80.18C60.6493 81.8559 56.5112 82.7141 52.33 82.7C48.2264 82.7153 44.162 81.9025 40.38 80.31C36.5728 78.7202 33.1015 76.4229 30.15 73.54L29.88 73.14L39.31 63.58C41.0912 65.2961 43.1591 66.6871 45.42 67.69C47.5526 68.6477 49.8608 69.152 52.1984 69.1709C54.5361 69.1898 56.8522 68.723 59 67.8C61.2197 66.8653 63.2523 65.5373 65 63.88L65.26 63.62L74.77 73.18ZM43.83 23.64V54.05H30.41V23.64H43.83ZM74.24 23.64V54.05H60.83V23.64H74.24Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default FaceID;
