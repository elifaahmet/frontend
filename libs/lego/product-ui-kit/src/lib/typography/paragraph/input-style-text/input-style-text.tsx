/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { ColorName } from '@tend/shared/design/tokens';
import {
  BaseInputKey as InputCompositeKey,
  appendValuesWithUnits,
  interpolateStyles,
} from '@tend/shared/design/ui-kit';

export interface InputStyleTextProps {
  variant: InputCompositeKey;
  color?: ColorName;
}

export const InputStyleText = styled.p<InputStyleTextProps>`
  ${(props) =>
    interpolateStyles(
      appendValuesWithUnits(props.theme.base.input[props.variant], ['fontSize'])
    )};
  color: ${(props) =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.colorScheme.primary.text};
  border: none;
  padding: 0;
  margin: 0;
`;
