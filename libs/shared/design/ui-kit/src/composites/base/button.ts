/** @format */

import {
  defaultTheme,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacer,
} from '@tend/shared/design/tokens';
import { TextTransform } from '@tend/shared/design/ui-kit';

const buttonKeys = [
  'button-large',
  'button-medium',
  'button-small',
  'cta-small',
  'cta-medium',
  'button-product-standard',
  'button-product-icon',
] as const;
export type ButtonKey = typeof buttonKeys[number];

export interface IBaseButton {
  readonly fontWeight: FontWeight;
  readonly textTransform: TextTransform;
}

export interface IButtonWebProps {
  readonly fontSize: FontSize;
  readonly lineHeight: LineHeight;
  readonly fontFamily: FontFamily;
  readonly paddingBlockStart: Spacer;
  readonly paddingBlockEnd: Spacer;
  readonly paddingInlineStart: Spacer;
  readonly paddingInlineEnd: Spacer;
  readonly border: string;
}

export interface ICtaProps {
  readonly fontSize: FontSize;
  readonly lineHeight: LineHeight;
  readonly fontFamily: FontFamily;
  readonly color: string;
  readonly border: string;
}

export interface IButtonMobileProps {
  readonly fontSize: FontSize;
  readonly lineHeight: LineHeight;
  readonly fontFamily: FontFamily;
  readonly background: string;
  readonly color: string;
  readonly border: string;
  readonly width: string;
}

const baseButton: IBaseButton = {
  textTransform: 'uppercase',
  fontWeight: defaultTheme.fontWeight['bold'],
};

export type ButtonWebProps = IBaseButton & IButtonWebProps;
export type CtaProps = IBaseButton & ICtaProps;
export type ButtonProductProps = IBaseButton & IButtonMobileProps;
export type ButtonsType = {
  readonly [key in ButtonKey]: ButtonWebProps | CtaProps | ButtonProductProps;
};
export type ButtonScale = keyof ButtonsType;
export type Button = ButtonWebProps | CtaProps | ButtonProductProps;

const buttonComposite: ButtonsType = {
  'button-small': {
    ...baseButton,
    fontFamily: defaultTheme.fontFamily['label'],
    border: 'none',
    fontSize: defaultTheme.__fontSize(14),
    lineHeight: defaultTheme.__lineHeight(0.9),
    paddingBlockStart: defaultTheme.__spacer(6),
    paddingBlockEnd: defaultTheme.__spacer(9),
    paddingInlineStart: defaultTheme.__spacer(16),
    paddingInlineEnd: defaultTheme.__spacer(16),
  },
  'button-medium': {
    ...baseButton,
    fontFamily: defaultTheme.fontFamily['body'],
    border: 'none',
    fontSize: defaultTheme.__fontSize(16),
    lineHeight: defaultTheme.__lineHeight(1.2),
    paddingBlockStart: defaultTheme.__spacer(12),
    paddingBlockEnd: defaultTheme.__spacer(12),
    paddingInlineStart: defaultTheme.__spacer(16),
    paddingInlineEnd: defaultTheme.__spacer(16),
  },
  'button-large': {
    ...baseButton,
    fontFamily: defaultTheme.fontFamily['body'],
    border: 'none',
    fontSize: defaultTheme.__fontSize(24),
    lineHeight: defaultTheme.__lineHeight(1.2),
    paddingBlockStart: defaultTheme.__spacer(12),
    paddingBlockEnd: defaultTheme.__spacer(12),
    paddingInlineStart: defaultTheme.__spacer(16),
    paddingInlineEnd: defaultTheme.__spacer(16),
  },
  'cta-small': {
    ...baseButton,
    fontFamily: defaultTheme.fontFamily['body'],
    border: 'none',
    fontSize: defaultTheme.__fontSize(16),
    lineHeight: defaultTheme.__lineHeight(1.2),
    color: defaultTheme.color['neutral-black'],
  },
  'cta-medium': {
    ...baseButton,
    fontFamily: defaultTheme.fontFamily['headline'],
    border: 'none',
    fontSize: defaultTheme.__fontSize(24),
    lineHeight: defaultTheme.__lineHeight(0.87),
    color: defaultTheme.color['neutral-black'],
  },
  'button-product-standard': {
    ...baseButton,
    border: 'none',
    fontFamily: defaultTheme.fontFamily['label'],
    fontSize: defaultTheme.__fontSize(14),
    lineHeight: defaultTheme.__lineHeight(0.85),
    paddingBlockStart: defaultTheme.__spacer(13),
    paddingBlockEnd: defaultTheme.__spacer(13),
    paddingInlineStart: defaultTheme.__spacer(13),
    paddingInlineEnd: defaultTheme.__spacer(13),
    width: '100%',
  },
  'button-product-icon': {
    ...baseButton,
    border: 'none',
    fontFamily: defaultTheme.fontFamily['label'],
    fontSize: defaultTheme.__fontSize(12),
    lineHeight: defaultTheme.__lineHeight(1.5),
    paddingBlockStart: defaultTheme.__spacer(13),
    paddingBlockEnd: defaultTheme.__spacer(13),
    paddingInlineStart: defaultTheme.__spacer(13),
    paddingInlineEnd: defaultTheme.__spacer(13),
    width: '100%',
  },
};

export default buttonComposite;
