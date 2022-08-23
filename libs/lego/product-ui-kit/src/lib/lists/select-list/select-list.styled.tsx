/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { SelectListItemProps } from '@tend/lego/product-ui-kit';

export const SelectListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const SelectListItemWrapper = styled.div<
  Pick<SelectListItemProps, 'onClick' | 'color'>
>`
  display: flex;
  width: 100%;
  min-height: ${(props) => calculateWithUnit(100, 'rem', props.theme)};
  border: 0;
  border-top: ${(props) =>
    `${calculateWithUnit(4.5, 'rem', props.theme)} solid ${
      props.theme.color[props.color]
    }`};
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
  &:active {
    border-top: ${(props) =>
      `${calculateWithUnit(4.5, 'rem', props.theme)} solid ${
        props.theme.color[props.color.replace('primary', 'secondary')]
      }`};
    svg {
      path[stoke-color^='#'],
      path[stroke^='#'] {
        stroke: ${(props) =>
          props.theme.color[props.color.replace('primary', 'secondary')]};
      }

      path[fill^='#'] {
        fill: ${(props) =>
          props.theme.color[props.color.replace('primary', 'secondary')]};
      }
    }
  }
`;

export const SelectListItemLeftIconWrapper = styled.div`
  display: flex;
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  align-items: center;
`;

export const SelectListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  padding-inline-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  flex-grow: 1;
  & > h2 {
    padding-block-end: ${(props) =>
      calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)};
  }
`;

export const SelectListItemRightIconWrapper = styled.div`
  display: flex;
  padding-inline-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
  align-items: center;
`;
