const textTransformations = [
  'capitalize',
  'uppercase',
  'lowercase',
  'none',
] as const;
export type TextTransform = typeof textTransformations[number];
