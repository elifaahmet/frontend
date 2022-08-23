/** @format */

import React from 'react';
import Checkbox from './checkbox';
import { CheckboxProps } from './checkbox.types';
import { Story, Meta } from '@storybook/react';

export default {
  component: Checkbox,
  title: 'Form/Elements/Checkbox',
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const defaultCheckbox = Template.bind({});
defaultCheckbox.args = {
  label: 'Default',
};

export const notUpperCase = Template.bind({});
notUpperCase.args = {
  label: 'Not upper case',
  uppercase: false,
};

export const alternateProductLabelStyle = Template.bind({});
alternateProductLabelStyle.args = {
  label: 'Alternate product label style',
  alternateLabelStyle: true,
};

export const alternateProductLabelWithCustomMarkup = Template.bind({});
alternateProductLabelWithCustomMarkup.args = {
  label: (
    <>
      Alternate product label{' '}
      <a target="_blank" href="https://tend.money" rel="noreferrer">
        with link
      </a>
    </>
  ),
  alternateLabelStyle: true,
};

export const checkboxOnDifferentColor = Template.bind({});
checkboxOnDifferentColor.args = {
  label: 'Neon Green Checkbox',
  defaultChecked: true,
  checkboxColor: 'secondary-neon-green',
};

export const checkboxOnDifferentTextColor = Template.bind({});
checkboxOnDifferentTextColor.args = {
  label: 'Magenta Text Color Checkbox',
  labelColor: 'primary-magenta',
};

export const disabledCheckbox = Template.bind({});
disabledCheckbox.args = {
  label: 'Disabled Checkbox',
  disabled: true,
};
