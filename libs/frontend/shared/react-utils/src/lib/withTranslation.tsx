/** @format **/
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import * as React from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

export const withTranslation = (Component: React.FC) => (props) => {
  const { country } = props;
  const [language, setLanguage] = React.useState('es-MX');

  React.useEffect(() => {
    if (country === 'MX') {
      setLanguage('es-MX');
    } else {
      setLanguage('en-US');
    }
  }, [country]);

  const i18n = React.useMemo(() => {
    i18next
      .use(initReactI18next)
      .use(Backend)
      .init({
        react: {
          useSuspense: false,
        },
        lng: language,
        interpolation: { escapeValue: false },
        backend: {
          loadPath: `https://tend-language-files.s3.amazonaws.com/mobile/${language.toLowerCase()}.json`,
          fallbackLng: false,
        },
      });

    return i18next;
  }, [language]);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...props} />
    </I18nextProvider>
  );
};
