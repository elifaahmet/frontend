/** @format */

import React from 'react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const TendPlus: React.FC<SVGIconProps> = (props) => {
  const { boxSize } = props;

  return (
    <svg
      width={(props.boxSize * 19) / 20}
      height={(boxSize * 20) / 20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns={XMLNS}
    >
      <rect
        x="0.5"
        y="9.625"
        width="5.75"
        height="1.5"
        fill="#FA5CAE"
        stroke="#FA5CAE"
      />
      <rect
        x="12.75"
        y="9.625"
        width="5.75"
        height="1.5"
        fill="#FF5554"
        stroke="#FF5554"
      />
      <rect
        x="10.25"
        y="13.625"
        width="5.75"
        height="1.5"
        transform="rotate(90 10.25 13.625)"
        fill="#F79234"
        stroke="#F79234"
      />
      <rect
        x="10.25"
        y="1.375"
        width="5.75"
        height="1.5"
        transform="rotate(90 10.25 1.375)"
        fill="#FFC73D"
        stroke="#FFC73D"
      />
    </svg>
  );
};

export default TendPlus;
