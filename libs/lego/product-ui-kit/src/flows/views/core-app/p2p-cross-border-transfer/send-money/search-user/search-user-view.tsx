/**@format */
import React from 'react';

import {
  IMostFrequentlySent,
  IMostRecent,
  IP2PRequest,
  IUser,
  Layout,
  List,
  ListItemDataPaymentProps,
  ListItemDataUserProps,
  ListProps,
  SearchUser,
  SearchUserProps,
  Spacer,
} from '@tend/lego/product-ui-kit';

import { OptionInternationTransferText } from '../initiate-transfer/components/initiate-transfer.styled';

export interface P2PTransferSearchUserViewProps {
  searchUser: SearchUserProps;
  p2pRequest: Array<IP2PRequest>;
  mostFrequentlySent: Array<IMostFrequentlySent>;
  mostRecent: Array<IMostRecent>;
  withDeletePayee: (id: string) => (cb: () => void) => () => void;
  withNavigate: (user: IUser) => () => void;
  onShowAllClick?: () => void;
}

export const SearchUserView: React.FC<P2PTransferSearchUserViewProps> = (
  props
) => {
  const {
    searchUser,
    p2pRequest,
    mostFrequentlySent,
    mostRecent,
    withDeletePayee,
    onShowAllClick,
    withNavigate,
  } = props;

  const p2pRequestProps: ListProps = {
    listType: 'payment' as const,
    list: p2pRequest.map(
      (item) => ({ data: item } as ListItemDataPaymentProps)
    ),
    isActionEdit: true,
    listContainerProps: {
      title: 'Waiting For Payment',
      actionLabel: 'Edit',
      actionLabelAlt: 'Done',
    },
  };

  const mostFrequentlySentProps: ListProps = {
    listType: 'user',
    list: mostFrequentlySent.map(
      (item) =>
        ({
          key: item.id,
          data: item,
          onDelete: withDeletePayee(item.id),
          onClick: withNavigate(item as IUser),
          sendAgain: true,
        } as ListItemDataUserProps)
    ),
    isActionEdit: true,
    listContainerProps: {
      title: 'Send again',
      actionLabel: 'Edit',
      actionLabelAlt: 'Done',
      headerProps: { left: 16, right: 16 },
      itemsProps: { left: 16, right: 16 },
    },
  };

  const mostRecentProps: ListProps = {
    listType: 'payment',
    list: mostRecent.map(
      (item, i) =>
        ({
          data: item,
          key: `${item.id}-${i}`,
        } as ListItemDataPaymentProps)
    ),
    listContainerProps: {
      title: 'Recent Activity',
      actionLabel: 'Show All',
      actionLabelAlt: 'Show All',
      onActionClick: onShowAllClick,
      headerProps: { left: 16, right: 16 },
      itemsProps: { left: 16, right: 16 },
    },
  };

  return (
    <Layout left={0} right={0}>
      <div id="p2p-transfer-search-user-view">
        <SearchUser {...searchUser} />
        {p2pRequest.length > 0 && <List {...p2pRequestProps} />}
        {mostFrequentlySent.length > 0 && (
          <Spacer top={p2pRequest.length > 0 ? 20 : 0}>
            <List {...mostFrequentlySentProps} />
          </Spacer>
        )}
        {mostRecent.length > 0 && (
          <Spacer
            top={
              p2pRequest.length > 0 || mostFrequentlySent.length > 0 ? 20 : 0
            }
          >
            <List {...mostRecentProps} />
          </Spacer>
        )}
      </div>
    </Layout>
  );
};
