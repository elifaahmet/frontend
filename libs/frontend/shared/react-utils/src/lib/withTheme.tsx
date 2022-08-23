/** @format **/
import { ThemeProvider } from '@emotion/react';
import * as React from 'react';

export const withTheme = (theme) => (Component: React.FC) => (props) => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);
