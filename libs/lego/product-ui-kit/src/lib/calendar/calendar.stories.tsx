/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Calendar from './calendar';
import { CalendarProps } from './calendar.types';
import styled from '@emotion/styled';

export default {
  component: Calendar,
  title: 'Calendar',
} as Meta;

const Container = styled.div<CalendarProps>`
  display: flex;
  width: 100%;
  height: 900px;
  justify-content: center;
  ${(props) => (props.dockBottom ? '' : 'align-items: center;')}
  background-color: ${(props) => props.theme.colorScheme.primary.background};
  padding: 16px;
`;

const Template: Story = (args: CalendarProps) => (
  <Container {...args}>
    <Calendar {...args} />
  </Container>
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = () => {};

export const dateRangePickerDockedOnTopWithIcon = Template.bind({});
dateRangePickerDockedOnTopWithIcon.args = {
  icon: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDates: emptyFunction,
};

export const dateRangePickerDockedOnBottomWithoutIcon = Template.bind({});
dateRangePickerDockedOnBottomWithoutIcon.args = {
  dockBottom: true,
  setDates: emptyFunction,
};

export const singleDatePickerDockedOnTopWithIcon = Template.bind({});
singleDatePickerDockedOnTopWithIcon.args = {
  isSingleDateInput: true,
  icon: true,
  setDate: emptyFunction,
};

export const singleDatePickerDockedOnBottomWithoutIcon = Template.bind({});
singleDatePickerDockedOnBottomWithoutIcon.args = {
  isSingleDateInput: true,
  dockBottom: true,
  setDate: emptyFunction,
};
