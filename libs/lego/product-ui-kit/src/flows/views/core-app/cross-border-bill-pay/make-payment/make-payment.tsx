/**@format */
import React, { useState } from 'react';

import {
  AccountBalance,
  AccountBalanceProps,
  B1,
  B2,
  B3,
  ConfirmedChoice,
  ContrastText,
  InputStyleText,
  L1,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  formatNumberToMoneyString,
  onChangeFormatInputToDollarString,
} from '@tend/lego/product-ui-kit';
import { Input, InputProps } from '@tend/shared/design/ui-kit';

import {
  ExchangeRateDisclaimer,
  TotalUSDColumn,
  TotalUSDRow,
} from './make-payment.styled';
import { MakePaymentProps, MakePaymentState } from './make-payment.types';

export { MakePaymentProps, MakePaymentState } from './make-payment.types';

export const MakePayment: React.FC<MakePaymentProps> = (props) => {
  const [state, setState] = useState<MakePaymentState>({
    amount: null,
    note: null,
  });

  const {
    amountError,
    confirmedChoice,
    accountNumber,
    amountInUSD,
    onAmountChange,
    exchangeRate,
    exchangeRateText,
    bankAccountLastFour,
    bankAccountBalance,
    bankAccountType,
    onClickSendPayment,
    errorMessage,
    onClickCancel,
  } = props;

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'send payment',
        disabled: !!amountError || !state.amount,
        onClick: () => onClickSendPayment(state),
      },
      {
        children: 'cancel',
        variant: 'secondary',
        onClick: onClickCancel,
      },
    ],
  };

  const amountInputProps: InputProps = {
    name: 'amount-due',
    label: 'AMOUNT DUE',
    type: 'text',
    variant: 'large',
    placeholder: '0.00',
    value: state.amount || '',
    error: !!errorMessage,
    onChange: (e) => {
      e.preventDefault();
      const amount = onChangeFormatInputToDollarString(e);
      onAmountChange(amount);
      setState((prevState) => ({
        ...prevState,
        amount,
      }));
    },
  };

  const noteInputProps: InputProps = {
    name: 'note',
    label: 'NOTE',
    type: 'text',
    placeholder: 'Add a note (optional)',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        note: value,
      }));
    },
  };

  const accountBalanceProps: AccountBalanceProps = {
    amount: bankAccountBalance,
    accountNumberLastFour: bankAccountLastFour,
    accountType: bankAccountType,
    errorMessage,
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <Spacer top={16} bottom={16} />
      <L1>MAKE A PAYMENT</L1>
      <B3>Use your bill from this biller to locate your exact amount due.</B3>
      <Spacer top={8} />
      <ConfirmedChoice>
        <B1 bold color="neutral-off-white">
          {confirmedChoice}
        </B1>
        <Spacer top={8} />
        <B2 color="neutral-off-white">Account: {accountNumber}</B2>
      </ConfirmedChoice>
      <Spacer top={20} bottom={20} />
      <Input {...amountInputProps} />
      {!state.amount && (
        <>
          <Spacer top={4} />
          <B3>
            Enter exact amount due from your bill, entering an amount less or
            more than amount due, the payment will be rejected.
          </B3>
          <Spacer top={8} />
        </>
      )}
      <ContrastText>
        <TotalUSDRow>
          <TotalUSDColumn>
            <InputStyleText variant="large">Total USD</InputStyleText>
          </TotalUSDColumn>
          <TotalUSDColumn>
            <InputStyleText variant="large">
              {formatNumberToMoneyString(amountInUSD)}{' '}
              <span className="regular">USD</span>
            </InputStyleText>
          </TotalUSDColumn>
        </TotalUSDRow>
      </ContrastText>
      <Spacer top={16} bottom={16} />
      <ExchangeRateDisclaimer>
        <L1 useOpacity bold>
          1 USD = {exchangeRate} MXN
        </L1>
        <Spacer top={8} />
        <B3 useOpacity>{exchangeRateText}</B3>
      </ExchangeRateDisclaimer>
      <Spacer top={16} bottom={16} />
      <Input {...noteInputProps} />
      <Spacer top={16} bottom={16} />
      <AccountBalance {...accountBalanceProps} />
      <Spacer top={16} />
    </PageTemplateBottomDockedButtons>
  );
};

export default MakePayment;
