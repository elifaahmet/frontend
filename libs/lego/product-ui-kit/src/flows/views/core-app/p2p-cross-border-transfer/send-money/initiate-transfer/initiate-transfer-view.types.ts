/**@format */
import React from 'react';

import { IUser } from '@tend/lego/product-ui-kit';

export const defaultErrorMessage =
  'Not enough to fund this transaction. Please enter a smaller amount';

export type P2PTransferType = 'us-to-us' | 'us-to-mx' | 'mx-to-mx';

export interface InitiateTransferViewState {
  sendAmount: string;
  referenceNumber: string;
  receivedAmount: string;
  note: string;
  attemptedNext: boolean;
  error: boolean;
  errorMessage: string;
}

export type InitiateTransferSteps = 'start' | 'confirm' | 'verify' | 'complete';

export interface InitiateTransferViewProps {
  sendToUser: IUser;
  transferType: P2PTransferType;
  accountInfo: {
    type: string;
    lastFour: number;
    balance: number;
    phoneNumberLastFour: number;
  };
  errorMessage?: string;
  rateInfo: InitiateTransferSendToSectionRateInfoProps;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onSendAmountChange?: (amount: number) => Promise<any>;
  onReceivedAmountChange?: (amount: number) => Promise<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  resendCode?: () => void;
  withCaptureSingleDigitInputValue?: (
    cb: (string) => void
  ) => (value: number) => void;
  onDoneClick?: () => void;
  onConfirmClick?: (amount: string, note: string) => void;
  onClickCloseErrorModal: () => void;
  showModalTC?: boolean;
  handleAcceptTC?: () => void;
  onClickAgreeModalTC?: (checkBoxClicked: boolean) => void;
  onCancel?: () => void;
  devicePlatform: string;
}

export interface InitiateTransferSendToProps
  extends Omit<
    InitiateTransferViewProps,
    'errorMessage' | 'resendCode' | 'captureSingleDigitInputValue'
  > {
  state: InitiateTransferViewState;
  setState: React.Dispatch<React.SetStateAction<InitiateTransferViewState>>;
}

export interface InitiateTransferSendToUserSectionProps {
  sendToUser: IUser;
  heading: 'SEND TO' | 'TO';
}

export interface InitiateTransferSendToSectionRateInfoProps {
  conversionRate: number;
  explainerText: string;
  modalExplainerText: string;
}

export interface InitiateTransferSendToSectionFromAccountProps
  extends Pick<InitiateTransferViewProps, 'accountInfo'> {
  state: InitiateTransferViewState;
}

export interface InitiateTransferCompleteProps {
  sendToUser: IUser;
  transactionDate: string;
  referenceNumber: string;
  amountSent: string;
  amountReceived?: string;
  transferType: P2PTransferType;
  onDoneClick: () => void;
}

export interface InitiateTransferCompleteDisclaimerProps {
  transferType: P2PTransferType;
}
