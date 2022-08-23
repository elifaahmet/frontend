/**@format */
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

import type { Spacer as SpacerValueTypes } from '@tend/shared/design/tokens';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export type SpacerValue = 0 | SpacerValueTypes;

export interface SpacerProps {
  top?: SpacerValue;
  bottom?: SpacerValue;
  left?: SpacerValue;
  right?: SpacerValue;
  marginBottom?: SpacerValue;
}

export const Spacer = styled.div<SpacerProps>`
  padding-block-start: ${(props) =>
    calculateWithUnit(props.top, 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.bottom, 'rem', props.theme)};
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.left, 'rem', props.theme)};
  padding-inline-end: ${(props) =>
    calculateWithUnit(props.right, 'rem', props.theme)};
  margin-bottom: ${(props) =>
    calculateWithUnit(props.marginBottom, 'rem', props.theme)};
`;
Spacer.defaultProps = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  marginBottom: 0,
};

type LayoutProps = PropsWithChildren<SpacerProps>;

/**@tech-debt: replace with 8 pt grid system once we have it */

export const Layout: React.FC<LayoutProps> = (props) => (
  <Spacer
    top={props.top ?? 16}
    bottom={props.bottom ?? 16}
    left={props.left ?? 16}
    right={props.right ?? 16}
    style={{
      overflowY: 'auto',
      width: '100%',
      overscrollBehavior: 'contain',
      marginBottom: '1rem',
    }}
  >
    {props.children}
  </Spacer>
);
