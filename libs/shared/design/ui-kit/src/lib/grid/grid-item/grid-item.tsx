/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { GridItemProps, GridItemType } from '../grid.types';
import {
  interpolateStyles,
  calculateWithUnit,
} from '../../../utils/transformations';

type Breakpoint = 'xs' | 's' | 'm' | 'l';
const determineGridItemStyle = (
  screenSize: Breakpoint,
  props: GridItemProps
) => {
  switch (screenSize) {
    case 'xs':
      return interpolateStyles({
        gridRowStart: props.rowStart?.[0],
        gridRowEnd: props.rowEnd?.[0],
        gridColumnStart: props.offset?.[0],
      });
    case 's':
      return interpolateStyles({
        gridRowStart: props.rowStart?.[1] || props.rowStart?.[0],
        gridRowEnd: props.rowEnd?.[1] || props.rowEnd?.[0],
        gridColumnStart: props.offset?.[1] || props.offset?.[0],
      });
    case 'm':
      return interpolateStyles({
        gridRowStart:
          props.rowStart?.[2] || props.rowStart?.[1] || props.rowStart?.[0],
        gridRowEnd: props.rowEnd?.[2] || props.rowEnd?.[1] || props.rowEnd?.[0],
        gridColumnStart:
          props.offset?.[2] || props.offset?.[1] || props.offset?.[0],
      });
    case 'l':
      return interpolateStyles({
        gridRowStart:
          props.rowStart?.[3] ||
          props.rowStart?.[2] ||
          props.rowStart?.[1] ||
          props.rowStart?.[0],
        gridRowEnd:
          props.rowEnd?.[3] ||
          props.rowEnd?.[2] ||
          props.rowEnd?.[1] ||
          props.rowEnd?.[0],
        gridColumnStart:
          props.offset?.[3] ||
          props.offset?.[2] ||
          props.offset?.[1] ||
          props.offset?.[0],
      });
    default:
      return;
  }
};

const determineGridItemSpanStyle = (
  screenSize: Breakpoint,
  type: GridItemType
) => {
  switch (type) {
    case 'full-width':
      return screenSize === 'l' ? 'span-12' : 'span-6';
    case 'two-thirds':
      return screenSize === 'l' ? 'span-8' : 'span-4';
    case 'half':
      return screenSize === 'l' ? 'span-6' : 'span-3';
    case 'one-third':
      return screenSize === 'l' ? 'span-4' : 'span-2';
    case 'one-fourth':
      return screenSize === 'l' ? 'span-3' : 'span-2';
    case 'one-sixth':
      return screenSize === 'l' ? 'span-2' : 'span-1';
    default:
      return;
  }
};

const StyledGridItem = styled.div<GridItemProps>`
  background-color: ${(props) => props.theme.color[props.bg]};
  ${(props) => determineGridItemStyle('xs', props)};
  ${(props) =>
    interpolateStyles(
      props.theme.base.gridItemSpan[determineGridItemSpanStyle('xs', props.xs)]
    )};
  @media (min-width: ${(props) =>
      calculateWithUnit(props.theme.breakpoint.small, 'em', props.theme)}) {
    ${(props) => determineGridItemStyle('s', props)};
    ${(props) =>
      interpolateStyles(
        props.theme.base.gridItemSpan[
          determineGridItemSpanStyle('s', props.s || props.xs)
        ]
      )};
  }
  @media (min-width: ${(props) =>
      calculateWithUnit(props.theme.breakpoint.medium, 'em', props.theme)}) {
    ${(props) => determineGridItemStyle('m', props)};
    ${(props) =>
      interpolateStyles(
        props.theme.base.gridItemSpan[
          determineGridItemSpanStyle('m', props.m || props.s || props.xs)
        ]
      )};
  }
  @media (min-width: ${(props) =>
      calculateWithUnit(props.theme.breakpoint.large, 'em', props.theme)}) {
    ${(props) => determineGridItemStyle('l', props)};
    ${(props) =>
      interpolateStyles(
        props.theme.base.gridItemSpan[
          determineGridItemSpanStyle(
            'l',
            props.l || props.m || props.s || props.xs
          )
        ]
      )};
  }
`;

const GridItem = (props: GridItemProps) => (
  <StyledGridItem {...props}>{props.children}</StyledGridItem>
);

GridItem.defaultProps = {
  rowStart: [1],
  offset: [1],
  rowEnd: [1],
};

export default GridItem;
