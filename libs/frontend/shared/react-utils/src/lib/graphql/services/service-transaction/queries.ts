/** @format **/
import { gql } from '@apollo/client';

export const getPayeeList = gql`
  query getPayeeList {
    payeeList {
      mostFrequentlySent {
        id
        nickname
        tendId
        country
        memberId
      }
      mostRecent {
        id
        nickname
        transactionDate
        note
        amount
        currency
        memberId
      }
      p2pRequest {
        id
        nickname
        createdDate
        amount
        currency
        memberId
      }
    }
  }
`;

export const getPayee = gql`
  query getPayee($queryString: String) {
    getPayee(queryString: $queryString) {
      newPayeeType
      payees {
        nickname
        memberId
        tendId
        country
      }
    }
  }
`;

export const getAccounts = gql`
  query getAccounts {
    getAccounts {
      accountId
      accountNumber
      accountType
      availableBalance
      balanceOwed
      creditLimitExceeded
      currentBalance
      holdBalance
      interestEarned
      isHold
      minimumDue
      paymentDueDate
      pendingBalance
      routingNumber
      savingsApy
      status
    }
  }
`;

export const getP2PFxRate = gql`
  query p2pFxRate(
    $amount: Decimal!
    $fromCurrency: Currency!
    $toCurrency: Currency
  ) {
    p2pFxRate(
      amount: $amount
      fromCurrency: $fromCurrency
      toCurrency: $toCurrency
    ) {
      amount
      rate
      senderAccount {
        accountName
        accountBalance
      }
    }
  }
`;

export const getTransactions = gql`
  query getTransactions(
    $accountId: String!
    $amountMin: Float
    $amountMax: Float
    $startDate: Date
    $endDate: Date
    $isCredit: Boolean
    $keywords: [String]
  ) {
    transactions(
      accountId: $accountId
      amountMin: $amountMin
      amountMax: $amountMax
      startDate: $startDate
      endDate: $endDate
      isCredit: $isCredit
      keywords: $keywords
    ) {
      __typename
      ... on NBKCTransactionListType {
        recent {
          transactionId
          customerId
          amount
          description {
            note
            category
          }
          createdDate
          availableDate
          settledDate
          status
          isCredit
          friendlyDescription
        }
      }
    }
  }
`;

export const getP2pMembers = gql`
  query getP2pMembers {
    p2pMembers {
      memberId
      nickname
      tendId
      country
      numberOfTransactions
    }
  }
`;
