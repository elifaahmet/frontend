/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const StyledOL = styled.ol`
  & {
    li {
      padding: ${(props) =>
          calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)}
        0;

      &:first-child {
        padding: 0 0
          ${(props) =>
            calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)}
          0;
      }
    }
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
`;
