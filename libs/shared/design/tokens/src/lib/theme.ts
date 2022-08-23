/** @format */

import breakpoints from './tokens/breakpoints';
import colorPalette from './tokens/color-palette';
import durations from './tokens/durations';
import fontFamilies from './tokens/font-families';
import fontSizes, { __fontSize } from './tokens/font-sizes';
import fontWeights from './tokens/font-weights';
import gutters, { __gutter } from './tokens/gutters';
import letterSpacings, { __letterSpacing } from './tokens/letter-spacings';
import lineHeights, { __lineHeight } from './tokens/line-heights';
import rules, { __rule } from './tokens/rules';
import spacers, { __spacer } from './tokens/spacers';
import zIndices from './tokens/z-index';

export const theme = {
  breakpoint: {
    ...breakpoints,
  },
  color: {
    ...colorPalette,
  },
  duration: {
    ...durations,
  },
  fontFamily: {
    ...fontFamilies,
  },
  fontSize: [...fontSizes],
  __fontSize,
  fontWeight: {
    ...fontWeights,
  },
  gutter: [...gutters],
  __gutter,
  letterSpacing: [...letterSpacings],
  __letterSpacing,
  lineHeight: [...lineHeights],
  __lineHeight,
  rule: [...rules],
  __rule,
  spacer: [...spacers],
  __spacer,
  zIndex: {
    ...zIndices,
  },
};

export type Theme = typeof theme;
export type ThemeProps = { theme?: Theme };

export default theme;
