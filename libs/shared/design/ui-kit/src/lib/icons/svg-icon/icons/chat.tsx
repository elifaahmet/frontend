/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Chat: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="109"
      height="102"
      viewBox="0 0 109 102"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M0 0H108.11V101.07H94.11L74 83.67H24.7V69.73H80.22L94.3 84.34L94 14H14.08V55.78H0V0Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Chat;
