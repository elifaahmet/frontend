/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Twitter: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns={XMLNS}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.073 3.218c-1.075.478-2.233.8-3.447.945a6.017 6.017 0 002.639-3.32 12.02 12.02 0 01-3.811 1.456 6.002 6.002 0 00-10.227 5.474 17.037 17.037 0 01-12.372-6.27 5.97 5.97 0 00-.812 3.017 5.996 5.996 0 002.67 4.995 5.983 5.983 0 01-2.72-.75v.075a6.01 6.01 0 004.815 5.886 6.033 6.033 0 01-2.711.103 6.01 6.01 0 005.607 4.168 12.045 12.045 0 01-7.454 2.57c-.486 0-.964-.028-1.433-.085a16.991 16.991 0 009.2 2.697c11.04 0 17.077-9.145 17.077-17.076 0-.26-.005-.52-.017-.776a12.225 12.225 0 002.996-3.109z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Twitter;
