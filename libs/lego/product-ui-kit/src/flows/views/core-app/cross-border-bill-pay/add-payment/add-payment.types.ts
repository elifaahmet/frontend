import { ReactNode } from 'react';

export interface AddPaymentProps {
  confirmedChoice: string | ReactNode;
  billerNickName: string;
  accountNumberError?: string;
  onClickAddPayment: (state: AddPaymentState) => void;
  onClickCancel: () => void;
}

export interface AddPaymentState {
  accountNumber: string;
  billerNickName: string;
}
