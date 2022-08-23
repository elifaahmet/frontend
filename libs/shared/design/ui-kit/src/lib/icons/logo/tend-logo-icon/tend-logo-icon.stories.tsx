/** @format */

import React from 'react';
import styled from '@emotion/styled';
import TendLogoIcon from './tend-logo-icon';

export default {
  component: TendLogoIcon,
  title: 'Icons/Static/TendLogoIcon',
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
      <TendLogoIcon boxSize={boxSize} color="neutral-black"></TendLogoIcon>
    </IconContainer>
  );
};
