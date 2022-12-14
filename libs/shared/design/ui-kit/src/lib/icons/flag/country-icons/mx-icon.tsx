/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { FlagProps } from '../flag';

export const MxIcon = (props: FlagProps) => {
  const theme = useTheme();
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
          fill="#F0F0F0"
        />
        <path
          d="M28 14C28 8.4496 24.7699 3.65372 20.0869 1.38922V26.6108C24.7699 24.3464 28 19.5505 28 14Z"
          fill="#D80027"
        />
        <path
          d="M0 14C0 19.5505 3.23012 24.3464 7.91306 26.6109V1.38922C3.23012 3.65372 0 8.4496 0 14Z"
          fill="#6DA544"
        />
        <path
          d="M10.3477 14C10.3477 16.0171 11.9828 17.6522 13.9999 17.6522C16.0169 17.6522 17.6521 16.0171 17.6521 14V12.7827H10.3477V14Z"
          fill="#6DA544"
        />
        <path
          d="M18.8695 11.5652H15.2174C15.2174 10.8928 14.6723 10.3478 14 10.3478C13.3276 10.3478 12.7826 10.8928 12.7826 11.5652H9.13037C9.13037 12.2376 9.71602 12.7826 10.3883 12.7826H10.3478C10.3478 13.4549 10.8928 14 11.5652 14C11.5652 14.6723 12.1102 15.2174 12.7826 15.2174H15.2174C15.8897 15.2174 16.4348 14.6723 16.4348 14C17.1071 14 17.6521 13.4549 17.6521 12.7826H17.6116C18.284 12.7826 18.8695 12.2376 18.8695 11.5652Z"
          fill="#FF9811"
        />
      </g>
    </svg>
  );
};
