/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const DocumentIcon: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="100"
      height="105"
      viewBox="0 0 100 105"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M79 0L99.34 16.73V104.66H23.91V91.11H85.66V23L74 13.55H13.68V81H0V0H79ZM34.27 23.64V33.73H23.91V23.64H34.27ZM34.27 54.05H23.91V43.83H34.27V54.05ZM34.27 64.15V74.24H23.91V64.15H34.27ZM75.44 23.64V33.73H44.49V23.64H75.44ZM75.44 54.05H44.49V43.83H75.44V54.05ZM75.44 64.15V74.24H44.49V64.15H75.44Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default DocumentIcon;
