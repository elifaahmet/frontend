/**@ format */
import React from 'react';

import {
  List,
  ListItemDataPaymentProps,
  Spacer,
} from '@tend/lego/product-ui-kit';

export interface AllActivityViewTransactionsProps {
  transactionsThisWeek: Array<ListItemDataPaymentProps>;
  allOtherTransactions: Array<ListItemDataPaymentProps>;
}

export const AllActivityViewTransactions: React.FC<
  AllActivityViewTransactionsProps
> = (props) => {
  const { transactionsThisWeek, allOtherTransactions } = props;

  const thisWeekProps = {
    listType: 'payment' as const,
    list: transactionsThisWeek,
    isActionEdit: false,
    listContainerProps: {
      title: 'This week',
    },
  };

  const otherTransactionsProps = {
    listType: 'payment' as const,
    list: allOtherTransactions,
    isActionEdit: false,
    listContainerProps: {},
  };

  return (
    <div>
      {transactionsThisWeek && (
        <Spacer top={20} bottom={20} left={0} right={0}>
          <List {...thisWeekProps} />
        </Spacer>
      )}
      {allOtherTransactions && (
        <Spacer top={20} left={0} right={0}>
          <List {...otherTransactionsProps} />
        </Spacer>
      )}
    </div>
  );
};

export default AllActivityViewTransactions;
