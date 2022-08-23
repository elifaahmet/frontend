/** @format */

import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

const Bar = styled.div`
  display: flex;
  justify-content: center;
  & {
    span {
      margin-inline-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
    }
    span:last-child {
      margin-inline-end: 0;
    }
  }
`;

const Dot = styled.span`
  display: inline-flex;
  width: ${(props) => calculateWithUnit(10, 'rem', props.theme)};
  height: ${(props) => calculateWithUnit(10, 'rem', props.theme)};
  border-radius: 50%;
  background-color: ${(props) => props.theme.color['primary-yellow']};

  &:not(.active) {
    opacity: 50%;
  }
`;

type OnClick = (e: MouseEvent<HTMLElement>) => void | (() => void);

export interface NavigationDotsProps {
  activeItemIndex?: number;
  onClickHandlers?: OnClick[];
}

export const NavigationDots: React.FC<NavigationDotsProps> = (props) => {
  return (
    <Bar>
      {props.onClickHandlers.map((handler, index) => (
        <Dot
          key={`navigation-dot-${index}`}
          className={props.activeItemIndex === index ? 'active' : ''}
          onClick={handler}
        />
      ))}
    </Bar>
  );
};

NavigationDots.defaultProps = {
  activeItemIndex: 0,
  onClickHandlers: [
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
  ],
};

export default NavigationDots;
