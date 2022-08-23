/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const NetworkCompact: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="108"
      height="109"
      viewBox="0 0 108 109"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M19.12 23.11V38H0V23.11H19.12ZM38 19.52H23.11V0H38V19.52ZM38 61.52H23.11V42H38V61.52ZM60.56 23.11V38H41.56V23.11H60.56ZM65.74 70.11V85H46.74V70.12L65.74 70.11ZM84.2 66.11H69.33V46.62H84.2V66.11ZM84.2 108.11H69.33V88.59H84.2V108.11ZM107.31 70.11V85H88.19V70.12L107.31 70.11Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default NetworkCompact;
