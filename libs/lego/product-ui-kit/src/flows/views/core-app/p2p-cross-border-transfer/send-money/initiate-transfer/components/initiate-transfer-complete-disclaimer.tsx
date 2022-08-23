/**@format*/
import React from 'react';

import { B1, Spacer } from '@tend/lego/product-ui-kit';

import { InitiateTransferCompleteDisclaimerProps } from '../initiate-transfer-view.types';

export const InitiateTransferCompleteDisclaimer: React.FC<InitiateTransferCompleteDisclaimerProps> = (
  props
) => {
  const { transferType } = props;
  return (
    <div style={{ opacity: 0.5 }}>
      <B1 color="neutral-off-white">
        You have the right to dispute errors in your transaction. If you think
        there is an error, contact us within 180 days at 1-833-TEND-HEY or
        hey@tend.money. You can also contact us for a written explanation of
        your rights.
        <br />
        <br />
        Banking Services in the United States provided by Community Federal
        Savings Bank and NBKC bank, Members FDIC.
        <br />
        <br />
        For questions or complaints about Tend, contact:
        {transferType !== 'us-to-us' && (
          <>
            <br />
            Consumer Financial Protection Bureau
            <br />
            855-411-2372
            <br />
            855-729-2372 (TTY/TDD)
            <br />
            consumerfinance.gov/sending-money
          </>
        )}
        <br />
      </B1>
      <Spacer bottom={20} />
    </div>
  );
};

export default InitiateTransferCompleteDisclaimer;
