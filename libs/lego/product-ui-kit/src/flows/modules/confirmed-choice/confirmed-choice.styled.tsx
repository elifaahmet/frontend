/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const ConfirmedChoiceOuterWrapper = styled.div`
  width: 100%;
`;

export const ConfirmedChoiceInnerWrapper = styled.div`
  width: 100%;
  padding: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  background: ${(props) => props.theme.colorScheme.secondary.background};
`;
