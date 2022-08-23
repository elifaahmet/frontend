/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const SquareSerpent: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M35.46 65.3189V81.2218L35.2 81.5212L23.77 68.4018V88.8849H80.88L81 65.7514H92.84L92.7 104.311H11.82V68.1135L0.27 81.5212L0 81.2218V65.3189L13.15 50.292H22.31L35.46 65.3189ZM92.84 36.2966L104.39 22.9L104.66 23.1883V39.1023L91.51 54.1181H82.34L69.2 39.1023V23.1883L69.46 22.9L80.88 36.0083V15.5918H23.77L23.64 38.6587H11.82L12 0.065918H92.84V36.2966Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default SquareSerpent;
