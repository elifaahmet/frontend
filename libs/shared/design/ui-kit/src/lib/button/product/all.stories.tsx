/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '../../../utils/transformations';
import ButtonProduct from './button-product';
import { PRIMARY, SECONDARY, TERTIARY } from '../../../constants';

const AllButtonsProduct = styled.div`
  display: flex;
  flex-direction: column;
  Button {
    margin-block-start: ${(props) =>
      calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
    margin-block-end: ${(props) =>
      calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
  }
`;

export default {
  component: AllButtonsProduct,
  title: 'Buttons/Product',
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = () => {};

export const allButtons = () => {
  return (
    <AllButtonsProduct>
      <ButtonProduct variant={PRIMARY}>Primary</ButtonProduct>
      <ButtonProduct variant={PRIMARY} disabled={true}>
        Disabled
      </ButtonProduct>
      <ButtonProduct variant={SECONDARY}>Secondary</ButtonProduct>
      <ButtonProduct
        variant={SECONDARY}
        twoGang={{
          twoGangLabels: ['accept', 'decline'],
          twoGangOnClick: [emptyFunction, emptyFunction],
        }}
      >
        Two Gang
      </ButtonProduct>
      <ButtonProduct variant={TERTIARY}>Icon Button</ButtonProduct>
    </AllButtonsProduct>
  );
};
