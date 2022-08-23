/**@format */

import { RadioButtonProps } from './radio-button';
import { IPropsWithTheme } from '../../../theme/extended-theme';
import { UIKitContext, calculateWithUnit } from '@tend/shared/design/ui-kit';

export function getMainColor(
  props: RadioButtonProps & IPropsWithTheme
): string {
  const { selectedColor } = props;
  const { brand: primaryBrandColor } = props.theme.colorScheme.primary;
  const { brand: secondaryBrandColor } = props.theme.colorScheme.secondary;
  const { color: colorPalette } = props.theme;

  if (
    selectedColor &&
    colorPalette[selectedColor] !== primaryBrandColor &&
    colorPalette[selectedColor] !== secondaryBrandColor
  ) {
    return colorPalette[selectedColor];
  }

  return colorPalette[selectedColor];
  // return props.theme.colorScheme.neutral.dark;
}

export function getWidth(props: RadioButtonProps & IPropsWithTheme): string {
  switch (props.theme.kitContext) {
    case UIKitContext.product:
      return props.labels.length === 2 ? '50%' : '33.3%';
    case UIKitContext.marketing:
    default:
      return calculateWithUnit(
        props.labels.length === 2 ? 172 : 116,
        'rem',
        props.theme
      );
  }
}

export function getSelectedColor(
  props: RadioButtonProps & IPropsWithTheme
): string {
  switch (props.theme.kitContext) {
    case UIKitContext.product:
      return props.theme.colorScheme.primary.background;
    case UIKitContext.marketing:
    default:
      return props.theme.colorScheme.neutral.dark;
  }
}
