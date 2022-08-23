/** @format */
import {
  ProductTypographyKey as TypographyKey,
  UIKitContext,
  UIKitTheme,
  appendValuesWithUnits,
  interpolateStyles,
} from '@tend/shared/design/ui-kit';

export function typographicStylesToCssString(
  theme: UIKitTheme,
  key: TypographyKey
) {
  return interpolateStyles(
    appendValuesWithUnits(
      theme.product.typography[key],
      ['fontSize'],
      UIKitContext.product
    )
  );
}
