/** @format */

import React from 'react';
import { addDecorator } from '@storybook/react';
import { getDefaultExtendedTheme } from '../../ui-kit/src/theme/extended-theme';
import { ThemeProvider } from 'emotion-theming';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { generateStorybookParams } from './themes/parameters';
import appColorConfig from './themes/appColorConfig';

import '../src/styles/global';
import './themes/assets/styles/theme-styling';

import { UIKitContext } from '../src/utils/transformations';

export const parameters = generateStorybookParams();

const appDefaultExtendedTheme = Object.assign(
  getDefaultExtendedTheme(UIKitContext.product, appColorConfig),
  { name: 'app' }
);
const marketingDefaultExtendedTheme = Object.assign(
  getDefaultExtendedTheme(UIKitContext.marketing),
  { name: 'marketing' }
);

let selectedTheme = appDefaultExtendedTheme;
export const providerFn = ({ theme, children }) => {
  selectedTheme = theme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// NOTE: let's @emotion/styled react components imported in storybook use props.theme
addDecorator(
  withThemes(null, [marketingDefaultExtendedTheme, appDefaultExtendedTheme], {
    providerFn,
  })
);
// NOTE: allows props.theme to be used in Storybook decorators but also as a hook inside storybook rendered components
addDecorator((Story) => (
  <ThemeProviderEmotion theme={selectedTheme}>
    <Story />
  </ThemeProviderEmotion>
));
