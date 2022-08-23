/** @format */

import {
  FontSize,
  LetterSpacing,
  LineHeight,
  FontWeight,
  FontFamily,
  Rule,
  Spacer,
  defaultTheme,
} from '@tend/shared/design/tokens';

const inputCompositeKeys = [
  'default',
  'large',
  'single-digit',
  'email-invite',
  'boxed',
  'no-border',
] as const;
export type InputCompositeKey = typeof inputCompositeKeys[number];

export interface InputCompositeProps {
  readonly fontFamily: FontFamily;
  readonly fontSize: FontSize;
  readonly fontWeight: FontWeight;
  readonly letterSpacing: LetterSpacing;
  readonly lineHeight: LineHeight;
}

export interface BaseInputBorderProps {
  readonly borderStyle: string;
  readonly borderBlockStartWidth: Rule | 0;
  readonly borderInlineStartWidth: Rule | 0;
  readonly borderInlineEndWidth: Rule | 0;
}

export interface InputBorderProps extends BaseInputBorderProps {
  readonly borderBlockEndWidth: Rule | 0;
}

export interface BaseInputPaddingProps {
  readonly paddingBlockStart: Spacer | 0;
  readonly paddingInlineStart: Spacer | 0;
}

export interface InputPaddingProps extends BaseInputPaddingProps {
  readonly paddingBlockEnd: Spacer | 0;
}

export type InputCompositeType = {
  [key in InputCompositeKey]: InputCompositeProps &
    InputBorderProps &
    InputPaddingProps;
};

const baseDefaultInputTypography: InputCompositeProps = {
  fontFamily: defaultTheme.fontFamily['body'],
  fontSize: defaultTheme.__fontSize(14),
  fontWeight: defaultTheme.fontWeight['regular'],
  letterSpacing: defaultTheme.__letterSpacing(-0.01),
  lineHeight: defaultTheme.__lineHeight(1.2),
};

const baseLargeInputTypography: InputCompositeProps = {
  fontFamily: defaultTheme.fontFamily['body'],
  fontSize: defaultTheme.__fontSize(30),
  fontWeight: defaultTheme.fontWeight['bold'],
  letterSpacing: defaultTheme.__letterSpacing(0.00667),
  lineHeight: defaultTheme.__lineHeight(1),
};

const baseDefaultInputBorder: BaseInputBorderProps = {
  borderStyle: 'solid',
  borderBlockStartWidth: 0,
  borderInlineStartWidth: 0,
  borderInlineEndWidth: 0,
};

const baseDefaultInputPadding: BaseInputPaddingProps = {
  paddingBlockStart: 0,
  paddingInlineStart: 0,
};

const input: InputCompositeType = {
  default: {
    ...baseDefaultInputTypography,
    ...baseDefaultInputBorder,
    ...baseDefaultInputPadding,
    borderBlockEndWidth: defaultTheme.__rule(2),
    paddingBlockEnd: defaultTheme.__spacer(8),
  },
  large: {
    ...baseLargeInputTypography,
    ...baseDefaultInputBorder,
    ...baseDefaultInputPadding,
    borderBlockEndWidth: defaultTheme.__rule(2),
    paddingBlockEnd: defaultTheme.__spacer(8),
  },
  'single-digit': {
    ...baseLargeInputTypography,
    ...baseDefaultInputBorder,
    ...baseDefaultInputPadding,
    borderBlockEndWidth: defaultTheme.__rule(2),
    paddingBlockEnd: 0,
  },
  'email-invite': {
    ...baseDefaultInputTypography,
    ...baseDefaultInputBorder,
    ...baseDefaultInputPadding,
    borderBlockEndWidth: defaultTheme.__rule(2),
    paddingBlockEnd: defaultTheme.__spacer(8),
  },
  boxed: {
    ...baseDefaultInputTypography,
    borderStyle: 'solid',
    borderBlockStartWidth: defaultTheme.__rule(2),
    borderBlockEndWidth: defaultTheme.__rule(2),
    borderInlineStartWidth: defaultTheme.__rule(2),
    borderInlineEndWidth: defaultTheme.__rule(2),
    paddingBlockEnd: defaultTheme.__spacer(13),
    paddingBlockStart: defaultTheme.__spacer(13),
    paddingInlineStart: defaultTheme.__spacer(13),
  },
  'no-border': {
    ...baseDefaultInputTypography,
    ...baseDefaultInputBorder,
    ...baseDefaultInputPadding,
    borderBlockEndWidth: 0,
    paddingBlockEnd: defaultTheme.__spacer(8),
  },
};

export default input;
