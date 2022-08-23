/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Network: React.FC<SVGIconProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 28V42H70V28H47ZM42 47H28L28 70H42V47ZM23 42V28H0V42H23ZM42 0V23H28L28 0H42Z"
        fill={theme.color[props.color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97 78V92H120V78H97ZM92 97H78L78 120H92V97ZM73 92V78H50V92H73ZM92 50V73H78L78 50H92Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Network;
