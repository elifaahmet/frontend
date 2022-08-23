/**@format */

import { defaultTheme } from '@tend/shared/design/tokens';

export const mobileViewports = {
  iPhone12: {
    name: 'iPhone 12, 12 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  iPhone12ProMax: {
    name: 'iPhone 12 Pro Max',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
  iPhone12Mini: {
    name: 'iPhone 12 Mini',
    styles: {
      width: '360px',
      height: '780px',
    },
  },
  iPhoneSE: {
    name: 'iPhone SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone11: {
    name: 'iPhone 11, 11 Pro Max, 11 Xs Max, 11 Xr',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPhoneX: {
    name: 'iPhone X, 11 Pro, 11 X, 11 Xs',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhone8_7_6_Plus: {
    name: 'iPhone 8 Plus, 7 Plus, 6 Plus, 6s Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  iPhone8_7_6: {
    name: 'iPhone 8, 7, 6, 6s',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  galaxyNote5: {
    name: 'Samsung Galaxy Note 5',
    styles: {
      width: '480px',
      height: '853px',
    },
  },
  galaxyS9_8_7: {
    name: 'Samsung Galaxy S9, S9+, S8, S8+, S7, S7Edge',
    styles: {
      width: '360px',
      height: '480px',
    },
  },
  nexus6p_5x: {
    name: 'Nexus 6P, 5X',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  pixel: {
    name: 'Google Pixel, Pixel XL, Pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  pixel2XL: {
    name: 'Google Pixel 2 XL',
    styles: {
      width: '411px',
      height: '823px',
    },
  },
};

export const tabletViewports = {
  iPadPro: {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  iPad: {
    name: 'iPad Third & Fourth Generation, Air 1 & 2, Mini, Mini 2 & 3',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  nexus7: {
    name: 'Nexus 7',
    styles: {
      width: '600px',
      height: '960px',
    },
  },
  nexus9: {
    name: 'Nexus 9',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  nexus10: {
    name: 'Nexus 10',
    styles: {
      width: '800px',
      height: '1280px',
    },
  },
  galaxyTab10: {
    name: 'Samsung Galaxy Tab 10',
    styles: {
      width: '800px',
      height: '1280px',
    },
  },
};

export const tendViewports = {
  DESKTOP: {
    name: 'DESKTOP',
    styles: {
      width: defaultTheme.breakpoint['x-large'] + 'px',
      height: '963px',
    },
  },
  TABLET: {
    name: 'TABLET',
    styles: {
      width: defaultTheme.breakpoint.medium + 'px',
      height: '963px',
    },
  },
  MOBILE: {
    name: 'MOBILE',
    styles: {
      width: defaultTheme.breakpoint.small + 'px',
      height: '963px',
    },
  },
};

export type ViewportType =
  | keyof typeof mobileViewports
  | keyof typeof tabletViewports
  | keyof typeof tendViewports;
