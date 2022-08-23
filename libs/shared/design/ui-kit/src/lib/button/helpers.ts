/** @format */

import { IPropsWithTheme } from '../../theme/extended-theme';
import { ExtendedTheme } from '../../theme/extended-theme';
import { ButtonKey } from '../../composites/base/button';
import {
  appendValuesWithUnits,
  interpolateStyles,
  UIKitContext,
} from '../../utils/transformations';
import { AnchorButtonProps, ButtonProps } from './button.types';
import { DEFAULT, PRIMARY, SECONDARY, TERTIARY } from '../../constants';

export function themeStylesToCssString(theme: ExtendedTheme, key: ButtonKey) {
  return interpolateStyles(
    appendValuesWithUnits(theme.base.button[key], [
      'fontSize',
      'paddingBlockStart',
      'paddingBlockEnd',
      'paddingInlineStart',
      'paddingInlineEnd',
    ])
  );
}

export function getBackgroundColor(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
): string {
  const { colorScheme } = props.theme;

  if (props.theme.kitContext === UIKitContext.marketing) {
    const { fill } = props;
    switch (props.variant) {
      case TERTIARY:
        return 'inherit';
      case SECONDARY:
        return colorScheme.neutral.dark;
      case PRIMARY:
      default:
        return fill === DEFAULT
          ? colorScheme.primary.button
          : colorScheme.neutral.dark;
    }
  }

  switch (props.variant) {
    case TERTIARY:
      return colorScheme.tertiary.button;
    case SECONDARY:
      return 'inherit';
    case PRIMARY:
    default:
      // eslint-disable-next-line no-case-declarations
      const color = props.overrideColor
        ? props.theme.color[props.overrideColor]
        : colorScheme.primary.button;
      return props.disabled
        ? /**@tech-debt: mathematically blend button color with background hex values */
          `${color}80`
        : color;
  }
}

export function getTextColor(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
): string {
  if (props.theme.kitContext === UIKitContext.marketing) {
    switch (props.variant) {
      case TERTIARY:
        return props.theme.colorScheme.neutral.dark;
      case SECONDARY:
        return props.theme.colorScheme.neutral.light;
      case PRIMARY:
      default:
        return props.fill === DEFAULT
          ? props.theme.colorScheme.neutral.dark
          : props.theme.colorScheme.neutral.light;
    }
  }

  if (props.disabled) return props.theme.colorScheme.primary.background;

  switch (props.variant) {
    case TERTIARY:
      return props.theme.colorScheme.neutral.dark;
    case SECONDARY:
      return props.theme.colorScheme.neutral.light;
    case PRIMARY:
    default:
      return props.theme.colorScheme.neutral.dark;
  }
}
