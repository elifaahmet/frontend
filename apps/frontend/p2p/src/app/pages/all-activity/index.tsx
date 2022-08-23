/** @format **/
import moment from 'moment';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { useService } from '@tend/frontend/shared/react-utils';
import { AllActivityView, CalendarDateType } from '@tend/lego/product-ui-kit';

/**
 * transactions(
 accountId: String!
 accountType: AccountType = null
 recordNumber: Int = null
 amountMin: Float = null
 amountMax: Float = null
 startDate: Date = null
 endDate: Date = null
 isCredit: Boolean = null
 keywords: [String] = null
 ): TransactionListUnion
 */

enum AccountType {
  DDA = 'DDA',
  SSA = 'SSA',
  LOC = 'LOC',
}

enum DateFilters {
  ALL_TRANSACTIONS,
  PAST_THREE_MONTHS,
  LAST_MONTH,
  CURRENT_YEAR,
  LAST_YEAR,
}

export const AllActivity = (props) => {
  const { currentUser } = props;
  const {
    2: { queries },
  } = useService('service_transaction');
  const { t } = useTranslation(['all-activity', 'errors']);
  const [error, setError] = React.useState({
    flag: false,
    code: '0000',
    message: '',
  });
  const [accountInfo, setAccountInfo] = React.useState({
    accountId: '',
    type: 'checking',
    lastFour: '9999',
    balance: 0.0,
    phoneNumberLastFour: '9999',
  });
  const [startDate, setStartDate] = React.useState<CalendarDateType>();
  const [endDate, setEndDate] = React.useState<CalendarDateType>();
  const [datesFilter, setDatesFilter] = React.useState<DateFilters>(
    DateFilters.ALL_TRANSACTIONS
  );
  const [transactionsThisWeek, setTransactionsThisWeek] = React.useState([]);
  const [allOtherTransactions, setAllOtherTransactions] = React.useState([]);

  const setDates = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFiltersApplyClick = (filters) => {
    queries
      .getTransactions({ accountId: accountInfo.accountId, startDate, endDate })
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          setError({ flag: true, message: t(`errors:${code}`), code });
          throw new Error(t(`errors:${code}`));
        }
        const {
          transactions: { recent },
        } = data;
        const now = moment();

        const { currentWeekTransactions, restOfTransactions } = recent.reduce(
          (allTransactions, transaction) => {
            if (moment(recent.createdDate).isoWeek() === now.isoWeek()) {
              allTransactions.currentWeekTransaction.push({
                data: { ...transaction },
              });
            } else {
              allTransactions.restOfTransactions.push({
                data: { ...transaction },
              });
            }
            return allTransactions;
          },
          {
            currentWeekTransactions: [],
            restOfTransactions: [],
          }
        );

        setTransactionsThisWeek(currentWeekTransactions);
        setAllOtherTransactions(restOfTransactions);
      })
      .catch((error) => {
        if (error.message === 'Signature has expired') {
          setError({
            flag: true,
            message: t('error-message-module:code-4000'),
            code: '4000',
          });
        } else {
          setError((prevState) => ({
            ...prevState,
            flag: true,
            message: error.message,
          }));
        }
      });
  };

  React.useEffect(() => {
    switch (datesFilter) {
      case DateFilters.ALL_TRANSACTIONS:
        setDates({ startDate: null, endDate: null });
        break;
      case DateFilters.PAST_THREE_MONTHS:
        setDates({
          startDate: moment().subtract(3, 'months').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD'),
        });
        break;
      case DateFilters.LAST_MONTH:
        setDates({
          startDate: moment().subtract(1, 'month').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD'),
        });
        break;
      case DateFilters.LAST_YEAR:
        setDates({
          startDate: moment()
            .startOf('year')
            .subtract(1, 'year')
            .format('YYYY-MM-DD'),
          endDate: moment()
            .endOf('year')
            .subtract(1, 'year')
            .format('YYYY-MM-DD'),
        });
        break;
      case DateFilters.CURRENT_YEAR:
        setDates({
          startDate: moment().startOf('year').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD'),
        });
        break;
    }
  }, [datesFilter]);

  React.useEffect(() => {
    let mounted = true;
    queries
      .getAccounts()
      .then(({ data, errors, code }) => {
        if (mounted) {
          if (errors?.length) {
            setError({ flag: true, message: t(`errors:${code}`), code });
            throw new Error(t(`errors:${code}`));
          }
          const { getAccounts } = data;
          const { phone } = currentUser;

          const foundAccount = getAccounts.find(
            (account) =>
              account.accountType === AccountType.DDA &&
              account.status === 'Open'
          );
          if (foundAccount) {
            setAccountInfo({
              accountId: foundAccount.accountId,
              type: 'checking',
              balance: Number.parseFloat(foundAccount.availableBalance),
              phoneNumberLastFour: phone,
              lastFour: foundAccount.accountNumber,
            });
          } else {
            setError({ flag: true, message: t(`errors:11111`), code: '11111' });
          }
        }
      })
      .catch((error) => {
        if (error.message === 'Signature has expired') {
          setError({
            flag: true,
            message: t('error-message-module:code-:4000'),
            code: '4000',
          });
        } else {
          setError((prevState) => ({
            ...prevState,
            flag: true,
            message: error.message,
          }));
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (accountInfo.accountId !== '') {
      queries
        .getTransactions({ accountId: accountInfo.accountId })
        .then(({ data, errors, code }) => {
          if (errors?.length) {
            setError({ flag: true, message: t(`errors:${code}`), code });
            throw new Error(t(`errors:${code}`));
          }
          const {
            transactions: { recent },
          } = data;
          const now = moment();

          const { currentWeekTransactions, restOfTransactions } = recent.reduce(
            (allTransactions, transaction) => {
              if (moment(recent.createdDate).isoWeek() === now.isoWeek()) {
                allTransactions.currentWeekTransactions.push({
                  data: { ...transaction },
                });
              } else {
                allTransactions.restOfTransactions.push({
                  data: { ...transaction },
                });
              }
              return allTransactions;
            },
            {
              currentWeekTransactions: [],
              restOfTransactions: [],
            }
          );

          setTransactionsThisWeek(currentWeekTransactions);
          setAllOtherTransactions(restOfTransactions);
        })
        .catch((error) => {
          if (error.message === 'Signature has expired') {
            setError({
              flag: true,
              message: t('error-message-module:code-:4000'),
              code: '4000',
            });
          } else {
            setError((prevState) => ({
              ...prevState,
              flag: true,
              message: error.message,
            }));
          }
        });
    }
  }, [accountInfo.accountId]);
  return (
    <AllActivityView
      setDates={setDates}
      onFiltersApplyClick={onFiltersApplyClick}
      transactionsThisWeek={transactionsThisWeek}
      allOtherTransactions={allOtherTransactions}
    />
  );
};
