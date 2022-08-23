/**@format */

import React, { useState } from 'react';
import { SVGIcon, Input, ButtonProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  H1,
  L1,
  L2,
  InputStyleText,
  Spacer,
  Separator,
  onChangeFormatInputToDollarString,
} from '@tend/lego/product-ui-kit';
import { InitialStepCheckingWrapper } from './external-bank-transfer.styled';

export const ExternalBankTransferInitialStep: React.FC = () => {
  const [amount, setAmount] = useState('');
  const buttonsProps: ButtonProps[] = [
    {
      children: 'continue',
    },
  ];
  const pageTemplateProps = {
    buttonsProps,
    verticalAlignContentCenter: false,
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <div>
        <H1>
          DEPOSIT
          <br /> MONEY.
        </H1>
        <Spacer top={20} bottom={20} />
        <InitialStepCheckingWrapper>
          <L2 bold color="primary-magenta">
            TO CHECKING
          </L2>
          <SVGIcon
            iconName="arrow-head-right"
            boxSize={5}
            color="primary-magenta"
          />
        </InitialStepCheckingWrapper>
        <Spacer top={16} />
        <Input
          variant="large"
          type="text"
          name="amount"
          label="Amount"
          placeholder="$0.00"
          value={amount}
          onChange={(e) => {
            setAmount(onChangeFormatInputToDollarString(e));
          }}
        />
        <Spacer top={16} bottom={20} />
        <Separator />
        <Spacer top={16} bottom={8} />
        <L1>SUBSCRIPTION FEE</L1>
        <Spacer top={8} />
        <InputStyleText variant="large">$9.95</InputStyleText>
      </div>
    </PageTemplateBottomDockedButtons>
  );
};

export default ExternalBankTransferInitialStep;
