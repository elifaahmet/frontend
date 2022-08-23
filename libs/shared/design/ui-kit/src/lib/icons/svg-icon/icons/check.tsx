/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Check: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="122"
      height="105"
      viewBox="0 0 122 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M121.603 86.522L39.0983 100.439L36.7795 86.6934L105.528 75.0965L100.315 44.1931L21.272 57.5266L24.7401 78.0861L10.9351 80.4148L0.507568 18.5981L107.112 0.615606L121.603 86.522ZM95.6845 16.741L16.6412 30.0744L18.9516 43.7709L97.9949 30.4375L95.6845 16.741Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Check;
