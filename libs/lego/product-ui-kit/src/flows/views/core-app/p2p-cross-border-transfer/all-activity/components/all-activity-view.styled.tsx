/**@format */
import styled from '@emotion/styled';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const FilterButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(20), 'rem', props.theme)};
  padding-inline-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(20), 'rem', props.theme)};
`;

export const FilterSubForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(
    100vh - ${(props) => calculateWithUnit(16 * 4, 'rem', props.theme)}
  );
`;
