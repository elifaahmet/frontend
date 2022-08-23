/**@format */
import React from 'react';

import { B1, L1, Spacer } from '@tend/lego/product-ui-kit';

import { InitiateTransferSendToProps } from '../initiate-transfer-view.types';
import { InitiateTransferSendToSectionFromAccount } from './initiate-transfer-send-to-section-from-account';
import { InitiateTransferSendToSectionRateInfo } from './initiate-transfer-send-to-section-rate-info';
import { InitiateTransferSendToUserSection } from './initiate-transfer-send-to-section-user';
import { ConfirmationSummary } from './initiate-transfer.styled';
import { OptionInternationTransferText } from './initiate-transfer.styled';

export const InitiateTransferSendToConfirm: React.FC<InitiateTransferSendToProps> = (
  props
) => {
  const { sendToUser, transferType, accountInfo, rateInfo, state } = props;

  const initiateTransferSendToUserSectionProps = {
    sendToUser,
    heading: 'TO' as const,
  };

  const initiateTransferSendToSectionFromAccount = {
    accountInfo,
    state,
  };
  const { modalExplainerText } = rateInfo;

  const withinUS = transferType === 'us-to-us';

  return (
    <div>
      <ConfirmationSummary>
        <Spacer top={8} />
        <L1>AMOUNT YOU'RE SENDING</L1>
        <Spacer top={8}>
          <B1>
            <span className="money-portion">{state.sendAmount}</span>USD
          </B1>
        </Spacer>
        {!withinUS && (
          <Spacer top={20}>
            <Spacer top={20} />
            <L1>AMOUNT THEY'RE RECEIVING</L1>
            <Spacer top={8} bottom={16}>
              <B1>
                <span className="money-portion">{state.receivedAmount}</span>MXN
              </B1>
            </Spacer>
            <InitiateTransferSendToSectionRateInfo {...rateInfo} />
          </Spacer>
        )}
      </ConfirmationSummary>
      <Spacer top={20} bottom={20} />
      <InitiateTransferSendToUserSection
        {...initiateTransferSendToUserSectionProps}
      />
      {state.note && (
        <>
          <Spacer top={16} bottom={20} />
          <L1>NOTE</L1>
          <Spacer top={16} />
          <B1>
            <span style={{ opacity: 0.75 }}>{state.note}</span>
          </B1>
        </>
      )}
      <Spacer top={20} bottom={20} />
      <InitiateTransferSendToSectionFromAccount
        {...initiateTransferSendToSectionFromAccount}
      />
      <Spacer top={20} bottom={20}>
        <OptionInternationTransferText>
          <B1>{modalExplainerText}</B1>
        </OptionInternationTransferText>
      </Spacer>
    </div>
  );
};
