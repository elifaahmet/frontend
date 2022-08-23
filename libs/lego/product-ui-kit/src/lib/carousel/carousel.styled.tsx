/**@format */

import styled from '@emotion/styled';
import { CarouselInnerContainerProps } from './carousel';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { getTranslateXValue } from './helpers';

export const CarouselOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-inline-start: -${(props) => calculateWithUnit(props.theme.offset, 'rem', props.theme)};
  margin-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
`;

export const CarouselInnerContainer = styled.div<CarouselInnerContainerProps>`
  white-space: nowrap;
  transition: transform
    ${(props) =>
      props.isUserInteracting
        ? props.theme.duration.instant
        : props.theme.duration.fast}ms;
  transform: translateX(${(props) => getTranslateXValue(props)}%);
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;
  white-space: break-spaces;
`;
