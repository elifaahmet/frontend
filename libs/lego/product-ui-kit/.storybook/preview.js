/** @format */

import React from 'react';
import { addDecorator } from '@storybook/react';
import styled from '@emotion/styled';
import { getProductTheme } from '../src/theme/product-theme';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'emotion-theming';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { generateStorybookParams } from '@tend/shared/design/ui-kit';
import {
  globalWebStyles,
  storybookScrollLock,
} from '@tend/shared/design/ui-kit';

export const parameters = generateStorybookParams({
  includeMobileDevices: true,
  defaultViewport: 'MOBILE',
});
const storyBookProductThemeInstance = getProductTheme();

const StoriesWrapper = styled.div`
  background-color: ${storyBookProductThemeInstance.colorScheme.primary.brand};
  position: fixed;
  display: flex;
  inset: 0;
  overflow-y: auto;
`;

addDecorator(withThemes(ThemeProvider, [storyBookProductThemeInstance]));
addDecorator((Story) => (
  <ThemeProviderEmotion theme={storyBookProductThemeInstance}>
    <StoriesWrapper>
      <Story />
    </StoriesWrapper>
  </ThemeProviderEmotion>
));
