import i18n from 'i18next';

import { CreateClientReturn, InitPromise, InternalConfig } from '../types';

const browserCreateClient = (config: InternalConfig): CreateClientReturn => {
  const instance = i18n.createInstance(config);
  let initPromise: InitPromise;

  if (!instance.isInitialized) {
    config?.use?.forEach((x) => instance.use(x));
    initPromise = instance.init(config);
  } else {
    initPromise = Promise.resolve(i18n.t);
  }

  return { i18n: instance, initPromise };
};

export default browserCreateClient;
