/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const TotalUSDRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TotalUSDColumn = styled.div`
  display: inline-flex;

  & {
    p {
      font-size: ${(props) =>
        calculateWithUnit(props.theme.__fontSize(16), 'rem', props.theme)};

      .regular {
        font-weight: ${(props) => props.theme.fontWeight['regular']};
      }
    }
  }
`;

export const ExchangeRateDisclaimer = styled.div`
  text-align: center;
`;
