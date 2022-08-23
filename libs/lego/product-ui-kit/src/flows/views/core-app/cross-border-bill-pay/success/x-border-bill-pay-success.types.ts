import { ReactNode } from 'react';

export interface XBorderBillPaySuccessProps {
  amountDue: number;
  amountSending: number;
  recipient: string | ReactNode;
  date: string;
  referenceNumber: string;
  disclaimer: string;
  status: 'success' | 'pending';
  onClickDone: () => void;
}
