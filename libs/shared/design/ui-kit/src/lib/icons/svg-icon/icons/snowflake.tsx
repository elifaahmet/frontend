/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Snowflake: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="105"
      height="118"
      viewBox="0 0 105 118"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M59.1 0.972168V19.9692L67.1 11.4299L76.4 22.3313L59.1 40.7405V51.4867H68.8L85.4 32.3455L95.23 42.6591L87.52 51.531H104.66V66.5135H87.52L95.23 75.3854L85.4 85.699L68.8 66.5135H59.1V77.2707L76.37 95.6799L67.07 106.581L59.07 98.031V117.039H45.55V98.031L37.55 106.581L28.25 95.6799L45.55 77.2707V66.5135H35.86L19.26 85.6657L9.43 75.3521L17.13 66.4802H0V51.4867H17.13L9.43 42.6147L19.26 32.3011L35.86 51.4423H45.55V40.7405L28.29 22.3313L37.59 11.4299L45.59 19.9692V0.972168H59.1Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Snowflake;
