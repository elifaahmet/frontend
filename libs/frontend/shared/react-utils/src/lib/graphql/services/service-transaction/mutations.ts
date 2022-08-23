/** @format **/
import { gql } from '@apollo/client';

export const createTransaction = gql`
  mutation createTransaction($transfer: CreateTransferInputType) {
    createTransaction(transfer: $transfer) {
      ok
      message
      transfer {
        __typename
        ... on NBKCBetweenAccountsOutputType {
          transactionId
          fromAccountId
          toAccountId
          fromAccountLocation
          toAccountLocation
          amount
          currency
          scheduledTransferDate
          transferCompletionDatetime
          transferFrequency
          transferTiming
        }
        ... on InvexBetweenAccountsOutputType {
          amount
          creditorAccountId
          debtorAccountId
          frequency
          transferDate
          transferId
          transferType
        }
        ... on NBKCInternal2InternalOutputType {
          recipientName
        }
        ... on NBKCInternal2ExternalOutputType {
          transactionId
          fromAccountId
          toAccountId
          fromAccountLocation
          toAccountLocation
          amount
          currency
          scheduledTransferDate
          transferCompletionDatetime
          transferFrequency
          transferTiming
        }
        ... on CrossBorderOutputType {
          transactionId
          fromAccountId
          toAccountId
          fromAccountLocation
          toAccountLocation
          amount
          currency
          scheduledTransferDate
          transferCompletionDatetime
          transferFrequency
          transferTiming
        }
      }
    }
  }
`;

export const sendVerificationCodeForP2p = gql`
  mutation sendVerificationCodeForP2p {
    sendVerificationCodeForP2p {
      ok
      message
      code
    }
  }
`;

export const getExternalTermsAndConditions = gql`
  mutation externalTermsAndConditions(
    $currencyCloudAccepted: Boolean
    $dwollaAccepted: Boolean
  ) {
    externalTermsAndConditions(
      currencyCloudAccepted: $currencyCloudAccepted
      dwollaAccepted: $dwollaAccepted
    ) {
      ok
      message
    }
  }
`;

export const deletePayee = gql`
  mutation deletePayee($payeeId: ID!) {
    deletePayee(payeeId: $payeeId) {
      ok
      message
    }
  }
`;
