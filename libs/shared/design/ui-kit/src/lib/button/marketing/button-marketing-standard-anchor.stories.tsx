import {Meta, Story} from '@storybook/react';
import {AnchorButtonProps} from '../button.types';
import ButtonMarketingStandardAnchor from './button-marketing-standard-anchor';
import {DEFAULT, LARGE, MEDIUM, PRIMARY, SMALL} from '../../../constants';
import React from 'react';

export default {
  component: ButtonMarketingStandardAnchor,
  title: 'Buttons/Marketing',
} as Meta;

const Template: Story<AnchorButtonProps> = (args) => {
  const { children, ...rest } = args;
  return <ButtonMarketingStandardAnchor {...rest}>{children}</ButtonMarketingStandardAnchor>;
}

const link = 'https://tend.money';
const target = '_blank';

export const ButtonSmallAnchor = Template.bind({});
ButtonSmallAnchor.args = {
  fill: DEFAULT,
  children: 'Anchor Small',
  variant: PRIMARY,
  size: SMALL,
  disabled: false,
  href: link,
  target: target,
};

export const ButtonMediumAnchor = Template.bind({});
ButtonMediumAnchor.args = {
  fill: DEFAULT,
  children: 'Anchor Medium',
  variant: PRIMARY,
  size: MEDIUM,
  disabled: false,
  href: link,
  target: target,
};

export const ButtonLargeAnchor = Template.bind({});
ButtonLargeAnchor.args = {
  fill: DEFAULT,
  children: 'Anchor Large',
  variant: PRIMARY,
  size: LARGE,
  disabled: false,
  href: link,
  target: target,
};
