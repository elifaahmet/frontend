/**@format */

import { Moment } from 'moment-timezone';

export type CalendarDateType = Moment | null;
export type SetDateRangeType = (dates: {
  startDate: CalendarDateType;
  endDate: CalendarDateType;
}) => void;
export type SetSingleDateType = ({ date: CalendarDateType }) => void;
export interface CalendarProps {
  isSingleDateInput: boolean;
  icon?: boolean;
  setDates?: SetDateRangeType;
  setDate?: SetSingleDateType;
  dockBottom?: boolean;
}
export interface MutualCalendarParams {
  customInputIcon: JSX.Element;
  inputIconPosition: string;
  navPrev: JSX.Element;
  navNext: JSX.Element;
  numberOfMonths: number;
  hideKeyboardShortcutsPanel: boolean;
}
