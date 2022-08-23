/** @format */

import React from 'react';
import styled from '@emotion/styled';
import CheckIcon from './check-icon';

export default {
  component: CheckIcon,
  title: 'Icons/Static/CheckIcon',
};

const boxSize = 150;

const IconContainer = styled.div`
  display: inline-flex;
  height: ${boxSize + 20}px;
  width: ${boxSize + 20}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['neutral-off-white']};
`;

export const primary = () => {
  return (
    <IconContainer>
      <CheckIcon boxSize={boxSize}></CheckIcon>
    </IconContainer>
  );
};
