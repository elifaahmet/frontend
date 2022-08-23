/** @format */

interface IBreakpoints {
  readonly small: number;
  readonly medium: number;
  readonly large: number;
  readonly 'x-large': number;
}

const breakpoints: IBreakpoints = {
  small: 576,
  medium: 736,
  large: 992,
  'x-large': 1392,
};

export type BreakpointScale = keyof IBreakpoints;
export type BreakpointsType = { [key in BreakpointScale]: number };

export default breakpoints;
