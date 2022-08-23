/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Scan: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="105"
      height="100"
      viewBox="0 0 105 100"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M104.66 56.58H0V42.77H104.66V56.58ZM33.73 13.68H16.87V30.81H3.45V0H33.73V13.68ZM16.87 85.68H33.73V99.34H3.45V68.53H16.87V85.68ZM101.2 30.81H87.79V13.68H70.92V0H101.2V30.81ZM101.2 99.34H70.92V85.66H87.79V68.53H101.2V99.34Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Scan;
