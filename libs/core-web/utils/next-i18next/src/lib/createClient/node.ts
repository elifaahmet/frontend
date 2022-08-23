import i18n, { Resource } from 'i18next';

import {
  CreateClientReturn,
  I18n,
  InitPromise,
  InternalConfig,
} from '../types';

let globalInstance: I18n;

const nodeCreateClient = (
  config: InternalConfig,
  reInit?: boolean
): CreateClientReturn => {
  let instance: I18n;
  if (!globalInstance || reInit) {
    globalInstance = i18n.createInstance(config);
    instance = globalInstance;
  } else {
    instance = globalInstance.cloneInstance({
      ...config,
    });
  }
  let initPromise: InitPromise;

  if (!instance.isInitialized) {
    initPromise = config
      .resourceFetcherFn(config)
      .then((resources: Resource) => {
        return instance.init({
          ...config,
          resources,
        });
      });
  } else {
    initPromise = Promise.resolve(i18n.t);
  }

  return { i18n: instance, initPromise };
};

export default nodeCreateClient;
