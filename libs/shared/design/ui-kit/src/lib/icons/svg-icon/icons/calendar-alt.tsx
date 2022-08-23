/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const CalendarAlt: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="100" height="100" viewBox="0 0 18 18" fill="none" xmlns={XMLNS}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.21982 0H3.41982V0.81H0V13.32H2.79V3.51H15.39V15.12H5.4V17.82L15.39 17.82L16.11 17.82L18 17.82V3.51V2.16V0.81H14.3998V0H12.5998V0.81H5.21982V0ZM4.49982 5.21991H6.29982V7.01991H4.49982V5.21991ZM9.9 5.21991H8.1V7.01991H9.9V5.21991ZM4.49982 8.82009H6.29982V10.6201H4.49982V8.82009ZM13.5002 5.21991H11.7002V7.01991H13.5002V5.21991ZM8.1 8.82009H9.9V10.6201H8.1V8.82009ZM13.5002 8.82009H11.7002V10.6201H13.5002V8.82009ZM8.1 12.42H9.9V14.22H8.1V12.42ZM13.5002 12.42H11.7002V14.22H13.5002V12.42Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default CalendarAlt;
