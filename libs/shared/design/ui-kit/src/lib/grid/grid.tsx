/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { GridProps } from './grid.types';
import {
  appendValuesWithUnits,
  calculateWithUnit,
  interpolateStyles,
} from '../../utils/transformations';

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  ${(props) =>
    interpolateStyles(
      appendValuesWithUnits({ gridColumnGap: props.theme.gutter[0] }, [
        'gridColumnGap',
      ])
    )}
  @media (min-width: ${(props) =>
    calculateWithUnit(props.theme.breakpoint.medium, 'em', props.theme)}) {
    ${(props) =>
      interpolateStyles(
        appendValuesWithUnits({ gridColumnGap: props.theme.gutter[1] }, [
          'gridColumnGap',
        ])
      )}
  }
  @media (min-width: ${(props) =>
      calculateWithUnit(props.theme.breakpoint.large, 'em', props.theme)}) {
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`;

const Grid = (props: GridProps) => <StyledGrid>{props.children}</StyledGrid>;

export default Grid;
