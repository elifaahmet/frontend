export interface IDurations {
  readonly instant: number;
  readonly superFast: number;
  readonly fast: number;
  readonly medium: number;
  readonly slow: number;
}

const durations: IDurations = {
  instant: 30,
  superFast: 150,
  fast: 300,
  medium: 450,
  slow: 600,
};

export type DurationScale = keyof IDurations;
export type DurationsType = { [key in DurationScale]: number };

export default durations;
