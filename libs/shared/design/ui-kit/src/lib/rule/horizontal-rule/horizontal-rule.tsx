/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { RuleProps } from '../rule.types';
import {
  appendValuesWithUnits,
  interpolateStyles,
} from '../../../utils/transformations';

const StyledHorizontalRule = styled.hr<RuleProps>`
  color: ${(props) => props.theme.color[props.color]};
  width: 100%;
  ${(props) =>
    interpolateStyles(
      appendValuesWithUnits({ height: props.size }, ['height'])
    )};
  border-width: 0;
`;

export function HorizontalRule(props: RuleProps) {
  return <StyledHorizontalRule color={props.color} size={props.size} />;
}

HorizontalRule.defaultProps = {
  color: 'neutral-black',
};

export default HorizontalRule;
