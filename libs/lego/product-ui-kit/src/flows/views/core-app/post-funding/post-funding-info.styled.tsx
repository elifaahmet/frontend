/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CarouselItemInnerWrapper = styled.div`
  padding: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  width: 100vw;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  height: ${(props) => calculateWithUnit(183, 'rem', props.theme)};
  flex-direction: column;

  & {
    h1 {
      display: block;
    }
  }
`;
