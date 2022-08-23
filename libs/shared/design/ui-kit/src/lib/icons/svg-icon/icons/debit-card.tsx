/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const DebitCard = (props: SVGIconProps) => {
  const theme = useTheme();
  return (
    <svg width={109} height={88} viewBox="0 0 109 88" fill="none" xmlns={XMLNS}>
      <path
        d="M108.11 87.12H24.44V73.18H94.16V41.84H14V62.69H0V0H108.11V87.12ZM94.16 14H14V27.89H94.16V14Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default DebitCard;
