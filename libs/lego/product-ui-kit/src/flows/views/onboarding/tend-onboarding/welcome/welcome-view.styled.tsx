/**@format */

import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const RadioButtonWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(53, 'rem', props.theme)};
`;
export const EmailInputWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(33, 'rem', props.theme)};
`;
export const PhoneTendIdInputWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(26, 'rem', props.theme)};
`;
export const ButtonWrapper = styled.div`
  margin-block-start: auto;
`;
