/**@format */

import styled from '@emotion/styled';
import { CalendarProps } from './calendar.types';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const CalendarWrapper = styled.div<CalendarProps>`
  width: 100%;

  & {
    .SingleDatePickerInput,
    .DateInput,
    .DateRangePickerInput,
    .DateInput_input {
      background: none;
    }

    .DateInput_fang {
      display: none;
    }

    .SingleDatePicker,
    .DateRangePicker {
      width: 100%;

      .SingleDatePickerInput,
      .DateRangePickerInput {
        display: flex;
        border: none;

        .SingleDateInput {
          width: calc(100%);
        }
        ,
        .DateInput {
          width: calc(100%);

          .DateInput_input {
            border: ${(props) =>
                calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)}
              solid ${(props) => props.theme.colorScheme.secondary.text};
            font-family: Pilat;
            font-style: normal;
            font-weight: normal;
            font-size: ${(props) =>
              calculateWithUnit(
                props.theme.__fontSize(14),
                'rem',
                props.theme
              )};
            line-height: ${(props) =>
              calculateWithUnit(
                props.theme.__lineHeight(1.21),
                'rem',
                props.theme
              )};
            letter-spacing: ${(props) => props.theme.__letterSpacing(-0.12)};
            color: ${(props) => props.theme.color['neutral-off-white']};

            &::placeholder {
              color: ${(props) => props.theme.color['neutral-off-white']};
            }

            &::after {
              content: 'what →';
            }
          }
        }
        .SingleDatePickerInput_arrow,
        .DateRangePickerInput_arrow {
          width: ${(props) => calculateWithUnit(24, 'rem', props.theme)};
        }
      }

      .SingleDatePicker_picker,
      .DateRangePicker_picker {
        top: 0 !important;
        left: 0 !important;
        transform: translate(
          0,
          ${(props) => (props.dockBottom ? '18%' : '-105%')}
        );
        background-color: ${(props) =>
          props.theme.colorScheme.secondary.background};
        width: 100%;

        .DayPicker {
          width: 100% !important;

          & > div > div {
            width: 100% !important;
            min-height: ${(props) =>
              calculateWithUnit(334, 'rem', props.theme)};
          }

          .DayPicker_weekHeader {
            width: 100%;
            padding: 0 !important;

            ul {
              padding-inline-start: ${(props) =>
                calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
              li {
                width: calc(100% / 7) !important;
                text-align: center;

                &:first-of-type {
                  text-align: start;
                }
              }

              small {
                font-family: Pilat;
                font-style: normal;
                font-weight: normal;
                font-size: ${(props) =>
                  calculateWithUnit(
                    props.theme.__fontSize(14),
                    'rem',
                    props.theme
                  )};
                line-height: ${(props) =>
                  calculateWithUnit(
                    props.theme.__lineHeight(1.29),
                    'rem',
                    props.theme
                  )};
                letter-spacing: ${(props) =>
                  props.theme.__letterSpacing(-0.005)};
                text-transform: uppercase;
                padding-inline-end: ${(props) =>
                  calculateWithUnit(
                    props.theme.__spacer(6),
                    'rem',
                    props.theme
                  )};
                padding-inline-start: ${(props) =>
                  calculateWithUnit(
                    props.theme.__spacer(6),
                    'rem',
                    props.theme
                  )};
                color: ${(props) => props.theme.color['neutral-off-white']};
                user-select: none;
              }
            }
          }
        }

        .DayPicker_transitionContainer {
          width: 100% !important;

          .CalendarMonthGrid_month__horizontal {
            width: 100%;
          }

          .CalendarMonth {
            padding: 0 !important;
          }

          .CalendarMonth,
          .CalendarMonthGrid {
            width: 100% !important;

            .CalendarMonth_caption,
            .CalendarDay {
              color: ${(props) => props.theme.colorScheme.secondary.text};
            }

            .CalendarMonth_caption {
              text-align: left;
              padding-inline-start: ${(props) =>
                calculateWithUnit(
                  props.theme.__spacer(20),
                  'rem',
                  props.theme
                )};
            }

            table {
              width: 100%;

              td {
                border: none;
                padding: ${(props) =>
                  calculateWithUnit(
                    props.theme.__spacer(2),
                    'rem',
                    props.theme
                  )};
                font-family: Pilat;
                font-style: normal;
                font-weight: bold;
                font-size: ${(props) =>
                  calculateWithUnit(20, 'rem', props.theme)};
                line-height: ${(props) =>
                  calculateWithUnit(
                    props.theme.__lineHeight(1.2),
                    'rem',
                    props.theme
                  )};
                text-align: center;
                letter-spacing: ${(props) =>
                  calculateWithUnit(
                    props.theme.__letterSpacing(0.02),
                    'rem',
                    props.theme
                  )};
                user-select: none;

                &.CalendarDay__selected_start,
                &.CalendarDay__selected_end,
                &.CalendarDay__selected {
                  background-color: ${(props) =>
                    props.theme.color['primary-yellow']};
                  color: ${(props) => props.theme.colorScheme.neutral.dark};
                }
                &.CalendarDay__selected_span,
                &.CalendarDay__hovered_span {
                  background-color: #8b823a;
                  color: ${(props) => props.theme.colorScheme.neutral.dark};
                }

                &.CalendarDay__blocked_out_of_range {
                  color: ${(props) => props.theme.color['neutral-dark-gray']};
                }
              }
            }
          }

          .CalendarMonthGrid {
            left: 0;
          }
        }
      }

      .DayPickerNavigation {
        display: flex;
        justify-content: flex-end;
        transform: translate(
          ${(props) => calculateWithUnit(0, 'rem', props.theme)},
          ${(props) => calculateWithUnit(22, 'rem', props.theme)}
        );
        z-index: ${(props) => props.theme.zIndex.default + 500};
        height: auto;
        position: fixed;
        right: 0;
        background-color: ${(props) =>
          props.theme.colorScheme.secondary.background};
        z-index: ${(props) => props.theme.zIndex.default + 500};

        .DayPickerNavigation_button {
          display: inline-flex;
          width: ${(props) => calculateWithUnit(24, 'rem', props.theme)};
          height: ${(props) => calculateWithUnit(24, 'rem', props.theme)};
          justify-content: center;
          align-items: center;
          background-color: ${(props) =>
            props.theme.colorScheme.secondary.background};
          z-index: ${(props) => props.theme.zIndex.default + 500};
          user-select: none;

          svg {
            user-select: none;
          }

          &:nth-of-type(1) {
            margin-inline-end: ${(props) =>
              calculateWithUnit(14, 'rem', props.theme)};
          }
          &:nth-of-type(2) {
            margin-inline-end: ${(props) =>
              calculateWithUnit(12, 'rem', props.theme)};
          }
        }
      }

      .DayPicker,
      .CalendarMonthGrid,
      .CalendarMonth,
      .CalendarDay {
        background: none;
      }
    }
  }
`;
