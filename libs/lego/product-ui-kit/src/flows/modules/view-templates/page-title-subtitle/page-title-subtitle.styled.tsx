/**@format */

import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const PageTitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  white-space: pre-line;
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
  text-transform: uppercase;
`;

export const SubtitleWrapper = styled.div`
  white-space: pre-line;
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)};
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
`;
