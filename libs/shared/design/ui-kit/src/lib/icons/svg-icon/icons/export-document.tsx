/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const ExportDocument: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="102"
      height="102"
      viewBox="0 0 102 102"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M65.08 0L53.66 11.42H13.15V88.85H90.58V48.34L102 36.92V102H0V0H65.08ZM101.34 7.7V27L91 37.19H90.73V19.39L58 52.2L48 42.2L78.89 11.42H65V11L75.17 0.8H94.43L101.34 7.7Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default ExportDocument;
