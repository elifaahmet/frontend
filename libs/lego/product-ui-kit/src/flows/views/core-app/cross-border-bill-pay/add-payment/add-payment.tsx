/**@format */
import React, { useState } from 'react';

import {
  B1,
  B3,
  ConfirmedChoice,
  L1,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
} from '@tend/lego/product-ui-kit';
import { Input, InputProps } from '@tend/shared/design/ui-kit';

import { AddPaymentProps, AddPaymentState } from './add-payment.types';

export const AddPayment: React.FC<AddPaymentProps> = (props) => {
  const [state, setState] = useState<AddPaymentState>({
    accountNumber: null,
    billerNickName: null,
  });
  const {
    confirmedChoice,
    billerNickName,
    accountNumberError,
    onClickAddPayment,
    onClickCancel,
  } = props;

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'add biller',
        disabled: !state.accountNumber || !!accountNumberError,
        onClick: () => onClickAddPayment(state),
      },
      {
        children: 'cancel',
        variant: 'secondary',
        onClick: onClickCancel,
      },
    ],
  };

  const accountNumberInputProps: InputProps = {
    type: 'text',
    name: 'account-number',
    label: 'ACCOUNT NUMBER',
    placeholder: 'Enter your account number',
    error: !!accountNumberError,
    errorOrValidationSubtext: accountNumberError || '',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        accountNumber: value,
      }));
    },
  };

  const billerNickNameProps: InputProps = {
    type: 'text',
    name: 'biller-nickname',
    label: 'BILLER NICKNAME',
    placeholder: billerNickName,
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        billerNickName: value,
      }));
    },
  };
  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <Spacer top={16} bottom={16} />
      <L1>ENTER ACCOUNT NUMBER</L1>
      <B3>Use your bill from this biller to locate your account number.</B3>
      <Spacer top={8} />
      <ConfirmedChoice>
        <B1 bold color="neutral-off-white">
          {confirmedChoice}
        </B1>
      </ConfirmedChoice>
      <Spacer top={20} bottom={20}>
        <Spacer top={16} bottom={8} />
      </Spacer>
      <Input {...accountNumberInputProps} />
      {!accountNumberError && (
        <B3 useOpacity>
          Enter the 14 digit account number, excluding hyphens or spaces.
        </B3>
      )}
      <Spacer top={20} bottom={20}>
        <Spacer top={16} />
      </Spacer>
      <Input {...billerNickNameProps} />
      <B3 useOpacity>Optional, give your biller a nickname.</B3>
    </PageTemplateBottomDockedButtons>
  );
};

export default AddPayment;
