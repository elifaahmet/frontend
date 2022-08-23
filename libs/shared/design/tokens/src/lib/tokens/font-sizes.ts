/** @format */

const fontSizes = [
  0, // 0
  10, // 1
  12, // 2
  14, // 3
  16, // 4
  18, // 5
  21, // 6 - product only
  24, // 7
  30, // 8
  36, // 9
  48, // 10 - product only
  53, // 11 - product only
  54, // 12
  81, // 13
  120, // 14
  180, // 15
  270, // 16
] as const;

export type FontSizeKey =
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
  | 15
  | 16;
export type FontSize = typeof fontSizes[number];

const spread = [...fontSizes];
export type FontSizesType = typeof spread;

export const __fontSize = (value: FontSize): FontSize => value;
export type FontSizeGetterType = typeof __fontSize;

export default fontSizes;
