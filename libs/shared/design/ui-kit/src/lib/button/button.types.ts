/** @format */

import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  MouseEventHandler,
} from 'react';
import { ReactNode } from 'react';
import type { IconName } from '../icons/svg-icon/svg-icon';
import {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  SMALL,
  MEDIUM,
  LARGE,
  DEFAULT,
  INVERTED,
} from '../../constants';
import { ColorName } from '@tend/shared/design/tokens';

export type OnClick = MouseEventHandler<HTMLButtonElement> | (() => void);

// Marketing - primary (filled - default), secondary (filled - black), tertiary (cta)
// Product - primary (filled), secondary (outlined), tertiary (icon)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: typeof DEFAULT | typeof INVERTED;
  children: ReactNode | string;
  overrideColor?: ColorName;
  variant?: typeof PRIMARY | typeof SECONDARY | typeof TERTIARY;
  size?: typeof SMALL | typeof MEDIUM | typeof LARGE;
  disabled?: boolean;
  icon?: IconName;
  twoGang?: {
    twoGangLabels: [string, string];
    twoGangOnClick: [OnClick, OnClick];
  };
  onClick?: OnClick;
  href?: string;
  target?: string;
  rel?: string;
}

export interface AnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  fill?: typeof DEFAULT | typeof INVERTED;
  children: ReactNode | string;
  overrideColor?: ColorName;
  variant?: typeof PRIMARY | typeof SECONDARY | typeof TERTIARY;
  size?: typeof SMALL | typeof MEDIUM | typeof LARGE;
  disabled?: boolean;
  href: string;
}
