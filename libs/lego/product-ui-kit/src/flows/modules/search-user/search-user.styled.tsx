/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const SearchUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchUserFieldWrapper = styled.div`
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(20), 'rem', props.theme)};
`;
