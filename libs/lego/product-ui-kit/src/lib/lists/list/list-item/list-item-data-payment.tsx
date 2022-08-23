/** @format */
import styled from '@emotion/styled';
import React from 'react';

import {
  B1,
  B2,
  ITransaction,
  ListItemProps,
  formatNumberToMoneyString,
  typographicStylesToCssString,
} from '@tend/lego/product-ui-kit';
import { SVGIcon } from '@tend/shared/design/ui-kit';

import {
  ListItemDataSectionEndPayment,
  ListItemDataSectionStart,
} from './list-item.styled';

export interface ListItemDataPaymentProps
  extends Omit<ListItemProps, 'onDelete'> {
  data: ITransaction;
  clickableIcon?: boolean;
  onDelete?: () => void;
}

const StyledListItemAmount = styled.label`
  color: ${(props) => props.theme.color['neutral-off-white']};
  /**
  * @tech-debt
  *
  * Add this as L1 along with new entry-amount typography
  */
  ${(props) => typographicStylesToCssString(props.theme, 'list-item-amount')};
`;

export function ListItemDataPayment(props: ListItemDataPaymentProps) {
  const {
    amount,
    createdDate,
    // currency,
    description,
    friendlyDescription,
    nickname,
    note,
    requestDate,
    transactionDate,
  } = props.data;
  const date = transactionDate || requestDate || createdDate;

  return (
    <>
      <ListItemDataSectionStart>
        <B1 bold color="neutral-off-white">
          {nickname || friendlyDescription}
        </B1>
        <B2 color="neutral-off-white">
          {`${date}  ${note || description?.note || ''}`.trim()}
        </B2>
      </ListItemDataSectionStart>
      <ListItemDataSectionEndPayment>
        <div className="money-country">
          <StyledListItemAmount>
            {formatNumberToMoneyString(amount)}
          </StyledListItemAmount>
          <B2>USD</B2>
        </div>
        {props.clickableIcon && (
          <div className="right-arrow">
            <SVGIcon
              boxSize={10}
              iconName="arrow-head-right"
              color="neutral-off-white"
            />
          </div>
        )}
      </ListItemDataSectionEndPayment>
    </>
  );
}

export default ListItemDataPayment;
