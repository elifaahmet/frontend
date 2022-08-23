/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Home: React.FC<SVGIconProps> = (props) => {
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
        d="M24.3269 113H113V53.8619L60 9L7 53.8619V95.8333"
        stroke={theme.color[props.color]}
        strokeWidth="14"
      />
    </svg>
  );
};

export default Home;
