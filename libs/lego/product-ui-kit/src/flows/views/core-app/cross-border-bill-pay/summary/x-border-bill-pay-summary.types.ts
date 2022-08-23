import { ReactNode } from 'react';

export interface XBorderBillPaySummaryProps {
  amountDue: number;
  amountSending: number;
  exchangeRate: number;
  exchangeRateText: string;
  recipient: string | ReactNode;
  accountNumber: number | string;
  note?: string;
  bankAccountLastFour: number | string;
  bankAccountBalance: number;
  bankAccountType: 'checking' | 'savings';
  onClickSendPayment: () => void;
  onClickCancel: () => void;
}
