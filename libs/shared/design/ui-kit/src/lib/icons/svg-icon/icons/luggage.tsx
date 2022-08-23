/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Luggage: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="109"
      height="107"
      viewBox="0 0 109 107"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M62 16.4765C60.9694 15.4252 59.7394 14.59 58.382 14.0199C57.0247 13.4498 55.5672 13.1561 54.095 13.1561C52.6228 13.1561 51.1653 13.4498 49.808 14.0199C48.4506 14.59 47.2206 15.4252 46.19 16.4765C45.1418 17.4923 44.31 18.7096 43.7446 20.0552C43.1792 21.4008 42.8919 22.847 42.9 24.3065V26.3065H28V24.3065C27.9005 20.9999 28.536 17.7123 29.8606 14.681C31.1852 11.6496 33.1659 8.94988 35.66 6.77652C40.7145 2.27751 47.2848 -0.141253 54.05 0.00652368C60.8184 -0.142798 67.3924 2.276 72.45 6.77652C74.9404 8.95178 76.9174 11.6523 78.2385 14.6836C79.5596 17.7149 80.192 21.0014 80.09 24.3065V26.3065H108.09V106.387H24.44V92.3065H94V40.1165H14.08V82.0065H0V26.3065H65.21V24.3065C65.2285 22.8527 64.9538 21.41 64.4022 20.0647C63.8507 18.7194 63.0337 17.499 62 16.4765Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Luggage;
