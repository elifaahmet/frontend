/** @format */

import React from 'react';
import styled from '@emotion/styled';

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  inset: 0;
  background-color: ${(props) => props.theme.colorScheme.opacity.mediumBlack};
  z-index: ${(props) => props.theme.zIndex.overlay};
`;

const ModalOverlay: React.FC = (props) => (
  <StyledOverlay>{props.children}</StyledOverlay>
);

export default ModalOverlay;
