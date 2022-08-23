/**@format */

export type CurrencyType = 'mxn' | 'usd';

export interface ITransaction {
  amount?: number;
  availableDate?: string;
  createdDate?: string;
  currency: CurrencyType;
  customerId?: string;
  description?: { note: string; category: string };
  friendlyDescription?: string;
  id: string;
  isCredit?: boolean;
  memberId: string;
  nickname: string;
  note?: string;
  requestDate?: string;
  settleDate?: string;
  status?: string;
  tendId?: string;
  transactionDate?: string;
  transactionId?: string;
}

export interface IP2PRequest
  extends Omit<
    ITransaction,
    'tendId' | 'transactionDate' | 'createdDate' | 'note'
  > {
  requestDate: string;
  amount: number;
}

export interface IMostFrequentlySent
  extends Omit<
    ITransaction,
    'amount' | 'requestDate' | 'transactionDate' | 'createdDate' | 'note'
  > {
  tendId: string;
  country: string;
}

export interface IMostRecent
  extends Omit<ITransaction, 'tendId' | 'requestDate' | 'createdDate'> {
  transactionDate: string;
  amount: number;
  note: string;
}

export interface IPaymentRequested
  extends Omit<ITransaction, 'requestDate' | 'transactionDate'> {
  createdDate: string;
  amount: number;
}
