/** @format */

import {
  FontSize,
  LetterSpacing,
  LineHeight,
  FontWeight,
  FontFamily,
  defaultTheme,
} from '@tend/shared/design/tokens';

const typographyKeys = [
  'mobile-headline',
  'mobile-sub',
  'entry-header',
  'placeholder',
  'placeholder-large',
  'legal',
  'cta-disabled',
  'radio-button-unselected',
  'radio-button-selected',
  'explainer-text',
  'list-item-headline',
  'list-item-amount',
  'caption',
] as const;
export type TypographyKey = typeof typographyKeys[number];

export interface IBaseTypography {
  readonly fontSize: FontSize;
  readonly letterSpacing: LetterSpacing;
  readonly lineHeight: LineHeight;
}

export interface IBaseProductHeadline {
  readonly marginBlockStart: number;
  readonly marginBlockEnd: number;
  readonly fontFamily: FontFamily;
  fontWeight?: FontWeight;
}

export interface IBaseProductBody {
  readonly marginBlockStart: number;
  readonly marginBlockEnd: number;
  readonly fontFamily: FontFamily;
}

export interface IBaseTypography {
  readonly marginBlockStart: number;
  readonly marginBlockEnd: number;
}

const baseHeadline: IBaseProductHeadline = {
  marginBlockStart: 0,
  marginBlockEnd: 0,
  fontFamily: defaultTheme.fontFamily['headline'],
  fontWeight: defaultTheme.fontWeight['bold'],
};

const baseBody: IBaseProductBody = {
  marginBlockStart: 0,
  marginBlockEnd: 0,
  fontFamily: defaultTheme.fontFamily['body'],
};

export type ProductBodyProps = IBaseTypography & IBaseProductBody;
export type ProductHeadlineProps = IBaseTypography & IBaseProductHeadline;
export type TypographyType = {
  readonly [key in TypographyKey]: ProductBodyProps | ProductHeadlineProps;
};
export type TypeScale = keyof TypographyType;
export type Typography = ProductBodyProps | ProductHeadlineProps;

const typography: TypographyType = {
  'mobile-headline': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(53),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(0.9),
  },
  'list-item-amount': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['bold'],
    fontSize: defaultTheme.__fontSize(24),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(0.71),
  },
  'mobile-sub': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(16),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(1.06),
  },
  'entry-header': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(18),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(0.9),
  },
  placeholder: {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['regular'],
    fontSize: defaultTheme.__fontSize(14),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(1.21),
  },
  'placeholder-large': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['bold'],
    fontSize: defaultTheme.__fontSize(21),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(0.81),
  },
  legal: {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['regular'],
    fontSize: defaultTheme.__fontSize(12),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(1.42),
  },
  'cta-disabled': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['bold'],
    fontSize: defaultTheme.__fontSize(14),
    letterSpacing: defaultTheme.__letterSpacing(0.01),
    lineHeight: defaultTheme.__lineHeight(0.86),
  },
  'radio-button-unselected': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['regular'],
    fontSize: defaultTheme.__fontSize(14),
    letterSpacing: defaultTheme.__letterSpacing(0.01),
    lineHeight: defaultTheme.__lineHeight(0.86),
  },
  'radio-button-selected': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['bold'],
    fontSize: defaultTheme.__fontSize(14),
    letterSpacing: defaultTheme.__letterSpacing(0.01),
    lineHeight: defaultTheme.__lineHeight(0.86),
  },
  'explainer-text': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['regular'],
    fontSize: defaultTheme.__fontSize(48),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(1),
  },
  'list-item-headline': {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['bold'],
    fontSize: defaultTheme.__fontSize(16),
    letterSpacing: defaultTheme.__letterSpacing(0.01),
    lineHeight: defaultTheme.__lineHeight(1.5),
  },
  caption: {
    ...baseBody,
    fontWeight: defaultTheme.fontWeight['bold'],
    fontSize: defaultTheme.__fontSize(10),
    letterSpacing: defaultTheme.__letterSpacing(0.01),
    lineHeight: defaultTheme.__lineHeight(1.29),
  },
};

export default typography;
