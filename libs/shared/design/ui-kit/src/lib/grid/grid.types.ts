/** @format */

import { ReactNode } from 'react';
import { ColorName } from '@tend/shared/design/tokens';

export type GridItemType =
  | 'full-width'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-fourth'
  | 'one-sixth';
export interface GridItemProps {
  xs: GridItemType;
  s?: GridItemType;
  m?: GridItemType;
  l?: GridItemType;
  //These props are arrays and they are mapping to xs, s, m, large screen size
  offset?: [number, number?, number?, number?];
  rowStart?: [number, number?, number?, number?];
  rowEnd?: [number, number?, number?, number?];
  children: ReactNode;
  bg?: ColorName;
}

export interface GridProps {
  children: ReactNode;
}
