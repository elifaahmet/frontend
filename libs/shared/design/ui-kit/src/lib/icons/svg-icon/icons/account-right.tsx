/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const AccountRight: React.FC<SVGIconProps> = (props) => {
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
        d="M104.66 34.27V47.68H59.1V91.24H67.47V104.66H0V91.24H11.82V47.68H0.27L0 34.27L52.33 0L104.66 34.27ZM52.33 15.8L24.44 34.27H81L52.33 15.8ZM25.33 47.68V91.24H45.55V47.68H25.33ZM104.62 70.52V79.52L91.51 92.3H77.7L77.43 92L88.19 81.55H69.19V68.4H88.19L77.43 57.91L77.7 57.64H91.51L104.62 70.52Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default AccountRight;
