/**@format */
import React from 'react';

import { B1, L1, Spacer } from '@tend/lego/product-ui-kit';

import { InitiateTransferSendToSectionRateInfoProps } from '../initiate-transfer-view.types';
import { OptionInternationTransferText } from './initiate-transfer.styled';

export const InitiateTransferSendToSectionRateInfo: React.FC<
  InitiateTransferSendToSectionRateInfoProps
> = (props) => {
  const { conversionRate, explainerText } = props;

  return (
    <>
      <OptionInternationTransferText>
        <Spacer top={20} bottom={8} />
        <L1>1 USD = {conversionRate} MXN</L1>
        <Spacer top={8} bottom={8}>
          <B1>{explainerText}</B1>
        </Spacer>
      </OptionInternationTransferText>
    </>
  );
};

export default InitiateTransferSendToSectionRateInfo;
