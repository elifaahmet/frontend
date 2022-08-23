/**@format */
import React from 'react';

import {
  B3,
  L1,
  List,
  ListItemDataPaymentProps,
  ListItemDataUserProps,
  ListProps,
  Spacer,
} from '@tend/lego/product-ui-kit';

import {
  BillersListInnerWrapper,
  BillersListWrapper,
} from '../search-billers.styled';

export interface BillersListProps {
  previousBillers?: Array<ListItemDataUserProps | ListItemDataPaymentProps>;
  pendingBillers?: Array<ListItemDataUserProps | ListItemDataPaymentProps>;
}

export const BillersList: React.FC<BillersListProps> = (props) => {
  const { previousBillers, pendingBillers } = props;

  const hasPendingBillers = pendingBillers?.length;
  const hasPreviousBillers = previousBillers?.length;
  const previousList: ListProps = {
    listType: 'payment',
    list: pendingBillers,
    isActionEdit: false,
    listContainerProps: {
      title: 'PENDING PAYMENTS',
    },
  };

  const billersList: ListProps = {
    listType: 'payment',
    list: previousBillers,
    isActionEdit: true,
    listContainerProps: {
      title: 'PREVIOUS PAYMENTS',
      actionLabel: 'Edit',
      actionLabelAlt: 'Done',
    },
  };

  return (
    <BillersListWrapper>
      {hasPreviousBillers || hasPendingBillers ? (
        <>
          {hasPendingBillers && (
            <>
              <List {...previousList} />
              <Spacer top={16} />
            </>
          )}

          {hasPreviousBillers && <List {...billersList} />}
        </>
      ) : (
        <BillersListInnerWrapper>
          <L1 className="with-opacity">PREVIOUS PAYMENTS</L1>
          <B3>
            No previous payments.
            <br />
            Use the search function above to make your first payment.
          </B3>
        </BillersListInnerWrapper>
      )}
    </BillersListWrapper>
  );
};

export default BillersList;
