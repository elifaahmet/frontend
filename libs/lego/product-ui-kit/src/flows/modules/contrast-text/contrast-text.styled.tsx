/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const ContrastTextWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: ${(props) =>
    `${calculateWithUnit(24, 'rem', props.theme)} ${calculateWithUnit(
      20,
      'rem',
      props.theme
    )}`};
  background: ${(props) => props.theme.colorScheme.secondary.background};
`;
