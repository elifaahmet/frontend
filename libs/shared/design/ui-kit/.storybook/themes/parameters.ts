/** @format */

import {
  tendViewports,
  mobileViewports,
  tabletViewports,
  ViewportType,
} from './viewports';

interface StorybookParamOptions {
  includeMobileDevices?: boolean;
  includeTablets?: boolean;
  defaultViewport?: ViewportType;
}

export function generateStorybookParams(options?: StorybookParamOptions) {
  const params = {
    controls: { expanded: true },
    viewport: {
      viewports: {},
    },
  };

  Object.assign(params.viewport.viewports, tendViewports);

  if (options) {
    const { includeMobileDevices, includeTablets, defaultViewport } = options;

    if (includeMobileDevices)
      Object.assign(params.viewport.viewports, mobileViewports);
    if (includeTablets)
      Object.assign(params.viewport.viewports, tabletViewports);
    if (defaultViewport) Object.assign(params.viewport, { defaultViewport });
  }

  return params;
}
