/**@format */

import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import {
  DateRangePicker,
  DateRangePickerShape,
  SingleDatePicker,
  SingleDatePickerShape,
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { CalendarWrapper } from './calendar.styled';
import { SVGIcon } from '@tend/shared/design/ui-kit';
import {
  CalendarProps,
  CalendarDateType,
  MutualCalendarParams,
} from './calendar.types';
import moment from 'moment';

export * from './calendar.types';

export function Calendar(props: CalendarProps) {
  const [startDate, setStartDate] = useState<CalendarDateType>(null);
  const [endDate, setEndDate] = useState<CalendarDateType>(null);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    props.isSingleDateInput
      ? props.setDate({ date: startDate })
      : props.setDates({ startDate, endDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  let params:
    | SingleDatePickerShape
    | DateRangePickerShape
    | MutualCalendarParams = {
    customInputIcon: props.icon && (
      <SVGIcon iconName="calendar-alt" color="primary-yellow" boxSize={24} />
    ),
    inputIconPosition: 'before',
    navPrev: (
      <SVGIcon iconName="arrow-head-left" color="primary-yellow" boxSize={10} />
    ),
    navNext: (
      <SVGIcon
        iconName="arrow-head-right"
        color="primary-yellow"
        boxSize={10}
      />
    ),
    // Calendar
    numberOfMonths: 1,
    hideKeyboardShortcutsPanel: true,
  };

  if (props.isSingleDateInput) {
    params = {
      ...params,
      date: startDate,
      onDateChange: (date) => setStartDate(date),
      focused: focusedInput,
      onFocusChange: ({ focused }) => setFocusedInput(focused),
      isOutsideRange: (day) => day.isAfter(moment()),
      placeholder: 'MM/DD/YYYY',
      id: 'single-date',
    } as SingleDatePickerShape;
  } else {
    params = {
      ...params,
      customArrowIcon: <div />,
      startDate: startDate,
      startDateId: 'start-date',
      endDate: endDate,
      endDateId: 'end-date',
      startDatePlaceholderText: 'From',
      endDatePlaceholderText: 'To',
      onDatesChange: ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
      },
      focusedInput: focusedInput,
      onFocusChange: (focusedInput) => {
        setFocusedInput(focusedInput);
      },
    } as DateRangePickerShape;
  }

  return (
    <CalendarWrapper {...props}>
      {props.isSingleDateInput ? (
        <SingleDatePicker {...(params as SingleDatePickerShape)} />
      ) : (
        <DateRangePicker {...(params as DateRangePickerShape)} />
      )}
    </CalendarWrapper>
  );
}

Calendar.defaultProps = {
  isSingleDateInput: false,
  dockBottom: false,
};

export default Calendar;
