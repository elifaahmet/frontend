/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Book: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="119" height="68" viewBox="0 0 119 68" fill="none" xmlns={XMLNS}>
      <path
        d="M105.896 0L119 10.8699V68H70.4041V59.1963H110.187V14.9436L102.675 8.80375H63.8134V52.6276H55V0H105.896ZM88.1146 15.3594V24.1632H70.4041V15.3594H88.1146ZM103.577 39.5226H70.4041V30.7189H103.602L103.577 39.5226Z"
        fill={theme.color[props.color]}
      />
      <path
        d="M13.1041 0L0 10.8699V68H48.5959V59.1963H8.81336V14.9436L16.3253 8.80375H55.1866V52.6276H64V0H13.1041ZM30.8854 15.3594V24.1632H48.5959V15.3594H30.8854ZM15.4234 39.5226H48.5959V30.7189H15.3976L15.4234 39.5226Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Book;
