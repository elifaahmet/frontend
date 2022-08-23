/** @default */

import React from 'react';
import { useTheme } from '@emotion/react';
import {SVGIconProps, XMLNS} from '../svg-icon';

const MessageCenter = (props: SVGIconProps) => {
  const theme = useTheme();

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns={XMLNS}>
      <path d="M10 32.0771L60 62.001L111 32.0771" stroke={theme.color[props.color]} strokeWidth="14"/>
      <path d="M24.3269 93H113V27H7V75.3304" stroke={theme.color[props.color]} strokeWidth="14"/>
    </svg>
  );
}

export default MessageCenter;
