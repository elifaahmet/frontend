/**@format */

import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const EmailInputWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(28, 'rem', props.theme)};
`;
export const PasswordInputWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(35, 'rem', props.theme)};
`;
export const RepeatPasswordInputWrapper = styled.div`
  padding-block-start: ${(props) => calculateWithUnit(51, 'rem', props.theme)};
`;
export const ButtonWrapper = styled.div`
  margin-block-start: auto;
`;
