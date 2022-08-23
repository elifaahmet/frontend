/** @format **/
import styled from '@emotion/styled';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { B1, Modal, Spacer, SpacerValue } from '@tend/lego/product-ui-kit';

const Text = styled.div`
  text-align: center;
  opacity: 0.75;

  & {
    .underline {
      text-decoration: underline;
    }
  }
`;
interface CustomError {
  flag: boolean;
  message: string;
  code: string;
}
type AskError = (error: CustomError) => void;
type AskRoute = (string: string) => AskError;

enum Redirect {
  LOGIN,
  REACT_ROUTER,
}

const modalStyleForAndroid = {
  top: 16 as SpacerValue,
  bottom: 16 as SpacerValue,
};

const modalStyleForIOS = {
  top: 16 as SpacerValue,
  bottom: 32 as SpacerValue,
  marginBottom: 32 as SpacerValue,
};

export const withError =
  (newRoutes: string[]) => (Component: React.FC) => (props) => {
    const { devicePlatform } = props;
    const [error, setError] = React.useState({
      flag: false,
      message: '',
      code: '',
    });
    const navigate = useNavigate();
    const { t } = useTranslation(['error-message-module']);
    const [route, setRoute] = React.useState('');
    const [routes, setRoutes] = React.useState({
      '/logout/done': Redirect.LOGIN,
    });

    React.useEffect(() => {
      const allRoutes = newRoutes.reduce((acum, route) => {
        acum[route] = Redirect.REACT_ROUTER;
        return acum;
      }, {});
      setRoutes((prevState) => ({ ...prevState, ...allRoutes }));
    }, [newRoutes]);

    const redirectToLogin = (route) => {
      window.location.href = route;
    };

    const onClose = React.useCallback(() => {
      if (route in routes) {
        if (routes[route] === Redirect.LOGIN) {
          redirectToLogin(route);
        } else if (routes[route] === Redirect.REACT_ROUTER) {
          navigate(route);
        }
      }
      setError({
        flag: false,
        message: '',
        code: '',
      });
    }, [route]);

    const getErrorObj = (errorObj: {
      flag: boolean;
      message: string;
      code: string;
    }): void => {
      setError(errorObj);
    };

    const getRoute = (newRoute: string): AskError => {
      setRoute(newRoute);
      return getErrorObj;
    };

    const withOrWithoutRedirection = (
      redirect: boolean
    ): AskRoute | AskError => {
      if (redirect) {
        return getRoute;
      } else {
        return getErrorObj;
      }
    };
    const withRedirection = withOrWithoutRedirection(true) as AskRoute;
    const withoutRedirection = withOrWithoutRedirection(false) as AskError;

    return (
      <>
        <Component
          {...props}
          withOrWithoutRedirection={withOrWithoutRedirection}
          showModalAndRedirect={withRedirection}
          showModalNoRedirection={withoutRedirection}
        />
        <Modal show={error.flag} title={'Error'} onClose={() => onClose()}>
          <Text>
            <Spacer
              {...(devicePlatform === 'android'
                ? modalStyleForAndroid
                : modalStyleForIOS)}
            >
              <B1>
                {error.code === ''
                  ? error.message
                  : t(`error-message-module.code-${error.code}`)}
              </B1>
            </Spacer>
          </Text>
        </Modal>
      </>
    );
  };
