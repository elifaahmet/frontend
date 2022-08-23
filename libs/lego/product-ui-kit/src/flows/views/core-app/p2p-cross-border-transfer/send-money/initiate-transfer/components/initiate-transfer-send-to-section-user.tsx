/**@format */
import React from 'react';

import { L1, getUserListItem } from '@tend/lego/product-ui-kit';

import { InitiateTransferSendToUserSectionProps } from '../initiate-transfer-view.types';
import { SendToUser } from './initiate-transfer.styled';

export const InitiateTransferSendToUserSection: React.FC<InitiateTransferSendToUserSectionProps> = (
  props
) => {
  const { sendToUser, heading } = props;

  return (
    <>
      <L1>{heading}</L1>
      <SendToUser>{getUserListItem({ data: sendToUser })}</SendToUser>
    </>
  );
};

export default InitiateTransferSendToUserSection;
