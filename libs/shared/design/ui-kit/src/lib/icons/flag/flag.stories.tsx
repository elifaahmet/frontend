/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Flag, { FlagName, flagNames, FlagProps } from './flag';

export default {
  component: Flag,
  title: 'Icons/Flag/IndividualIcons',
  decorators: [(story) => <IconContainer>{story()}</IconContainer>],
  argTypes: {
    iconName: {
      options: flagNames,
      control: { type: 'select' },
    },
  },
} as Meta;

const boxSize = 50;

const IconContainer = styled.div`
  display: inline-flex;
  height: ${boxSize + 20}px;
  width: ${boxSize + 20}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['neutral-off-white']};
`;

function getArgs(flagName: FlagName) {
  return {
    flagName,
    boxSize,
  };
}

const Template: Story<FlagProps> = (args) => <Flag {...args} />;

export const usIcon = Template.bind({});
usIcon.args = getArgs('UsIcon');

export const mxIcon = Template.bind({});
mxIcon.args = getArgs('MxIcon');
