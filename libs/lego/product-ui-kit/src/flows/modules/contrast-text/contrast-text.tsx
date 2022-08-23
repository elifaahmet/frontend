/**@format */
import React from 'react';

import { ContrastTextWrapper } from './contrast-text.styled';

export const ContrastText: React.FC = (props) => (
  <ContrastTextWrapper>{props.children}</ContrastTextWrapper>
);

export default ContrastTextWrapper;
