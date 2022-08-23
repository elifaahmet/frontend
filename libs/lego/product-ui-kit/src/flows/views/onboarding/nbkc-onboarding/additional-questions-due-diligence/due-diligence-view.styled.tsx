/**@format */

import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const InputWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(35, 'rem', props.theme)};
  label {
    text-transform: uppercase;
  }
`;
export const ButtonWrapper = styled.div`
  margin-block-start: auto;
`;
