/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Magazine: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="120" height="71" viewBox="0 0 120 71" fill="none" xmlns={XMLNS}>
      <rect
        x="55"
        y="1"
        width="10"
        height="70"
        fill={theme.color[props.color]}
      />
      <rect y="12" width="10" height="44" fill={theme.color[props.color]} />
      <rect
        x="110"
        y="1"
        width="10"
        height="70"
        fill={theme.color[props.color]}
      />
      <rect
        x="14"
        y="11"
        width="10"
        height="97"
        transform="rotate(-90 14 11)"
        fill={theme.color[props.color]}
      />
      <rect
        x="20"
        y="71"
        width="10"
        height="91"
        transform="rotate(-90 20 71)"
        fill={theme.color[props.color]}
      />
      <rect
        x="25"
        y="26"
        width="10"
        height="25"
        transform="rotate(-90 25 26)"
        fill={theme.color[props.color]}
      />
      <rect
        x="15"
        y="41"
        width="10"
        height="35"
        transform="rotate(-90 15 41)"
        fill={theme.color[props.color]}
      />
      <rect
        x="71"
        y="26"
        width="10"
        height="25"
        transform="rotate(-90 71 26)"
        fill={theme.color[props.color]}
      />
      <rect
        x="71"
        y="41"
        width="10"
        height="34"
        transform="rotate(-90 71 41)"
        fill={theme.color[props.color]}
      />
      <rect
        x="71"
        y="56"
        width="10"
        height="34"
        transform="rotate(-90 71 56)"
        fill={theme.color[props.color]}
      />
      <rect
        y="12.1968"
        width="17.8271"
        height="10"
        transform="rotate(-39.5454 0 12.1968)"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Magazine;
