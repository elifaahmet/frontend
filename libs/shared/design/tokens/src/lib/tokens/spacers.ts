/** @format */

const spacers = [
  2, // 0
  4, // 1
  6, // 2
  8, // 3
  9, // 4
  12, // 5
  13, // 6
  16, // 7
  20, // 8
  24, // 9
  28, // 10
  32, // 11
] as const;

export type SpacerKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type Spacer = typeof spacers[number];

const spread = [...spacers];
export type SpacersType = typeof spread;

export const __spacer = (value: Spacer): Spacer => value;
export type SpacerGetterType = typeof __spacer;

export default spacers;
