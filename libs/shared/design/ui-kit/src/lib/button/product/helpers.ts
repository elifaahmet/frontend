/** @format */

import { ButtonProps } from '../button.types';
import { IPropsWithTheme } from '../../../theme/extended-theme';
import buttonComposite from '../../../composites/base/button';
import {
  appendValuesWithUnits,
  calculateWithUnit,
  interpolateStyles,
} from '../../../utils/transformations';
import { PRIMARY, TERTIARY } from '../../../constants';

export function getBorderedPaddingStyles() {
  const styles = buttonComposite['button-product-standard'];
  return Object.keys(styles).reduce((acc, key) => {
    const isPaddingKey =
      key === 'paddingBlockStart' ||
      key === 'paddingBlockEnd' ||
      key === 'paddingInlineStart' ||
      key === 'paddingInlineEnd';
    if (isPaddingKey) acc[key] = styles[key] - 2;
    else acc[key] = styles[key];
    return acc;
  }, {});
}

export function getBorderedPaddingStylesAsString() {
  const stylesObject = getBorderedPaddingStyles();
  return interpolateStyles(
    appendValuesWithUnits(stylesObject, [
      'fontSize',
      'paddingBlockStart',
      'paddingBlockEnd',
      'paddingInlineStart',
      'paddingInlineEnd',
    ])
  );
}

export function getBorder(props: ButtonProps & IPropsWithTheme) {
  const size = calculateWithUnit(props.theme.__rule(2), 'px', props.theme);
  const color =
    props.variant === PRIMARY || props.variant === TERTIARY
      ? props.theme.colorScheme.neutral.dark
      : props.theme.colorScheme.neutral.light;
  return `border: ${size} solid ${color};`;
}
