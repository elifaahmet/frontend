/* tslint:disable no-explicit-any */
import {
  i18n as I18NextClient,
  TFunction as I18NextTFunction,
  InitOptions,
  Resource,
} from 'i18next';
import {
  I18nContext,
  WithTranslation as ReactI18nextWithTranslation,
  Trans,
  useTranslation,
  withTranslation,
} from 'react-i18next';

import { appWithTranslation, i18n } from '../index';

type NextJsI18NConfig = {
  defaultLocale: string;
  locales: string[];
  app?: string;
  allNamespaces?: string[];
};

export type UserConfig = {
  i18n: NextJsI18NConfig;
  localeExtension?: string;
  localePath?: string;
  localeStructure?: string;
  reloadOnPrerender?: boolean;
  serializeConfig?: boolean;
  strictMode?: boolean;
  resourceFetcherFn: (config: InternalConfig) => Promise<Resource>;
  use?: any[];
} & InitOptions;

export type InternalConfig = Omit<UserConfig, 'i18n'> &
  NextJsI18NConfig & {
    errorStackTraceLimit: number;
    fallbackLng: boolean;
    // end temporal backwards compatibility WHITELIST REMOVAL
    preload: string[];
    supportedLngs: string[];
    // temporal backwards compatibility WHITELIST REMOVAL
    whitelist: string[];
  };

export type UseTranslation = typeof useTranslation;
export type AppWithTranslation = typeof appWithTranslation;
export type TFunction = I18NextTFunction;
export type I18n = I18NextClient;
export type WithTranslationHocType = typeof withTranslation;
export type WithTranslation = ReactI18nextWithTranslation;
export type InitPromise = Promise<TFunction>;
export type CreateClientReturn = {
  i18n: I18n;
  initPromise: InitPromise;
};

export type SSRConfig = {
  _nextI18Next: {
    initialI18nStore: any;
  };
  translationDeployId?: string;
  commoni18n?: any;
};

export interface WindowWithI18N extends Window {
  i18NClones: object;
}

export {
  i18n,
  I18nContext,
  appWithTranslation,
  useTranslation,
  Trans,
  withTranslation,
};
