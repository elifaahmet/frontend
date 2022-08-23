/** @format */
import * as React from 'react';

import {
  ApolloClient,
  ApolloQueryResult,
  DocumentNode,
  InMemoryCache,
  NormalizedCacheObject,
  TypedDocumentNode,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { environment } from '@tend/frontend/shared/environments';
import {
  compose,
  kebabCaseToSnakeCase,
  readFromLocalStorage,
} from '@tend/frontend/shared/utils';

import * as services from './services';

const serviceNames = Object.keys(services);

interface IGraphQLClients {
  readonly [key: string]: ApolloClient<NormalizedCacheObject>;
}

type RequestType = 'queries' | 'mutations';
type ServiceNameType = typeof serviceNames[number];

const GraphQLContext = React.createContext(null);
const httpLink = (uri) => createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  const node = document.getElementById('mf-read-value') as HTMLInputElement;
  const token = node.value;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const withApolloClientCreateMutation = (
  apolloClient: ApolloClient<NormalizedCacheObject>
) => (mutation: DocumentNode | TypedDocumentNode) => (variables) =>
  apolloClient.mutate({
    mutation,
    variables,
  });
const withApolloClientCreateQuery = (
  apolloClient: ApolloClient<NormalizedCacheObject>
) => (query: DocumentNode | TypedDocumentNode) => (
  variables = null
): Promise<ApolloQueryResult<{ readonly [p: string]: any }>> =>
  variables
    ? apolloClient.query({
        query,
        variables,
      })
    : apolloClient.query({ query });

const createFunctionPerKeyInObject = (createFn) => (objectWithQueries) => {
  return Object.keys(objectWithQueries).reduce((objFns, key) => {
    return { ...objFns, [key]: createFn(objectWithQueries[key]) };
  }, {});
};

const withServiceNameGetRequestType = (reqType: RequestType) => (
  serviceName: ServiceNameType
) =>
  // eslint-disable-next-line import/namespace
  (createQuery) =>
    serviceName in services &&
    // eslint-disable-next-line import/namespace
    reqType in services[serviceName] &&
    // eslint-disable-next-line import/namespace
    createFunctionPerKeyInObject(createQuery)(services[serviceName][reqType]);

const withServiceNameGetQueries = withServiceNameGetRequestType('queries');
const withServiceNameGetMutations = withServiceNameGetRequestType('mutations');

function createGraphqlClients(
  serviceNames: readonly ServiceNameType[]
): IGraphQLClients {
  return serviceNames.reduce((endpointObj, serviceName) => {
    const snakeCaseServiceName = kebabCaseToSnakeCase(serviceName);
    return {
      ...endpointObj,
      [snakeCaseServiceName]: new ApolloClient({
        link: authLink.concat(
          httpLink(`${environment.graphQlUrl}/${serviceName}/graphql`)
        ),
        cache: new InMemoryCache(),
      }),
    };
  }, {});
}

const getCreateQueryFnAndPredefinedQueries = (serviceName: ServiceNameType) =>
  compose(
    ([createQuery, getPredefinedQueries]) => [
      createQuery,
      getPredefinedQueries(createQuery),
    ],
    (apolloClients: IGraphQLClients) => [
      withApolloClientCreateQuery(apolloClients[serviceName]),
      withServiceNameGetQueries(serviceName),
    ]
  );
const getCreateMutationFnAndPredefinedMutations = (
  serviceName: ServiceNameType
) =>
  compose(
    ([createMutation, getPredefinedMutations]) => [
      createMutation,
      getPredefinedMutations(createMutation),
    ],
    (apolloClients: IGraphQLClients) => [
      withApolloClientCreateMutation(apolloClients[serviceName]),
      withServiceNameGetMutations(serviceName),
    ]
  );

export const useService = (serviceName: ServiceNameType) => {
  const clients = React.useContext(GraphQLContext);
  const snakeCaseServiceName = kebabCaseToSnakeCase(serviceName);

  if (!clients || !(snakeCaseServiceName in clients))
    throw new Error(
      "Couldn't connect to the endpoint or you forgot to set the service"
    );

  const [createQuery, queries] = getCreateQueryFnAndPredefinedQueries(
    snakeCaseServiceName
  )(clients);
  const [createMutation, mutations] = getCreateMutationFnAndPredefinedMutations(
    snakeCaseServiceName
  )(clients);

  return [createQuery, createMutation, { queries, mutations }];
};

export const withGraphQL = (...serviceNames: readonly ServiceNameType[]) => (
  WrappedComponent: React.FC
) => (props) => {
  const clients = createGraphqlClients(serviceNames);

  return (
    <GraphQLContext.Provider value={clients}>
      <WrappedComponent {...props} />
    </GraphQLContext.Provider>
  );
};
