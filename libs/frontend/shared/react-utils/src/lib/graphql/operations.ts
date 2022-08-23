export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
};

export interface AbstractMemberType {
  __typename?: 'AbstractMemberType';
  /** accountStatus */
  accountStatus?: Maybe<Scalars['String']>;
  /** applicationProgress */
  applicationProgress?: Maybe<Scalars['String']>;
  /** applicationStatus */
  applicationStatus?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  phone?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum AccountLocation {
  Internal = 'INTERNAL',
  External = 'EXTERNAL'
}

export interface AccountOutputType {
  __typename?: 'AccountOutputType';
  accountId?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  balanceOwed?: Maybe<Scalars['Decimal']>;
  currentBalance?: Maybe<Scalars['Decimal']>;
  holdBalance?: Maybe<Scalars['Decimal']>;
  pendingBalance?: Maybe<Scalars['Decimal']>;
  availableBalance?: Maybe<Scalars['Decimal']>;
  minimumDue?: Maybe<Scalars['Decimal']>;
  routingNumber?: Maybe<Scalars['String']>;
  isHold?: Maybe<Scalars['Boolean']>;
  interestEarned?: Maybe<Scalars['String']>;
  creditLimitExceeded?: Maybe<Scalars['Boolean']>;
  savingsApy?: Maybe<Scalars['String']>;
  paymentDueDate?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum AccountType {
  Dda = 'DDA',
  Ssa = 'SSA',
  Loc = 'LOC'
}

export interface AppVersionOutputType {
  __typename?: 'AppVersionOutputType';
  updateStatus?: Maybe<Scalars['String']>;
  newVersion?: Maybe<Scalars['String']>;
  updateUrl?: Maybe<Scalars['String']>;
}

export interface BankType {
  __typename?: 'BankType';
  /** apiUrl */
  apiUrl?: Maybe<Scalars['String']>;
  /** billPayProvider */
  billPayProvider?: Maybe<Scalars['String']>;
  /** country */
  countryId?: Maybe<Scalars['ID']>;
  /** createdDate */
  createdDate?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** savingsApy */
  savingsApy?: Maybe<Scalars['Float']>;
  /** shortName */
  shortName?: Maybe<Scalars['String']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['DateTime']>;
}

export interface CardInfoOutputType {
  __typename?: 'CardInfoOutputType';
  isCardOrdered?: Maybe<Scalars['Boolean']>;
  cardStatus?: Maybe<Scalars['String']>;
}

export interface ChangeForgottenPassword {
  __typename?: 'ChangeForgottenPassword';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ChangePassword {
  __typename?: 'ChangePassword';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface CheckTendIdUnique {
  __typename?: 'CheckTendIdUnique';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Returns True if unique, false otherwise */
  isUnique?: Maybe<Scalars['Boolean']>;
  /** Returns True if it already exists in user tend id's history, false otherwise */
  belongsToUser?: Maybe<Scalars['Boolean']>;
}

export interface CoreProAccountInfoOutputType {
  __typename?: 'CoreProAccountInfoOutputType';
  member?: Maybe<SafeMemberType>;
  accountStatus?: Maybe<Scalars['String']>;
  card?: Maybe<CardInfoOutputType>;
}

export enum Country {
  Us = 'US',
  Mx = 'MX'
}

export interface CreateLogin {
  __typename?: 'CreateLogin';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Member's Access Token */
  accessToken?: Maybe<Scalars['String']>;
  /** Member's Refresh Token */
  refreshToken?: Maybe<Scalars['String']>;
  member?: Maybe<MemberType>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface CreateTransactionMutation {
  __typename?: 'CreateTransactionMutation';
  /** Response status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Response message */
  message?: Maybe<Scalars['String']>;
  transfer?: Maybe<CreateTransferUnion>;
}

export interface CreateTransferInputType {
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<TendCurrency>;
  otp?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  transferType?: Maybe<TransactionTypeEnum>;
  fromId?: Maybe<Scalars['String']>;
  toId?: Maybe<Scalars['String']>;
  toEmail?: Maybe<Scalars['String']>;
  frequency?: Maybe<InvexTransferFrequency>;
  transferDate?: Maybe<Scalars['DateTime']>;
  receiver?: Maybe<ReceiverInputType>;
  sender?: Maybe<SenderInputType>;
  transferReference?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  toAccountId?: Maybe<Scalars['Int']>;
}

export type CreateTransferUnion = InvexBetweenAccountsOutputType | NbkcBetweenAccountsOutputType | NbkcInternal2InternalOutputType | NbkcInternal2ExternalOutputType | CrossBorderOutputType;

export interface CreateUpdateTendId {
  __typename?: 'CreateUpdateTendId';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Member's current Tend ID */
  tendId?: Maybe<Scalars['String']>;
}

export interface CrossBorderOutputType {
  __typename?: 'CrossBorderOutputType';
  transactionId?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  toAccountId?: Maybe<Scalars['Int']>;
  fromAccountLocation?: Maybe<AccountLocation>;
  toAccountLocation?: Maybe<AccountLocation>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<TendCurrency>;
  scheduledTransferDate?: Maybe<Scalars['Date']>;
  transferCompletionDatetime?: Maybe<Scalars['DateTime']>;
  transferFrequency?: Maybe<TransferFrequency>;
  transferTiming?: Maybe<TransferTiming>;
}

/** An enumeration. */
export enum Currency {
  Usd = 'USD',
  Mxn = 'MXN'
}




export interface DeletePayeeMutation {
  __typename?: 'DeletePayeeMutation';
  /** Response status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Response message */
  message?: Maybe<Scalars['String']>;
}

export interface ExternalAccount {
  __typename?: 'ExternalAccount';
  accountId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  routingNumber?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  currency?: Maybe<TendCurrency>;
  availableBalance?: Maybe<Scalars['Float']>;
}

export interface GenerateLedgerReportMutation {
  __typename?: 'GenerateLedgerReportMutation';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface InitiateXBorderMutation {
  __typename?: 'InitiateXBorderMutation';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface InvexBetweenAccountsOutputType {
  __typename?: 'InvexBetweenAccountsOutputType';
  amount?: Maybe<Scalars['Decimal']>;
  creditorAccountId?: Maybe<Scalars['String']>;
  debtorAccountId?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['String']>;
  transferDate?: Maybe<Scalars['DateTime']>;
  transferId?: Maybe<Scalars['String']>;
  transferType?: Maybe<Scalars['String']>;
}

export interface InvexTransactionItem {
  __typename?: 'InvexTransactionItem';
  createdDate?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  status?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
}

export interface InvexTransactionListType {
  __typename?: 'InvexTransactionListType';
  posted?: Maybe<Array<Maybe<InvexTransactionItem>>>;
  pending?: Maybe<Array<Maybe<InvexTransactionItem>>>;
}

/** An enumeration. */
export enum InvexTransferFrequency {
  Once = 'ONCE',
  Daily = 'DAILY',
  Weekly = 'WEEKLY',
  Biweekly = 'BIWEEKLY',
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY'
}

export interface LoginMember {
  __typename?: 'LoginMember';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Member's Access Token */
  accessToken?: Maybe<Scalars['String']>;
  /** Member's Refresh Token */
  refreshToken?: Maybe<Scalars['String']>;
  /** Determines this member is just finished the onboarding process. */
  newlyCreated?: Maybe<Scalars['Boolean']>;
  member?: Maybe<MemberType>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface LogoutMember {
  __typename?: 'LogoutMember';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface MemberDeviceType {
  __typename?: 'MemberDeviceType';
  active?: Maybe<Scalars['Boolean']>;
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** deviceId */
  deviceId?: Maybe<Scalars['ID']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  /** ipAddress */
  ipAddress?: Maybe<Scalars['String']>;
  /** lastOpened */
  lastOpened?: Maybe<Scalars['DateTime']>;
  /** memberId */
  memberId?: Maybe<Scalars['ID']>;
  /** updatedAt */
  updatedAt?: Maybe<Scalars['DateTime']>;
  deviceUuid?: Maybe<Scalars['String']>;
}

export interface MemberType {
  __typename?: 'MemberType';
  /** accountLevel */
  accountLevel?: Maybe<Scalars['String']>;
  /** accountStatus */
  accountStatus?: Maybe<Scalars['String']>;
  /** applicationProgress */
  applicationProgress?: Maybe<Scalars['String']>;
  /** applicationStatus */
  applicationStatus?: Maybe<Scalars['String']>;
  /** bankApplicationDate */
  bankApplicationDate?: Maybe<Scalars['DateTime']>;
  /** bank */
  bankId?: Maybe<Scalars['ID']>;
  /** bankToken */
  bankToken?: Maybe<Scalars['String']>;
  /** companyCode */
  companyCode?: Maybe<Scalars['String']>;
  /** corporateTncAccepted */
  corporateTncAccepted?: Maybe<Scalars['Boolean']>;
  /** country */
  countryId?: Maybe<Scalars['ID']>;
  /** createdDate */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** customerId */
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** experianId */
  experianId?: Maybe<Scalars['String']>;
  /** friendEmail */
  friendEmail?: Maybe<Scalars['String']>;
  /** sourceOfFunds */
  fundingSource?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  /** identityNumber */
  identityNumber?: Maybe<Scalars['String']>;
  /** identityState */
  identityState?: Maybe<Scalars['String']>;
  /** identityType */
  identityType?: Maybe<Scalars['String']>;
  /** inviterCode */
  inviterCode?: Maybe<Scalars['String']>;
  /** inviter */
  inviterId?: Maybe<Scalars['ID']>;
  /** isActive */
  isActive?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  /** lastLoggedIn */
  lastLoggedIn?: Maybe<Scalars['DateTime']>;
  /** lastLoginAttemptDate */
  lastLoginAttemptDate?: Maybe<Scalars['DateTime']>;
  /** loginAttemptNumber */
  loginAttemptNumber?: Maybe<Scalars['String']>;
  /** memberType */
  memberType?: Maybe<Scalars['String']>;
  /** membershipCode */
  membershipCode?: Maybe<Scalars['String']>;
  /** membershipCodeId */
  membershipCodeId?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['DateTime']>;
  /** primaryDocumentTypeUploaded */
  uploadedPrimaryDocumentType?: Maybe<Scalars['String']>;
  /** usedInviterTendId */
  usedInviterTendId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  bank?: Maybe<BankType>;
  tendId?: Maybe<Scalars['String']>;
}

export interface MostFrequentlySentItem {
  __typename?: 'MostFrequentlySentItem';
  id?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  tendId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
}

export interface MostRecentItem {
  __typename?: 'MostRecentItem';
  id?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<Scalars['String']>;
  tendId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
  transactionDate?: Maybe<Scalars['Date']>;
}

export interface NbkcBetweenAccountsOutputType {
  __typename?: 'NBKCBetweenAccountsOutputType';
  transactionId?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  toAccountId?: Maybe<Scalars['Int']>;
  fromAccountLocation?: Maybe<AccountLocation>;
  toAccountLocation?: Maybe<AccountLocation>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<TendCurrency>;
  scheduledTransferDate?: Maybe<Scalars['Date']>;
  transferCompletionDatetime?: Maybe<Scalars['DateTime']>;
  transferFrequency?: Maybe<TransferFrequency>;
  transferTiming?: Maybe<TransferTiming>;
}

export interface NbkcInternal2ExternalOutputType {
  __typename?: 'NBKCInternal2ExternalOutputType';
  transactionId?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  toAccountId?: Maybe<Scalars['Int']>;
  fromAccountLocation?: Maybe<AccountLocation>;
  toAccountLocation?: Maybe<AccountLocation>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<TendCurrency>;
  scheduledTransferDate?: Maybe<Scalars['Date']>;
  transferCompletionDatetime?: Maybe<Scalars['DateTime']>;
  transferFrequency?: Maybe<TransferFrequency>;
  transferTiming?: Maybe<TransferTiming>;
}

export interface NbkcInternal2InternalOutputType {
  __typename?: 'NBKCInternal2InternalOutputType';
  /** Recipient Masked Name */
  recipientName?: Maybe<Scalars['String']>;
}

export interface NbkcTransactionItem {
  __typename?: 'NBKCTransactionItem';
  transactionId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  description?: Maybe<TransactionDescriptionType>;
  createdDate?: Maybe<Scalars['Date']>;
  availableDate?: Maybe<Scalars['Date']>;
  settledDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  isCredit?: Maybe<Scalars['Boolean']>;
  friendlyDescription?: Maybe<Scalars['String']>;
}

export interface NbkcTransactionListType {
  __typename?: 'NBKCTransactionListType';
  pending?: Maybe<Array<Maybe<NbkcTransactionItem>>>;
  recent?: Maybe<Array<Maybe<NbkcTransactionItem>>>;
  scheduled?: Maybe<Array<Maybe<NbkcTransactionItem>>>;
}

export interface P2PFxRateOutputType {
  __typename?: 'P2PFxRateOutputType';
  amount?: Maybe<Scalars['Decimal']>;
  rate?: Maybe<Scalars['Decimal']>;
  senderAccount?: Maybe<SenderAccount>;
}

export interface P2PRequestItem {
  __typename?: 'P2PRequestItem';
  id?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Date']>;
}

export interface PayeeInitialList {
  __typename?: 'PayeeInitialList';
  p2pRequest?: Maybe<Array<Maybe<P2PRequestItem>>>;
  mostFrequentlySent?: Maybe<Array<Maybe<MostFrequentlySentItem>>>;
  mostRecent?: Maybe<Array<Maybe<MostRecentItem>>>;
}

export interface PayeeSearchItem {
  __typename?: 'PayeeSearchItem';
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  tendId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
}

export interface PayeeSearchOutputType {
  __typename?: 'PayeeSearchOutputType';
  newPayeeType?: Maybe<Scalars['String']>;
  payees?: Maybe<Array<Maybe<PayeeSearchItem>>>;
}

export enum Platform {
  Ios = 'IOS',
  Android = 'ANDROID',
  Web = 'WEB'
}

/** An enumeration. */
export enum PlatformType {
  Apns = 'APNS',
  ApnsSandbox = 'APNS_SANDBOX',
  Gcm = 'GCM'
}

export interface ReceiverInputType {
  id?: Maybe<Scalars['Int']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  maternalLastName?: Maybe<Scalars['String']>;
  paternalLastName?: Maybe<Scalars['String']>;
  rfc?: Maybe<Scalars['String']>;
}

export interface RecipientType {
  customerId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  fxRate?: Maybe<Scalars['String']>;
}

export interface RefreshToken {
  __typename?: 'RefreshToken';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Member's Access Token */
  accessToken?: Maybe<Scalars['String']>;
  /** Member's Refresh Token */
  refreshToken?: Maybe<Scalars['String']>;
  member?: Maybe<MemberType>;
}

export interface RegisterDevice {
  __typename?: 'RegisterDevice';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface RequestResetPassword {
  __typename?: 'RequestResetPassword';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Member's id */
  memberId?: Maybe<Scalars['String']>;
  /** Abstract Member Object */
  member?: Maybe<AbstractMemberType>;
  /** Member's bank identifier */
  bankIdentifier?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ResetPassword {
  __typename?: 'ResetPassword';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Time based token */
  tempToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ResetPasswordWithOtp {
  __typename?: 'ResetPasswordWithOTP';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Time based token */
  tempToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ResetTendId {
  __typename?: 'ResetTendId';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface RootMutation {
  __typename?: 'RootMutation';
  changeForgottenPassword?: Maybe<ChangeForgottenPassword>;
  changePassword?: Maybe<ChangePassword>;
  checkTendIdUnique?: Maybe<CheckTendIdUnique>;
  createLogin?: Maybe<CreateLogin>;
  createTransaction?: Maybe<CreateTransactionMutation>;
  createUpdateTendId?: Maybe<CreateUpdateTendId>;
  deletePayee?: Maybe<DeletePayeeMutation>;
  generateLedgerReport?: Maybe<GenerateLedgerReportMutation>;
  initiateXBorder?: Maybe<InitiateXBorderMutation>;
  loginMember?: Maybe<LoginMember>;
  logoutMember?: Maybe<LogoutMember>;
  refreshToken?: Maybe<RefreshToken>;
  registerDevice?: Maybe<RegisterDevice>;
  requestResetPassword?: Maybe<RequestResetPassword>;
  resetPassword?: Maybe<ResetPassword>;
  resetPasswordWithOtp?: Maybe<ResetPasswordWithOtp>;
  resetTendId?: Maybe<ResetTendId>;
  sendP2pVerificationCode?: Maybe<SendP2pVerificationCode>;
  testCreditRecipient?: Maybe<TestCreditRecipientMutation>;
  updateMemberDevices?: Maybe<UpdateMemberDevices>;
  /**
   * This mutation serves for lambda function.
   * It decrypts the encrypted information
   * and validates the user. Returns a new token.
   */
  validateUser?: Maybe<ValidateUser>;
}


export type RootMutationChangeForgottenPasswordArgs = {
  memberId: Scalars['String'];
  newPassword?: Maybe<Scalars['String']>;
  tempToken?: Maybe<Scalars['String']>;
};


export type RootMutationChangePasswordArgs = {
  newPassword?: Maybe<Scalars['String']>;
  oldPassword?: Maybe<Scalars['String']>;
};


export type RootMutationCheckTendIdUniqueArgs = {
  memberId?: Maybe<Scalars['String']>;
  tendId?: Maybe<Scalars['String']>;
};


export type RootMutationCreateLoginArgs = {
  email?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type RootMutationCreateTransactionArgs = {
  transfer?: Maybe<CreateTransferInputType>;
};


export type RootMutationCreateUpdateTendIdArgs = {
  tendId?: Maybe<Scalars['String']>;
};


export type RootMutationDeletePayeeArgs = {
  payeeId?: Maybe<Scalars['ID']>;
};


export type RootMutationGenerateLedgerReportArgs = {
  endDate?: Maybe<Scalars['String']>;
  force?: Maybe<Scalars['Boolean']>;
};


export type RootMutationInitiateXBorderArgs = {
  amount?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  receiverMemberId?: Maybe<Scalars['String']>;
};


export type RootMutationLoginMemberArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


export type RootMutationRegisterDeviceArgs = {
  bundleId?: Maybe<Scalars['String']>;
  platform?: Maybe<PlatformType>;
  token?: Maybe<Scalars['String']>;
};


export type RootMutationRequestResetPasswordArgs = {
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


export type RootMutationResetPasswordArgs = {
  cardNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  memberId: Scalars['String'];
  ssnNumber?: Maybe<Scalars['String']>;
};


export type RootMutationResetPasswordWithOtpArgs = {
  code?: Maybe<Scalars['String']>;
  memberId: Scalars['String'];
};


export type RootMutationTestCreditRecipientArgs = {
  recipient?: Maybe<RecipientType>;
  sender?: Maybe<SenderType>;
  transactionType?: Maybe<Scalars['String']>;
};


export type RootMutationUpdateMemberDevicesArgs = {
  deviceOs?: Maybe<Scalars['String']>;
  deviceUuid?: Maybe<Scalars['String']>;
};


export type RootMutationValidateUserArgs = {
  phrase: Scalars['String'];
};

export interface RootQuery {
  __typename?: 'RootQuery';
  appVersion?: Maybe<AppVersionOutputType>;
  coreproAccountInfo?: Maybe<CoreProAccountInfoOutputType>;
  externalAccount?: Maybe<ExternalAccount>;
  getAccounts?: Maybe<Array<Maybe<AccountOutputType>>>;
  getPayee?: Maybe<PayeeSearchOutputType>;
  getTransaction?: Maybe<TransactionQueryType>;
  getTransactions?: Maybe<Array<Maybe<TransactionQueryType>>>;
  me?: Maybe<MemberType>;
  memberDevices?: Maybe<Array<Maybe<MemberDeviceType>>>;
  p2pFxRate?: Maybe<P2PFxRateOutputType>;
  payeeList?: Maybe<PayeeInitialList>;
  tendId?: Maybe<Scalars['String']>;
  transactions?: Maybe<TransactionListUnion>;
}


export type RootQueryAppVersionArgs = {
  currentVersion: Scalars['String'];
  platform: Platform;
  country: Country;
  deviceId?: Maybe<Scalars['String']>;
};


export type RootQueryCoreproAccountInfoArgs = {
  email?: Maybe<Scalars['String']>;
};


export type RootQueryGetPayeeArgs = {
  queryString: Scalars['String'];
};


export type RootQueryGetTransactionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type RootQueryGetTransactionsArgs = {
  currency?: Maybe<Scalars['String']>;
};


export type RootQueryP2pFxRateArgs = {
  amount?: Maybe<Scalars['Decimal']>;
  fromCurrency?: Maybe<Currency>;
  toCurrency?: Maybe<Currency>;
};


export type RootQueryTransactionsArgs = {
  accountId: Scalars['String'];
  accountType?: Maybe<AccountType>;
  recordNumber?: Maybe<Scalars['Int']>;
  amountMin?: Maybe<Scalars['Float']>;
  amountMax?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  isCredit?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export interface SafeBankType {
  __typename?: 'SafeBankType';
  identifier?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** shortName */
  shortName?: Maybe<Scalars['String']>;
}

export interface SafeMemberType {
  __typename?: 'SafeMemberType';
  /** accountLevel */
  accountLevel?: Maybe<Scalars['String']>;
  /** accountStatus */
  accountStatus?: Maybe<Scalars['String']>;
  /** applicationProgress */
  applicationProgress?: Maybe<Scalars['String']>;
  /** applicationStatus */
  applicationStatus?: Maybe<Scalars['String']>;
  /** bank */
  bankId?: Maybe<Scalars['ID']>;
  /** country */
  countryId?: Maybe<Scalars['ID']>;
  /** customerId */
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  bank?: Maybe<SafeBankType>;
}

export interface SendP2pVerificationCode {
  __typename?: 'SendP2pVerificationCode';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Verification Code */
  code?: Maybe<Scalars['String']>;
}

export interface SenderAccount {
  __typename?: 'SenderAccount';
  accountName?: Maybe<Scalars['String']>;
  accountBalance?: Maybe<Scalars['Decimal']>;
}

export interface SenderInputType {
  accountNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}

export interface SenderType {
  customerId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  currency?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  paternalLastName?: Maybe<Scalars['String']>;
  maternalLastName?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum TendCurrency {
  Usd = 'USD'
}

export interface TendErrorType {
  __typename?: 'TendErrorType';
  name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
}

export interface TestCreditRecipientMutation {
  __typename?: 'TestCreditRecipientMutation';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface TransactionDescriptionType {
  __typename?: 'TransactionDescriptionType';
  note?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
}

export type TransactionListUnion = NbkcTransactionListType | InvexTransactionListType;

export interface TransactionQueryType {
  __typename?: 'TransactionQueryType';
  id: Scalars['ID'];
  transactionId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  friendlyDescription?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactionCategory?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  senderAccountId?: Maybe<Scalars['String']>;
  receiverAccountId?: Maybe<Scalars['String']>;
  typeCode?: Maybe<Scalars['String']>;
  transactionStatus?: Maybe<Scalars['String']>;
  isCredit?: Maybe<Scalars['Boolean']>;
  availableDate?: Maybe<Scalars['DateTime']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  settledDate?: Maybe<Scalars['DateTime']>;
  updatedDate?: Maybe<Scalars['DateTime']>;
  payeeId?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum TransactionTypeEnum {
  BetweenAccounts = 'BETWEEN_ACCOUNTS',
  Internal = 'INTERNAL',
  InternalToInternal = 'INTERNAL_TO_INTERNAL',
  InternalToExternal = 'INTERNAL_TO_EXTERNAL',
  CrossBorder = 'CROSS_BORDER'
}

/** An enumeration. */
export enum TransferFrequency {
  Once = 'ONCE',
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY'
}

/** An enumeration. */
export enum TransferTiming {
  Immediate = 'IMMEDIATE',
  Scheduled = 'SCHEDULED',
  Recurring = 'RECURRING'
}

export interface UpdateMemberDevices {
  __typename?: 'UpdateMemberDevices';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

/**
 * This mutation serves for lambda function.
 * It decrypts the encrypted information
 * and validates the user. Returns a new token.
 */
export interface ValidateUser {
  __typename?: 'ValidateUser';
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request status */
  message?: Maybe<Scalars['String']>;
  /** Member's Onboard Token */
  onboardToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}
