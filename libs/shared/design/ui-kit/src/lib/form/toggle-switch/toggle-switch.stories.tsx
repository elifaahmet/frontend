/** @format */

import React from 'react';
import ToggleSwitch, { ToggleSwitchProps } from './toggle-switch';
import { Story, Meta } from '@storybook/react';

export default {
  component: ToggleSwitch,
  title: 'Form/Elements/Toggle Switch',
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const defaultToggleSwitch = Template.bind({});
defaultToggleSwitch.args = {
  label: 'Default',
};

export const toggleSwitchOnDifferentColor = Template.bind({});
toggleSwitchOnDifferentColor.args = {
  label: 'Neon Green Toggle Switch',
  defaultChecked: true,
  toggleColor: 'secondary-neon-green',
};

export const toggleSwitchOnDifferentTextColor = Template.bind({});
toggleSwitchOnDifferentTextColor.args = {
  label: 'Magenta Text Color Toggle Switch',
  labelColor: 'primary-magenta',
};

export const disabledToggleSwitch = Template.bind({});
disabledToggleSwitch.args = {
  label: 'Disabled Toggle Switch',
  disabled: true,
};
