/** @format */
import {
  ColorSchemeConfig,
  UIKitContext,
  UIKitTheme,
  getDefaultExtendedTheme,
} from '@tend/shared/design/ui-kit';

export const colorSchemeConfig: ColorSchemeConfig = {
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

export const THEME_NAME = 'product';

export function getProductTheme() {
  const theme = getDefaultExtendedTheme(
    UIKitContext.product,
    colorSchemeConfig
  );

  theme.name = THEME_NAME;
  theme.offset = theme.__spacer(16);
  /**@tech-debt: check with Jeff why we're loosing sync with token definitions here for zIndex */
  theme.zIndex.modal = 1000;
  const castedTheme = theme as Readonly<UIKitTheme>;
  return castedTheme;
}

const productTheme: UIKitTheme = getProductTheme();
export default productTheme;
