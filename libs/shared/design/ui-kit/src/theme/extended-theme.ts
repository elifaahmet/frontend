/** @format */

import { defaultTheme, Theme as DefaultTheme, } from '@tend/shared/design/tokens';
import {
  baseComposites,
  marketingComposites,
  productComposites,
  BaseButtonsType,
  BaseInputType,
  BaseGridItemSpanType,
  MarketingTypographyType,
  ProductTypographyType,
} from '../composites';
import colorScheme, {
  ColorScheme,
  ColorSchemeConfig,
  generateColorScheme,
  colorSchemeConfig,
} from './color-scheme';
import { UIKitContext } from '../utils/transformations';

export interface ExtendedTheme extends DefaultTheme {
  kitContext: UIKitContext;
  name: string;
  colorScheme: ColorScheme;
  colorSchemeConfig: ColorSchemeConfig;
  offset: number;
  base: {
    button: BaseButtonsType;
    input: BaseInputType;
    gridItemSpan: BaseGridItemSpanType;
  },
  marketing: {
    typography: MarketingTypographyType;
  },
  product: {
    typography: ProductTypographyType;
  }
}

export type ExtendedThemeType = ExtendedTheme;

export function getDefaultExtendedTheme(
  kitContext: UIKitContext,
  colorConfig?: ColorSchemeConfig
) {
  return {
    kitContext: kitContext,
    name: 'default',
    ...defaultTheme,
    colorScheme: colorConfig ? generateColorScheme(colorConfig) : colorScheme,
    colorSchemeConfig: colorConfig || colorSchemeConfig,
    offset: 0,
    base: {
      button: baseComposites.button,
      input: baseComposites.input,
      gridItemSpan: baseComposites.gridItemSpan,
    },
    marketing: {
      typography: marketingComposites.typography,
    },
    product: {
      typography: productComposites.typography,
    },
  };
}

const defaultExtendedTheme: ExtendedTheme = getDefaultExtendedTheme(UIKitContext.marketing)
export default defaultExtendedTheme;

export interface IPropsWithTheme {
  theme: ExtendedTheme;
}
