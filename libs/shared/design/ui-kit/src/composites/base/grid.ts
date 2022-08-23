/** @format */

const gridItemKeys = [
  'span-12',
  'span-8',
  'span-6',
  'span-4',
  'span-3',
  'span-2',
  'span-1',
] as const;
export type GridItemSpanKey = typeof gridItemKeys[number];

export interface IGridItemSpan {
  readonly gridColumnEnd: string;
}

export type GridItemSpanType = {
  readonly [key in GridItemSpanKey]: IGridItemSpan;
};

const gridItemSpan: GridItemSpanType = {
  'span-12': {
    gridColumnEnd: 'span 12',
  },
  'span-8': {
    gridColumnEnd: 'span 8',
  },
  'span-6': {
    gridColumnEnd: 'span 6',
  },
  'span-4': {
    gridColumnEnd: 'span 4',
  },
  'span-3': {
    gridColumnEnd: 'span 3',
  },
  'span-2': {
    gridColumnEnd: 'span 2',
  },
  'span-1': {
    gridColumnEnd: 'span 1',
  },
};

export default gridItemSpan;
