/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonProps } from '../button.types';
import ButtonProductTwoGang from './button-product-two-gang';
import { SECONDARY } from '../../../constants';

export default {
  component: ButtonProductTwoGang,
  title: 'Buttons/Product',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ButtonProductTwoGang {...args} />
);

export const twoGang = Template.bind({});
twoGang.args = {
  variant: SECONDARY,
  twoGang: {
    twoGangLabels: ['yes', 'no'],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    twoGangOnClick: [() => {}, () => {}],
  },
};
