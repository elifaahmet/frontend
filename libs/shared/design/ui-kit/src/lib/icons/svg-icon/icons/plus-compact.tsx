/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const PlusCompact: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="109"
      height="109"
      viewBox="0 0 109 109"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M38.38 47V61.09H0V47H38.38ZM61.09 38.36H47V0H61.09V38.36ZM61.09 69.71V108.09H47V69.73L61.09 69.71ZM108.09 47V61.09H69.73V47H108.09Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default PlusCompact;
