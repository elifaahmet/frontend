/** @format **/
import * as React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';

import {
  withCurrentUser,
  withError,
  withGraphQL,
  withLoadingSpinner,
  withRouter,
  withTheme,
  withTopBar,
  withTranslation,
} from '@tend/frontend/shared/react-utils';
import { compose } from '@tend/frontend/shared/utils';
import { getProductTheme } from '@tend/lego/product-ui-kit';

import { AllActivity, InitiateTransfer, SendMoneyTo } from './pages';

const theme = getProductTheme();
const templateRoute = 'dashboard/move-money/transfer/a/send-money';
const routes = [
  {
    path: '/',
    element: (props) => React.createElement(SendMoneyTo, props),
  },
  {
    path: 'initiate-transfer/:tendId',
    element: (props) => React.createElement(InitiateTransfer, props),
  },
  {
    path: 'all-activity',
    element: (props) => React.createElement(AllActivity, props),
  },
];

function App(props) {
  return useRoutes(
    routes.map((route) => ({ ...route, element: route.element(props) }))
  );
}

export default compose(
  withTheme(theme),
  withGraphQL('service-auth', 'service-transaction'),
  withCurrentUser,
  withRouter(templateRoute),
  // withTopBar('P2P'),
  withTranslation,
  withLoadingSpinner,
  withError(routes.map((route) => route.path))
)(App);
