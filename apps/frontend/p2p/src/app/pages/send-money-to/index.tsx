/** @format */
import debounce from 'lodash/debounce';
import * as React from 'react';
import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useService } from '@tend/frontend/shared/react-utils';
import { SearchUserProps, SearchUserView } from '@tend/lego/product-ui-kit';

export function SendMoneyTo(props) {
  const {
    2: { queries, mutations },
  } = useService('service_transaction');
  const [mostRecent, setMostRecent] = React.useState([]);
  const [mostFrequentlySent, setMostFrequentlySent] = React.useState([]);
  const [p2pRequest, setP2pRequest] = React.useState([]);
  const [noUserFoundMessage, setNoUserFoundMessage] = React.useState('');
  const navigate = useNavigate();
  const { showModalAndRedirect, showModalNoRedirection } = props;
  const [searchResults, setSearchResults] = React.useState([]);

  const withDeletePayee = (id) => (cb) => () =>
    mutations.deletePayee({ id }).then(({ data, errors, code }) => {
      if (data.ok) {
        cb();
      }
    });

  const withNavigate = (navigate) => (user) => () =>
    navigate(`/initiate-transfer/${user.tendId ? user.tendId : user.id}`, {
      state: { ...user },
    });

  const catchError = (error) => {
    if (error.message === 'Authentication Token is expired.') {
      return showModalAndRedirect('/logout/done')({
        flag: true,
        message: error.message,
        code: '0001',
      });
    }
    const possibleCode = Number.parseInt(error.message);
    if (Number.isNaN(possibleCode)) {
      showModalAndRedirect('/')({
        flag: true,
        message: error.message,
        code: '',
      });
    } else if (error.message === '0001') {
      showModalAndRedirect('/logout/done')({
        flag: true,
        message: error.message,
        code: error.message,
      });
    } else {
      showModalAndRedirect('/')({
        flag: true,
        message: error.message,
        code: error.message,
      });
    }
  };

  React.useEffect(() => {
    let mounted = true;

    queries
      .getPayeeList()
      .then(({ data, errors, code }) => {
        if (mounted) {
          if (errors?.length) {
            throw new Error(code);
          }
          const {
            payeeList: { mostFrequentlySent, mostRecent, p2pRequest },
          } = data;
          setMostRecent(mostRecent);
          setMostFrequentlySent(mostFrequentlySent);
          setP2pRequest(p2pRequest);
        }
      })
      .catch(catchError);

    return () => {
      mounted = false;
    };
  }, []);

  const onChangeDebounced = debounce(function (e: BaseSyntheticEvent) {
    e.preventDefault();
    const queryString = e.target.value.toLowerCase().trim();
    setNoUserFoundMessage('');
    if (queryString !== '') {
      setSearchResults([]);
      queries
        .getPayee({ queryString })
        .then(
          ({
            data: {
              getPayee: { payees },
            },
            errors,
            code,
          }) => {
            if (errors?.length) {
              throw new Error(code);
            }
            if (payees) {
              setSearchResults(
                payees.reduce((allPayees, payee) => {
                  if (payee.country) {
                    allPayees.push({ data: { ...payee } });
                  }
                  return allPayees;
                }, [])
              );
            } else {
              setNoUserFoundMessage(
                'Sorry, Tend Member not found. Please check and try again.'
              );
            }
          }
        )
        .catch(catchError);
    } else {
      showModalNoRedirection({
        flag: true,
        message: 'Please enter email or phone number',
        code: '',
      });
    }
  }, 1500);

  const onShowAllClick = () => navigate('all-activity');

  const searchUser = {
    onChange: onChangeDebounced,
    searchResults,
    bankText:
      'Banking Services in the United States provided by Community Federal Savings Bank.',
    withNavigate: withNavigate(navigate),
    noUserFoundMessage,
  } as SearchUserProps;
  return (
    <SearchUserView
      searchUser={searchUser}
      mostFrequentlySent={mostFrequentlySent}
      mostRecent={mostRecent}
      p2pRequest={p2pRequest}
      onShowAllClick={onShowAllClick}
      withNavigate={withNavigate(navigate)}
      withDeletePayee={withDeletePayee}
    />
  );
}
