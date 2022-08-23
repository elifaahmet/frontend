/** @format */

const gutters = [45, 60] as const;

export type GutterKey = 0 | 1;
export type Gutter = typeof gutters[number];

const spread = [...gutters];
export type GuttersType = typeof spread;

export const __gutter = (value: Gutter): Gutter => value;
export type GutterGetterType = typeof __gutter;

export default gutters;
