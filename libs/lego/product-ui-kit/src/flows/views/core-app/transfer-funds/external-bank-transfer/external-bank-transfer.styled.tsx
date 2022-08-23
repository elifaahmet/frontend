/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const InitialStepCheckingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
  border-block-end: ${(props) => calculateWithUnit(4.5, 'rem', props.theme)}
    solid ${(props) => props.theme.color['primary-magenta']};

  & {
    span {
      padding-block-start: ${(props) =>
        calculateWithUnit(10, 'rem', props.theme)};
    }
  }
`;

export const ConfirmationStepHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
