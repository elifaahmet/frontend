/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const ContactUs = (props: SVGIconProps) => {
  const theme = useTheme();
  return (
    <svg
      width={109}
      height={102}
      viewBox="0 0 109 102"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M108.11 101.07H94.11L74 83.67H24.7V69.73H80.22L94.3 84.34L94 14H14.08V55.78H0V0H108.11V101.07ZM73.18 24.3V38.3H24.44V24.3H73.18ZM62.82 44.89V58.89H24.44V44.89H62.82Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default ContactUs;
