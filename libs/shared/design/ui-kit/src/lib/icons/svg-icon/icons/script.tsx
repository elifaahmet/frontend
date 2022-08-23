/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Script: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="105" height="84" viewBox="0 0 105 84" fill="none" xmlns={XMLNS}>
      <path
        d="M104.66 83.67H23.66V70.26H91.11V13.41H13.55V60.3H0V0H104.66V83.67ZM54.05 23.38V36.79H23.64V23.38H54.05ZM81.05 46.88V60.3H23.64V46.88H81.05Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Script;
