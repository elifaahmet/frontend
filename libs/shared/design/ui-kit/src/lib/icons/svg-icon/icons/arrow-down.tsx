/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const ArrowDown: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns={XMLNS}>
      <path
        d="M16.0625 29.8672L14.2266 31.7031H13.7578L0.671875 18.5781V12.3672L11.6484 23.3828V0.101563L16.0625 0.101563L16.0625 29.8672ZM28.3281 18.6953L19.1094 27.7969V21.625L28.3281 12.5234V18.6953Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default ArrowDown;
