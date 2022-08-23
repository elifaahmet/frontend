/** @format */

import { ColorSchemeConfig } from '../../src/theme/color-scheme';

const appColorConfig: ColorSchemeConfig = {
  primary: {
    brand: 'secondary-green',
    text: 'neutral-white',
    background: 'secondary-green',
    button: 'primary-yellow',
  },
  secondary: {
    brand: 'primary-green',
    text: 'primary-yellow',
    background: 'primary-green',
    button: 'primary-yellow',
  },
  tertiary: {
    brand: 'neutral-white',
    text: 'neutral-black',
    background: 'neutral-white',
    button: 'primary-neon-green',
  },
  state: {
    success: 'primary-neon-green',
    warning: 'primary-yellow',
    error: 'primary-red',
    disabled: 'neutral-light-gray',
    highlight: 'secondary-yellow',
  },
  accent: {
    primary: 'primary-red',
    secondary: 'primary-orange',
    tertiary: 'primary-magenta',
    quaternary: 'primary-yellow',
  },
  neutral: {
    light: 'neutral-white',
    medium: 'neutral-gray',
    dark: 'neutral-black',
  },
  opacity: {
    mediumBlack: 'opacity-black-medium',
    darkBlack: 'opacity-black-dark',
    mediumWhite: 'opacity-white-medium',
  },
  cta: {
    primary: 'primary-magenta',
    secondary: 'neutral-white',
  },
};

export default appColorConfig;
