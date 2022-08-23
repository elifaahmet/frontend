/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { RuleProps } from '../rule.types';
import {
  appendValuesWithUnits,
  interpolateStyles,
} from '../../../utils/transformations';

const StyledVerticalRule = styled.hr<RuleProps>`
  color: ${(props) => props.theme.color[props.color]};
  height: 100%;
  border-width: 0;
  ${(props) =>
    interpolateStyles(appendValuesWithUnits({ width: props.size }, ['width']))};
`;

export function VerticalRule(props: RuleProps) {
  return <StyledVerticalRule color={props.color} size={props.size} />;
}

VerticalRule.defaultProps = {
  color: 'neutral-black',
};

export default VerticalRule;
