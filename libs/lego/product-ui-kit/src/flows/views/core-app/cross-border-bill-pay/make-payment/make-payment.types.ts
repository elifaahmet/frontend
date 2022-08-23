import { ReactNode } from 'react';

/**@format */

export interface MakePaymentState {
  amount: string;
  note?: string;
}

export interface MakePaymentProps {
  confirmedChoice: string | ReactNode;
  accountNumber: number | string;
  bankAccountLastFour: number | string;
  bankAccountBalance: number;
  bankAccountType: 'checking' | 'savings';
  amountInUSD: number;
  amountError: string;
  onAmountChange: (amount: string) => void;
  onClickSendPayment: (state: MakePaymentState) => void;
  onClickCancel: () => void;
  exchangeRate: number;
  exchangeRateText: string;
  errorMessage?: string;
}
