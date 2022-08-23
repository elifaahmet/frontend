/** @format */

const lineHeights = [
  0, // 0
  0.71, // 1
  0.81, // 2 - product
  0.85, // 3
  0.86, // 4 - product
  0.87, // 5
  0.9, // 6
  0.91, // 7 - product
  0.94, // 8
  1, // 9
  1.05, // 10
  1.06, // 11 - product
  1.1, // 12
  1.2, // 13
  1.21, // 14 - product
  1.22, // 15 - product
  1.29, // 16 - product
  1.33, // 17 - product
  1.38, // 18 - product
  1.42, // 19
  1.5, // 20
] as const;

export type LineHeightKey =
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
  | 16
  | 17
  | 18
  | 19
  | 20;
export type LineHeight = typeof lineHeights[number];

const spread = [...lineHeights];
export type LineHeightsType = typeof spread;

export const __lineHeight = (value: LineHeight): LineHeight => value;
export type LineHeightGetterType = typeof __lineHeight;

export default lineHeights;
