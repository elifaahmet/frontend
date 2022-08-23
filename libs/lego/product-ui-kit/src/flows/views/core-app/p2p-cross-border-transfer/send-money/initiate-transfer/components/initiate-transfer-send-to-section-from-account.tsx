/**@format */
import React from 'react';

import { L1, Spacer } from '@tend/lego/product-ui-kit';
import { SVGIcon } from '@tend/shared/design/ui-kit';

import {
  InitiateTransferSendToSectionFromAccountProps,
  defaultErrorMessage,
} from '../initiate-transfer-view.types';
import { FromAccountBalance } from './initiate-transfer.styled';

export const InitiateTransferSendToSectionFromAccount: React.FC<InitiateTransferSendToSectionFromAccountProps> = (
  props
) => {
  const { accountInfo, state } = props;
  const error = state.error && state.attemptedNext;

  const moneyString = accountInfo.balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <L1>FROM</L1>
      <Spacer top={20}>
        <FromAccountBalance>
          <SVGIcon boxSize={22} iconName="checking" color="primary-magenta" />
          <div className="account-balance">
            <L1>
              {accountInfo.type.toUpperCase()} ({accountInfo.lastFour})
            </L1>
            <L1
              color={
                error && state.errorMessage === defaultErrorMessage
                  ? 'primary-red'
                  : 'neutral-off-white'
              }
            >
              {moneyString}
            </L1>
          </div>
        </FromAccountBalance>
      </Spacer>
    </>
  );
};

export default InitiateTransferSendToSectionFromAccount;
