/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const MessageCenterCompact: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="109" height="70" viewBox="0 0 109 70" fill="none" xmlns={XMLNS}>
      <path
        d="M108.11 69.73H24.44V55.91L94.16 55.78V23.64L54.05 45.42L14 23.24V45.42H0V0H108.11V69.73ZM82.74 14L26 14.08L54 29.62L82.74 14Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default MessageCenterCompact;
