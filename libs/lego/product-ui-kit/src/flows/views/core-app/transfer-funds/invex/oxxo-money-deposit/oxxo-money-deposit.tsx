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

export interface OXXOMoneyDepositProps {
  tendDebitCardNumber: string;
  tendBankName: string;
  directDepositOnClick: MouseEventHandler<HTMLButtonElement> | (() => void);
  doneOnClick: MouseEventHandler<HTMLButtonElement> | (() => void);
}

export const OXXOMoneyDeposit: React.FC<OXXOMoneyDepositProps> = (props) => {
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
        OXXO MONEY
        <br />
        DEPOSIT
      </H1>
      <Spacer top={20} bottom={20}>
        <Spacer top={16} bottom={8} />
      </Spacer>
      <B1>
        Just head to your closest OXXO
        <br />
        location and request to deposit to your
        <br />
        new Meed account.
      </B1>
      <Spacer top={16} bottom={16} />
      <B1>Tend debit card number:</B1>
      <Spacer top={16} />
      <H2 color="primary-yellow">{props.tendDebitCardNumber}</H2>
      <Spacer top={16} bottom={16} />
      <B1>Tend bank name:</B1>
      <Spacer top={16} />
      <H2 color="primary-yellow">{props.tendBankName}</H2>
      <Spacer top={16} bottom={16} />
      <B1>
        It can take up to 24 hours for your OXXO
        <br />
        deposit to make it to your account.
      </B1>
    </PageTemplateBottomDockedButtons>
  );
};

export default OXXOMoneyDeposit;
