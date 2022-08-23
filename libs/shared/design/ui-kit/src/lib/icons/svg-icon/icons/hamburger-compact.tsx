/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const HamburgerCompact: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="88" height="81" viewBox="0 0 88 81" fill="none" xmlns={XMLNS}>
      <path
        d="M87.12 0V14H0V0H87.12ZM87.12 33.07V47.15H0V33.07H87.12ZM87.12 66.27V80.27H0V66.27H87.12Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default HamburgerCompact;
