/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Ship: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="105" height="87" viewBox="0 0 105 87" fill="none" xmlns={XMLNS}>
      <path
        d="M43.7 0V13.81H68.4V33.34H104.66L89.66 86.34H31.88V72.52H79.55L86.73 47.15H55V27.62H32V47.15H16.87L20.05 62.15H6.38L0 33.34H18.59V13.81H30.28V0H43.7Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Ship;
