/** @format */

import { AnchorButtonProps, ButtonProps } from '../button.types';
import { IPropsWithTheme } from '../../../theme/extended-theme';
import {
  DEFAULT,
  INVERTED,
  PRIMARY,
  SECONDARY,
  TERTIARY,
} from '../../../constants';
import {
  appendValuesWithUnits,
  calculateWithUnit,
  interpolateStyles,
} from '../../../utils/transformations';
import buttonComposite from '../../../composites/base/button';
import { pick } from '../../../utils/object-helpers';

export function getBackgroundColorHover(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
): string {
  const { colorScheme } = props.theme;
  const { fill } = props;

  switch (props.variant) {
    case TERTIARY:
      return 'inherit';
    case SECONDARY:
      return colorScheme.neutral.light;
    case PRIMARY:
    default:
      return fill === DEFAULT ? colorScheme.neutral.dark : 'inherit';
  }
}

export function getBorderHover(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
) {
  const size = calculateWithUnit(props.theme.__rule(2), 'rem', props.theme);
  const color = props.theme.colorScheme.neutral.dark;
  return `border: ${size} solid ${color};`;
}

export function getTextColorHover(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
): string {
  switch (props.variant) {
    case SECONDARY:
      return props.theme.colorScheme.neutral.dark;
    case PRIMARY:
    case TERTIARY:
    default:
      return props.fill === INVERTED
        ? props.theme.colorScheme.neutral.dark
        : props.theme.colorScheme.neutral.light;
  }
}

export function getInvertedPaddingHoverStylesOverride(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
) {
  const key = `button-${props.size || 'medium'}`;
  const baseCompositeStyles = buttonComposite[key];
  const selectedStyles = pick(baseCompositeStyles, [
    'paddingBlockStart',
    'paddingBlockEnd',
    'paddingInlineStart',
    'paddingInlineEnd',
  ]);
  return Object.keys(selectedStyles).reduce((acc, key) => {
    acc[key] = selectedStyles[key] - 2;
    return acc;
  }, {});
}

export function getInvertedPaddingHoverStylesOverrideAsString(
  props: (ButtonProps & IPropsWithTheme) | (AnchorButtonProps & IPropsWithTheme)
) {
  const stylesObject = getInvertedPaddingHoverStylesOverride(props);
  return interpolateStyles(
    appendValuesWithUnits(stylesObject, [
      'paddingBlockStart',
      'paddingBlockEnd',
      'paddingInlineStart',
      'paddingInlineEnd',
    ])
  );
}
