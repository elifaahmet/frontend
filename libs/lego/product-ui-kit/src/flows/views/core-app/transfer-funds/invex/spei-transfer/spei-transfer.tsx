/**@format */

import React, { MouseEventHandler } from 'react';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  H1,
  H2,
  B1,
} from '@tend/lego/product-ui-kit';

export interface SPEITransferProps {
  tendAccountClabe: string;
  tendBankName: string;
  directDepositOnClick: MouseEventHandler<HTMLButtonElement> | (() => void);
  doneOnClick: MouseEventHandler<HTMLButtonElement> | (() => void);
}

export const SPEITransfer: React.FC<SPEITransferProps> = (props) => {
  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'set up direct deposit',
        onClick: props.directDepositOnClick,
      },
      {
        children: 'done',
        variant: 'secondary',
        onClick: props.doneOnClick,
      },
    ],
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <H1>
        SPEI TRANSFER
        <br />
        FROM OTHER
        <br />
        BANK
      </H1>
      <Spacer top={16} bottom={4} />
      <B1>
        Just head to your current bank and
        <br />
        request to deposit SPEI to your
        <br />
        new Meed account.
      </B1>
      <Spacer top={16} bottom={16} />
      <B1>Tend account clabe:</B1>
      <Spacer top={16} />
      <H2 color="primary-yellow">{props.tendAccountClabe}</H2>
      <Spacer top={16} bottom={16} />
      <B1>Tend bank name:</B1>
      <Spacer top={16} />
      <H2 color="primary-yellow">{props.tendBankName}</H2>
      <Spacer top={16} bottom={16} />
      <B1>
        Your deposit will only take moments to
        <br />
        reach your account.
      </B1>
    </PageTemplateBottomDockedButtons>
  );
};

export default SPEITransfer;
