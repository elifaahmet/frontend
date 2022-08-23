import { defaultTheme, ColorName } from '@tend/shared/design/tokens';

export interface ColorSchemeConfig {
  primary: {
    brand: ColorName;
    text: ColorName;
    background: ColorName;
    button: ColorName;
  };
  secondary: {
    brand: ColorName;
    text: ColorName;
    background: ColorName;
    button: ColorName;
  };
  tertiary: {
    brand: ColorName;
    text: ColorName;
    background: ColorName;
    button: ColorName;
  };
  state: {
    success: ColorName;
    warning: ColorName;
    error: ColorName;
    disabled: ColorName;
    highlight: ColorName;
  };
  accent: {
    primary: ColorName;
    secondary: ColorName;
    tertiary: ColorName;
    quaternary: ColorName;
  };
  neutral: {
    light: ColorName;
    medium: ColorName;
    dark: ColorName;
  },
  opacity: {
    mediumBlack: ColorName;
    darkBlack: ColorName;
    mediumWhite: ColorName;
  },
  cta: {
    primary: ColorName;
    secondary: ColorName;
  }
}

export interface ColorScheme {
  primary: {
    brand: string;
    text: string;
    background: string;
    button: string;
  };
  secondary: {
    brand: string;
    text: string;
    background: string;
    button: string;
  };
  tertiary: {
    brand: string;
    text: string;
    background: string;
    button: string;
  };
  state: {
    success: string;
    warning: string;
    error: string;
    disabled: string;
    highlight: string;
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  opacity: {
    mediumBlack: string;
    darkBlack: string;
    mediumWhite: string;
  };
  neutral: {
    light: string;
    medium: string;
    dark: string;
  }
  cta: {
    primary: string;
    secondary: string;
  }
}

function getSchemeColor(key: ColorName): string {
  return defaultTheme.color[key];
}

export function generateColorScheme(config: ColorSchemeConfig): Readonly<ColorScheme> {
  return {
    primary: {
      brand: getSchemeColor(config.primary.brand),
      text: getSchemeColor(config.primary.text),
      background: getSchemeColor(config.primary.background),
      button: getSchemeColor(config.primary.button),
    },
    secondary: {
      brand: getSchemeColor(config.secondary.brand),
      text: getSchemeColor(config.secondary.text),
      background: getSchemeColor(config.secondary.background),
      button: getSchemeColor(config.secondary.button),
    },
    tertiary: {
      brand: getSchemeColor(config.tertiary.brand),
      text: getSchemeColor(config.tertiary.text),
      background: getSchemeColor(config.tertiary.background),
      button: getSchemeColor(config.tertiary.button),
    },
    state: {
      success: getSchemeColor(config.state.success),
      warning: getSchemeColor(config.state.warning),
      error: getSchemeColor(config.state.error),
      disabled: getSchemeColor(config.state.disabled),
      highlight: getSchemeColor(config.state.highlight),
    },
    accent: {
      primary: getSchemeColor(config.accent.primary),
      secondary: getSchemeColor(config.accent.secondary),
      tertiary: getSchemeColor(config.accent.tertiary),
      quaternary: getSchemeColor(config.accent.quaternary),
    },
    neutral: {
      light: getSchemeColor(config.neutral.light),
      medium: getSchemeColor(config.neutral.medium),
      dark: getSchemeColor(config.neutral.dark),
    },
    opacity: {
      mediumBlack: getSchemeColor(config.opacity.mediumBlack),
      darkBlack: getSchemeColor(config.opacity.darkBlack),
      mediumWhite: getSchemeColor(config.opacity.mediumWhite),
    },
    cta: {
      primary: getSchemeColor(config.cta.primary),
      secondary: getSchemeColor(config.cta.secondary),
    }
  }
}

export const colorSchemeConfig: ColorSchemeConfig = {
  primary: {
    brand: 'neutral-off-white',
    text: 'neutral-black',
    background: 'neutral-off-white',
    button: 'primary-magenta',
  },
  secondary: {
    brand: 'neutral-white',
    text: 'neutral-black',
    background: 'neutral-white',
    button: 'neutral-white',
  },
  tertiary: {
    brand: 'primary-green',
    text: 'neutral-white',
    background: 'primary-green',
    button: 'neutral-white',
  },
  state: {
    success: 'primary-neon-green',
    warning: 'primary-yellow',
    error: 'primary-red',
    disabled: 'neutral-dark-gray',
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
    dark: 'neutral-black'
  },
  opacity: {
    mediumBlack: 'opacity-black-medium',
    darkBlack: 'opacity-black-dark',
    mediumWhite: 'opacity-white-medium',
  },
  cta: {
    primary: 'primary-magenta',
    secondary: 'neutral-white'
  }
};

const colorScheme = generateColorScheme(colorSchemeConfig);

export default colorScheme;
