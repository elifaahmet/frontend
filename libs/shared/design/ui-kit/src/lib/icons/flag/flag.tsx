/** @format */
import React from 'react';
import styled from '@emotion/styled';
import * as allIcons from './country-icons';
import { calculateWithUnit } from '../../../utils/transformations';
export const flagNames = Object.keys(allIcons);
export type FlagName = typeof flagNames[number];
export interface FlagProps {
  flagName: FlagName;
  boxSize?: number;
}
const FlagWrapper = styled.span<FlagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    calculateWithUnit(props.boxSize || 100, 'rem', props.theme)};
  height: ${(props) =>
    calculateWithUnit(props.boxSize || 100, 'rem', props.theme)};
`;
export const Flag = (props: FlagProps) => {
  const IconComponent = allIcons[props.flagName];
  return (
    <FlagWrapper {...props}>
      <IconComponent {...props} />
    </FlagWrapper>
  );
};
export default Flag;
