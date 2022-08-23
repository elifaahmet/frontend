/** @format **/
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

const TopBarWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  height: 56px;
  color: ${(props) => props.theme.colorScheme.secondary};
  box-sizing: content-box !important;
  padding: ${(props) => calculateWithUnit(16, 'rem', props.theme)};
  margin: 0 auto;
`;

export const TopBar = ({ children }: PropsWithChildren<any>) => {
  return <TopBarWrapper>{children}</TopBarWrapper>;
};
