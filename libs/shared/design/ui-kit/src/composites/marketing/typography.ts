/** @format */

import {
  FontSize,
  LetterSpacing,
  LineHeight,
  FontWeight,
  FontFamily,
  defaultTheme,
} from '@tend/shared/design/tokens';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TextTransform } from '@tend/shared/design/ui-kit';

const typographyKeys = [
  'headline-0',
  'headline-1',
  'headline-2',
  'headline-3',
  'headline-4',
  'headline-5',
  'headline-6',
  'body-0',
  'body-1',
  'body-2',
  'body-3',
  'body-4',
  'body-5',
  'body-6',
  'label-3',
  'label-4',
  'label-5',
] as const;
export type TypographyKey = typeof typographyKeys[number];

export interface IBaseTypography {
  readonly fontSize: FontSize;
  readonly letterSpacing: LetterSpacing;
  readonly lineHeight: LineHeight;
}

export interface IBaseHeadline {
  readonly textTransform: TextTransform;
  readonly marginBlockStart: number;
  readonly marginBlockEnd: number;
  readonly fontFamily: FontFamily;
  fontWeight: FontWeight;
}

export interface IBaseBody {
  readonly marginBlockStart: number;
  readonly marginBlockEnd: number;
  readonly fontFamily: FontFamily;
  fontWeight: FontWeight;
}

export interface IBaseLabel {
  readonly textTransform: TextTransform;
  readonly marginBlockStart: number;
  readonly marginBlockEnd: number;
  readonly fontFamily: FontFamily;
  fontWeight?: FontWeight;
}

const baseHeadline: IBaseHeadline = {
  marginBlockStart: 0,
  marginBlockEnd: 0,
  fontFamily: defaultTheme.fontFamily['headline'],
  textTransform: 'uppercase',
  fontWeight: defaultTheme.fontWeight['bold'],
};

const baseBody: IBaseBody = {
  marginBlockStart: 0,
  marginBlockEnd: 0,
  fontFamily: defaultTheme.fontFamily['body'],
  fontWeight: defaultTheme.fontWeight['regular'],
};

const baseLabel: IBaseLabel = {
  marginBlockStart: 0,
  marginBlockEnd: 0,
  textTransform: 'uppercase',
  fontFamily: defaultTheme.fontFamily['label'],
};

export type BodyProps = IBaseTypography & IBaseBody;
export type HeadlineProps = IBaseTypography & IBaseHeadline;
export type LabelProps = IBaseTypography & IBaseLabel;
export type TypographyType = {
  readonly [key in TypographyKey]: BodyProps | HeadlineProps | LabelProps;
};
export type TypeScale = keyof TypographyType;
export type Typography = BodyProps | HeadlineProps | LabelProps;

const typography: TypographyType = {
  'headline-0': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(270),
    letterSpacing: defaultTheme.__letterSpacing(-0.02),
    lineHeight: defaultTheme.__lineHeight(0.87),
  },
  'headline-1': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(180),
    letterSpacing: defaultTheme.__letterSpacing(-0.02),
    lineHeight: defaultTheme.__lineHeight(0.87),
  },
  'headline-2': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(120),
    letterSpacing: defaultTheme.__letterSpacing(-0.02),
    lineHeight: defaultTheme.__lineHeight(0.9),
  },
  'headline-3': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(81),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(0.85),
  },
  'headline-4': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(54),
    letterSpacing: defaultTheme.__letterSpacing(-0.005),
    lineHeight: defaultTheme.__lineHeight(0.87),
  },
  'headline-5': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(36),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(0.87),
  },
  'headline-6': {
    ...baseHeadline,
    fontSize: defaultTheme.__fontSize(24),
    letterSpacing: defaultTheme.__letterSpacing(-0.01),
    lineHeight: defaultTheme.__lineHeight(0.87),
  },
  'body-0': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(54),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(1.05),
  },
  'body-1': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(36),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(1.1),
  },
  'body-2': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(24),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(1.2),
  },
  'body-3': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(16),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(1.2),
  },
  'body-4': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(14),
    letterSpacing: defaultTheme.__letterSpacing(0),
    lineHeight: defaultTheme.__lineHeight(1.05),
  },
  'body-5': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(12),
    letterSpacing: defaultTheme.__letterSpacing(0.01),
    lineHeight: defaultTheme.__lineHeight(1.2),
  },
  'body-6': {
    ...baseBody,
    fontSize: defaultTheme.__fontSize(10),
    letterSpacing: defaultTheme.__letterSpacing(0.02),
    lineHeight: defaultTheme.__lineHeight(1.2),
  },
  'label-3': {
    ...baseLabel,
    fontSize: defaultTheme.__fontSize(16),
    letterSpacing: defaultTheme.__letterSpacing(0.02),
    lineHeight: defaultTheme.__lineHeight(1.2),
  },
  'label-4': {
    ...baseLabel,
    fontSize: defaultTheme.__fontSize(12),
    letterSpacing: defaultTheme.__letterSpacing(0.04),
    lineHeight: defaultTheme.__lineHeight(1.2),
  },
  'label-5': {
    ...baseLabel,
    fontSize: defaultTheme.__fontSize(10),
    letterSpacing: defaultTheme.__letterSpacing(0.04),
    lineHeight: defaultTheme.__lineHeight(1.1),
  },
};

export default typography;
