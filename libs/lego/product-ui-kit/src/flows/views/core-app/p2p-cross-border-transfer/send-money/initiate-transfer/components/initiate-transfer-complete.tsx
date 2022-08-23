/**@format */
import React from 'react';

import {
  B1,
  Spacer,
  formatNumberToIntegerMoneyString,
  formatNumberToMoneyString,
} from '@tend/lego/product-ui-kit';
import { ButtonProduct, CheckIcon } from '@tend/shared/design/ui-kit';

import { InitiateTransferCompleteProps } from '../initiate-transfer-view.types';
import { InitiateTransferCompleteDisclaimer } from './initiate-transfer-complete-disclaimer';
import { TransferCompleteSummaryWrapper } from './initiate-transfer.styled';

export const InitiateTransferComplete: React.FC<InitiateTransferCompleteProps> = (
  props
) => {
  const {
    sendToUser,
    transactionDate,
    referenceNumber,
    amountSent,
    amountReceived,
    transferType,
    onDoneClick,
  } = props;

  const sendAmountString = amountSent;
  // amountSent % 1 === 0
  //   ? formatNumberToIntegerMoneyString(amountSent)
  //   : formatNumberToMoneyString(amountSent);
  const amountReceivedString = amountReceived;
  // amountReceived % 1 === 0
  //   ? formatNumberToIntegerMoneyString(amountReceived)
  //   : formatNumberToMoneyString(amountReceived);

  return (
    <div id="initiate-transfer-complete">
      <TransferCompleteSummaryWrapper>
        <Spacer top={20} bottom={20}>
          <CheckIcon />
        </Spacer>
        <p className="sent-text">
          You've sent {sendAmountString} {transferType === 'us-to-us' && 'to'}
          <br />
          {transferType !== 'us-to-us' && `(${amountReceivedString}`}
          {transferType !== 'us-to-us' && <span className="currency">MXN</span>}
          {transferType !== 'us-to-us' && ') to'}{' '}
          {transferType !== 'us-to-us' && <br />} {sendToUser.nickname}
        </p>
        <Spacer top={20} bottom={16}>
          <B1 bold>{transactionDate}</B1>
        </Spacer>
        <Spacer bottom={20}>
          <B1>Ref # {referenceNumber}</B1>
        </Spacer>
      </TransferCompleteSummaryWrapper>
      <InitiateTransferCompleteDisclaimer transferType={transferType} />
      <ButtonProduct variant="primary" onClick={onDoneClick}>
        done
      </ButtonProduct>
    </div>
  );
};
