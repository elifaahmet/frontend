/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

import { ListItemProps } from './list-item';

export const ListItemWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 0;
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(13), 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  &.deleted {
    animation: slide-out ${(props) => props.theme.duration.fast}ms forwards;
  }

  &.hidden {
    display: none;
    transition: display 0ms linear;
  }
`;

export const ListItemDeleteIconWrapper = styled.div`
  align-self: center;

  @keyframes grow {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes slide-in {
    from {
      margin-inline-end: 0;
    }

    to {
      margin-inline-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
    }
  }

  &.show {
    animation: slide-in ${(props) => props.theme.duration.superFast}ms forwards;
    svg {
      animation: grow ${(props) => props.theme.duration.superFast}ms forwards;
    }
  }

  &.hide {
    display: none;
  }
`;

export const ListItemDataWrapper = styled.div<Omit<ListItemProps, 'data'>>`
  display: flex;
  width: 100%;
`;

export const ListItemDataSectionStart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: center;
  & > *:first-of-type {
    padding-block-end: ${(props) =>
      calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)};
  }
`;

export const ListItemDataSectionEndPayment = styled.div`
  display: flex;
  flex-direction: row;
  & {
    .money-country {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & > label:first-of-type {
        padding-block-end: ${(props) =>
          calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)};
      }
    }

    .right-arrow {
      padding-inline-start: ${(props) =>
        calculateWithUnit(props.theme.__spacer(9), 'rem', props.theme)};
      display: flex;
      align-items: center;
    }
  }
`;

export const ListItemDataSectionEndUser = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  .right-arrow {
    padding-inline-start: ${(props) =>
      calculateWithUnit(props.theme.__spacer(9), 'rem', props.theme)};
    display: flex;
    align-items: center;
  }
`;
