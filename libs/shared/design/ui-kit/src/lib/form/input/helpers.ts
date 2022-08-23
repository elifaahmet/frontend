/** @format */

import { ChangeEvent } from 'react';
import { ExtendedTheme, IPropsWithTheme } from '../../../theme/extended-theme';
import { InputCompositeKey } from '../../../composites/base/input';
import {
  appendValuesWithUnits,
  interpolateStyles,
  UIKitContext,
} from '../../../utils/transformations';
import {
  AdornmentProps,
  HintValidation,
  StyledInputProps,
} from './input.types';
import { PRIMARY, SECONDARY, TERTIARY } from '../../../constants';
import {
  ONE_UPPER_CASE,
  ONE_LOWER_CASE,
  ONE_NUMBER,
  ONE_SPECIAL_CHARACTER,
  MIN_EIGHT_NON_SPACE_CHARACTERS,
} from '../../../utils/regexes';

/**
 * General styling related helpers.
 */

export function themeStylesToCssString(
  theme: ExtendedTheme,
  key: InputCompositeKey
) {
  return interpolateStyles(
    appendValuesWithUnits(theme.base.input[key], [
      'fontSize',
      'borderBlockStartWidth',
      'borderInlineStartWidth',
      'borderInlineEndWidth',
      'borderBlockEndWidth',
      'paddingBlockStart',
      'paddingBlockEnd',
      'paddingInlineStart',
    ])
  );
}

export function getInputWidth(props: StyledInputProps & IPropsWithTheme) {
  if (props.variant === 'single-digit') return 44;
  return props.type === 'password' ? 301 : 343;
}

export function getDefaultTextColor(props) {
  return props.theme.kitContext === UIKitContext.marketing
    ? props.theme.color['neutral-black']
    : props.theme.color['neutral-white'];
}

export function getBorderColor(
  props:
    | (StyledInputProps & IPropsWithTheme)
    | (AdornmentProps & IPropsWithTheme)
) {
  if (props.error) return props.theme.color['primary-red'];
  if (props.theme.kitContext !== UIKitContext.marketing && props.validated) {
    return props.theme.color['primary-neon-green'];
  }

  switch (props.border) {
    case SECONDARY:
      return props.theme.color['primary-yellow'];
    case PRIMARY:
    default:
      return props.theme.kitContext === UIKitContext.marketing
        ? props.theme.color['neutral-black']
        : props.theme.color['primary-yellow'];
  }
}

export function getHintColor(props) {
  return props.theme.kitContext === UIKitContext.marketing
    ? props.theme.color['neutral-black']
    : props.theme.color['primary-yellow'];
}

export function getHintBackgroundColor(props) {
  if (props.hintBackground === 'transparent') return 'transparent';
  return props.theme.kitContext === UIKitContext.marketing
    ? props.theme.color['neutral-off-white']
    : props.theme.color['primary-green'];
}

export function getCursorColor(props: StyledInputProps & IPropsWithTheme) {
  switch (props.cursor) {
    case SECONDARY:
      return props.theme.color['primary-magenta'];
    case TERTIARY:
      return props.theme.color['primary-orange'];
    case PRIMARY:
    default:
      return props.theme.kitContext === UIKitContext.marketing
        ? props.theme.color['neutral-black']
        : props.theme.color['neutral-white'];
  }
}

/**
 * Validation helpers
 */

export function validationFunctionFromRegEx(regEx: RegExp) {
  return (e: ChangeEvent<HTMLInputElement>) =>
    e.target?.value ? !!`${e.target.value}`.match(regEx) : false;
}

export function generateHintValidation(
  hint: string,
  regEx: RegExp
): HintValidation {
  return {
    validation: validationFunctionFromRegEx(regEx),
    hint,
  };
}

export const passwordValidations = [
  { hint: 'One Upper Case', validation: ONE_UPPER_CASE },
  { hint: 'One Lower Case', validation: ONE_LOWER_CASE },
  { hint: 'One Number', validation: ONE_NUMBER },
  { hint: 'One Special Character', validation: ONE_SPECIAL_CHARACTER },
  { hint: '8 Characters Long', validation: MIN_EIGHT_NON_SPACE_CHARACTERS },
];
