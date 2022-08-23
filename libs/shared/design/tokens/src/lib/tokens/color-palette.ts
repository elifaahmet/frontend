/** @format */

interface IColorPalette {
  readonly 'neutral-white': string;
  readonly 'neutral-off-white': string;
  readonly 'neutral-light-gray': string;
  readonly 'neutral-dark-gray': string;
  readonly 'neutral-darker-gray': string;
  readonly 'neutral-gray': string;
  readonly 'neutral-black': string;

  readonly 'opacity-black-medium': string;
  readonly 'opacity-black-dark': string;
  readonly 'opacity-white-medium': string;

  readonly 'primary-yellow': string;
  readonly 'primary-orange': string;
  readonly 'primary-magenta': string;
  readonly 'primary-red': string;
  readonly 'primary-green': string;
  readonly 'primary-neon-green': string;

  readonly 'secondary-yellow': string;
  readonly 'secondary-orange': string;
  readonly 'secondary-magenta': string;
  readonly 'secondary-red': string;
  readonly 'secondary-green': string;
  readonly 'secondary-neon-green': string;
}

const colorPalette: IColorPalette = {
  'neutral-white': '#FFFFFF',
  'neutral-off-white': '#F6F6F1',
  'neutral-light-gray': '#E8E8E3',
  'neutral-gray': '#717171',
  'neutral-dark-gray': '#797774',
  'neutral-darker-gray': '#2F3632',
  'neutral-black': '#000000',

  'opacity-black-medium': 'rgba(0, 0, 0, 0.4)',
  'opacity-black-dark': 'rgba(0, 0, 0, 0.7)',
  'opacity-white-medium': 'rgba(255, 255, 255, 0.4)',

  'primary-yellow': '#FFC73D',
  'primary-orange': '#F79234',
  'primary-magenta': '#FA5CAE',
  'primary-red': '#FF5554',
  'primary-green': '#173D38',
  'primary-neon-green': '#BDFC4C',

  'secondary-yellow': '#FFF1CE',
  'secondary-orange': '#FDE4CC',
  'secondary-magenta': '#FED6EB',
  'secondary-red': '#FFD5D4',
  'secondary-green': '#002923',
  'secondary-neon-green': '#E4EDAE',
};

export type ColorName = keyof IColorPalette;
export type ColorsType = { [key in ColorName]: string };

export default colorPalette;
