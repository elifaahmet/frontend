/**@format */
import styled from '@emotion/styled';
import React from 'react';

export const TransactionSummary = styled.div`
  text-align: center;

  & {
    .currency {
      font-weight: ${(props) => props.theme.fontWeight['regular']};
      font-size: 0.5em;
    }
  }
`;
