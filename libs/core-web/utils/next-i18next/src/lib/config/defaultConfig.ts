const DEFAULT_LOCALE = 'en-US';
const LOCALES = ['en-US'];
const DEFAULT_NAMESPACE = 'common';
const LOCALE_PATH = './public/static/locales';
const LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
const LOCALE_EXTENSION = 'json';

export const defaultConfig = {
  defaultNS: DEFAULT_NAMESPACE,
  errorStackTraceLimit: 0,
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
  },
  get initImmediate(): boolean {
    // eslint-disable-next-line
    return (process as any).browser && typeof window !== 'undefined';
  },
  interpolation: {
    escapeValue: false,
    format: (value: string, format: string): string =>
      format === 'uppercase' ? value.toUpperCase() : value,
    formatSeparator: ',',
  },
  load: 'currentOnly',
  localeExtension: LOCALE_EXTENSION,
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  react: {
    useSuspense: true,
  },
  reloadOnPrerender: false,
  serializeConfig: true,
  strictMode: true,
  use: [],
};
