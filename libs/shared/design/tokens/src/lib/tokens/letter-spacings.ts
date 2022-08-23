/** @format */

const letterSpacings = [
  0, // 0
  -0.005, // 1
  -0.01, // 2
  -0.02, // 3
  -0.05, // 4
  -0.12, // 5 - product only
  -0.14, // 6 - product only
  -0.16, // 7 - product only
  -0.18, // 8 - product only
  -0.53, // 9 - product only
  0.00667, // 10
  0.01, // 11
  0.02, // 12
  0.04, // 13
  0.14, // 14 - product only
  0.16, // 15 - product only
] as const;

export type LetterSpacingKey =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
export type LetterSpacing = typeof letterSpacings[number];

const spread = [...letterSpacings];
export type LetterSpacingsType = typeof spread;

export const __letterSpacing = (value: LetterSpacing): LetterSpacing => value;
export type LetterSpacingGetterType = typeof __letterSpacing;

export default letterSpacings;
