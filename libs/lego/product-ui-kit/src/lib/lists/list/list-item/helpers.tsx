/**@format */
import React from 'react';

import {
  ListItem,
  ListItemDataPayment,
  ListItemDataPaymentProps,
  ListItemDataUser,
  ListItemDataUserProps,
  ListItemProps,
} from '@tend/lego/product-ui-kit';

export function generateHash(
  item: ListItemDataPaymentProps | ListItemDataUserProps
): string {
  /** TODO: generate an actual hash */
  return JSON.stringify(item);
}

export function getUserListItem(user: ListItemDataUserProps): JSX.Element {
  return (
    <ListItem {...user} onClick={user.onClick}>
      <ListItemDataUser {...user} key={user.data.tendId} />
    </ListItem>
  );
}

export function getPaymentListItem(
  payment: ListItemDataPaymentProps
): JSX.Element {
  return (
    <ListItem {...payment}>
      <ListItemDataPayment
        {...payment}
        key={payment.data.tendId || payment.data.transactionId}
      />
    </ListItem>
  );
}
