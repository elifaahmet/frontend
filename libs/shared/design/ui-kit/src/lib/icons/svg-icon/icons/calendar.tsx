/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Calendar: React.FC<SVGIconProps> = (props) => {
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
        d="M92.84 0V13.55H104.66V104.66H23.66V91.11H91.11V50.6H13.55V74.24H0V13.55H11.82V0H25.37V13.55H79.29V0H92.84ZM91.11 27H13.55V37.19H91.11V27Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Calendar;
