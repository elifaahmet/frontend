import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
};



export interface AtmAddressComponentsType {
  longName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
}

export interface AtmAddressType {
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
}

export interface AtmCoordinatesType {
  /** Latitude */
  lat?: Maybe<Scalars['Float']>;
  /** Longitude */
  lng?: Maybe<Scalars['Float']>;
}

export interface AtmType {
  /** ATM ID */
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  address?: Maybe<AtmAddressType>;
  coordinates?: Maybe<AtmCoordinatesType>;
  /** Address Components (Google Place API) */
  addressComponents?: Maybe<Array<Maybe<AtmAddressComponentsType>>>;
}

export interface AbstractMemberType {
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

export interface AcceptP2pRequest {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface AccountBalanceRowInputType {
  headerId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerTag?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  accountTag?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  accountStatus?: Maybe<Scalars['String']>;
  accountBalance?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  closedDate?: Maybe<Scalars['String']>;
  targetDate?: Maybe<Scalars['String']>;
  targetAmount?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  targetMetDate?: Maybe<Scalars['String']>;
  targetMetPercent?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  primaryCustomerId?: Maybe<Scalars['Int']>;
  interestRate?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  availableBalance?: Maybe<Scalars['String']>;
  pendingBalance?: Maybe<Scalars['String']>;
  accountLockCode?: Maybe<Scalars['String']>;
  accountLockEffectiveDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum AccountLevel {
  Full = 'FULL',
  Express = 'EXPRESS'
}

export interface AccountLevelInputType {
  level?: Maybe<AccountLevel>;
}

/** An enumeration. */
export enum AccountLocation {
  Internal = 'INTERNAL',
  External = 'EXTERNAL'
}

export interface AccountType {
  accountId?: Maybe<Scalars['Int']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  currentBalance?: Maybe<Scalars['Decimal']>;
  availableBalance?: Maybe<Scalars['Decimal']>;
  holdBalance?: Maybe<Scalars['Decimal']>;
  minimumDue?: Maybe<Scalars['Decimal']>;
  pendingBalance?: Maybe<Scalars['Decimal']>;
  routingNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  isHold?: Maybe<Scalars['Boolean']>;
  interestEarned?: Maybe<Scalars['Decimal']>;
  creditLimitExceeded?: Maybe<Scalars['Boolean']>;
}

export interface ActivateOffer {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface AddMemberEmail {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<MemberType>;
}

export interface AddP2pContact {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  contact?: Maybe<P2pContactType>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface AddressInfoInputType {
  /** Member's Address Type */
  addressType?: Maybe<Scalars['String']>;
  /** Member's Address Property Type */
  propertyType?: Maybe<Scalars['String']>;
  /** Member's ZIP Code */
  zipCode?: Maybe<Scalars['String']>;
  /** Member's State */
  state?: Maybe<Scalars['String']>;
  /** Member's Municipality */
  municipality?: Maybe<Scalars['String']>;
  /** Member's City */
  city?: Maybe<Scalars['String']>;
  /** Member's Suburb */
  suburb?: Maybe<Scalars['String']>;
  /** Member's Suburb */
  street?: Maybe<Scalars['String']>;
  /** Member's Outdoor Number */
  outdoorNumber?: Maybe<Scalars['String']>;
  /** Member's Interior Number */
  interiorNumber?: Maybe<Scalars['String']>;
  /** Member's Date of Residence ?MM/DD/YYYY? */
  dateOfResidence?: Maybe<Scalars['String']>;
}

export interface AddressInputType {
  /** Address Line: Maximum line is 4. Each line is limited by 100. */
  addressLine?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Address Types */
  addressType?: Maybe<Q2AddressType>;
  /** Member's City */
  city?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Address ID */
  id?: Maybe<Scalars['String']>;
  /** Member's Address Line - 1 */
  line1?: Maybe<Scalars['String']>;
  /** Member's Address Line - 2 */
  line2?: Maybe<Scalars['String']>;
  /** Postal Code */
  postalCode?: Maybe<Scalars['String']>;
  /** Member's State */
  state?: Maybe<Scalars['String']>;
  /** Member's ZIP Code */
  zipCode?: Maybe<Scalars['String']>;
}

export interface AddressOutputType {
  /** Address Line: Maximum line is 4. Each line is limited by 100. */
  addressLine?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Address Types */
  addressType?: Maybe<Q2AddressType>;
  /** Member's City */
  city?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Address ID */
  id?: Maybe<Scalars['String']>;
  /** Member's Address Line - 1 */
  line1?: Maybe<Scalars['String']>;
  /** Member's Address Line - 2 */
  line2?: Maybe<Scalars['String']>;
  /** Postal Code */
  postalCode?: Maybe<Scalars['String']>;
  /** Member's State */
  state?: Maybe<Scalars['String']>;
  /** Member's ZIP Code */
  zipCode?: Maybe<Scalars['String']>;
}

export interface AppVersionOutputType {
  updateStatus?: Maybe<Scalars['String']>;
  newVersion?: Maybe<Scalars['String']>;
  updateUrl?: Maybe<Scalars['String']>;
}

export interface ApplicationStatusTime {
  applicationApproved?: Maybe<Scalars['String']>;
  applicationDenied?: Maybe<Scalars['String']>;
  applicationOnHold?: Maybe<Scalars['String']>;
}

export interface ApplyInputType {
  /** SSN of Member */
  ssn?: Maybe<Scalars['String']>;
  /** DOB of Member */
  dob?: Maybe<Scalars['Date']>;
  /** First Name of Member */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name of Member */
  lastName?: Maybe<Scalars['String']>;
  /** Address Line 1 of Member */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 of Member */
  address2?: Maybe<Scalars['String']>;
  /** City of Member */
  city?: Maybe<Scalars['String']>;
  /** State of Member */
  state?: Maybe<Scalars['String']>;
  /** Zip Code of Member */
  zipCode?: Maybe<Scalars['String']>;
  identityType?: Maybe<IdentityType>;
  identityState?: Maybe<Scalars['String']>;
  identityNumber?: Maybe<Scalars['String']>;
  armedForceRelation?: Maybe<ArmedForceRelation>;
  armedForceDetails?: Maybe<ArmedForceDetails>;
}

export interface ApplyMembershipCode {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<SafeMemberType>;
}

export interface ApplyOnboardMember {
  member?: Maybe<MemberType>;
  accounts?: Maybe<Array<Maybe<AccountType>>>;
  affinity?: Maybe<Scalars['Boolean']>;
  experian?: Maybe<Scalars['Boolean']>;
  dueDiligence?: Maybe<Scalars['Boolean']>;
}

export interface ArmedForceDetails {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  /** DOB of Dependent Armed Forces */
  dob?: Maybe<Scalars['Date']>;
}

/** An enumeration. */
export enum ArmedForceRelation {
  Member = 'MEMBER',
  Dependent = 'DEPENDENT',
  Neither = 'NEITHER'
}

export interface AutoCompletedAddressType {
  /** Address's Street Line */
  streetLine?: Maybe<Scalars['String']>;
  /** Address's Street Line 2 */
  secondary?: Maybe<Scalars['String']>;
  /** Address's City */
  city?: Maybe<Scalars['String']>;
  /** Address's State */
  state?: Maybe<Scalars['String']>;
  /** Address's Zip Code */
  zipcode?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum BankIdentifier {
  Invex = 'INVEX',
  Nbkc = 'NBKC'
}

export interface BankType {
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

export interface BeneficiaryInputType {
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Paternal Last Name */
  paternalLastName?: Maybe<Scalars['String']>;
  /** Maternal Last Name */
  maternalLastName?: Maybe<Scalars['String']>;
  /** Date of Birth ?MM/DD/YYYY? */
  dateOfBirth?: Maybe<Scalars['String']>;
  /** Beneficary's Relationship with Member */
  relationship?: Maybe<Scalars['String']>;
}

export interface BulkCreateBalanceNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface BulkCreateCardNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface BulkCreateCustomerNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface BulkCreateCustomerRegisterNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface BulkCreateEventNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface BulkCreatePostedTransactionNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface BulkCreateTransferHistory {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
}

export interface CancelP2pRequest {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface CardInfoOutputType {
  isCardOrdered?: Maybe<Scalars['Boolean']>;
  cardStatus?: Maybe<Scalars['String']>;
}

export interface CardNotificationRowInputType {
  headerId?: Maybe<Scalars['Int']>;
  userEventId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  cardId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
  authorizationTransactionId?: Maybe<Scalars['String']>;
  requestTypeCode?: Maybe<Scalars['String']>;
  reserved?: Maybe<Scalars['String']>;
  merchantCategoryCode?: Maybe<Scalars['String']>;
  merchantGroupTypeCode?: Maybe<Scalars['String']>;
  cashbackAmount?: Maybe<Scalars['String']>;
  surchargeAmount?: Maybe<Scalars['String']>;
  cashDepositAmount?: Maybe<Scalars['String']>;
  checkDepositAmount?: Maybe<Scalars['String']>;
  terminalId?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  merchantLocation?: Maybe<Scalars['String']>;
  merchantCity?: Maybe<Scalars['String']>;
  merchantStateCode?: Maybe<Scalars['String']>;
  merchantZipCode?: Maybe<Scalars['String']>;
  merchantCountryCode?: Maybe<Scalars['String']>;
  panEntryModeTypeCode?: Maybe<Scalars['String']>;
  pinEntryModeTypeCode?: Maybe<Scalars['String']>;
  cardHolderPresenceTypeCode?: Maybe<Scalars['String']>;
  cardPresenceTypeCode?: Maybe<Scalars['String']>;
  terminalUnattendedTypeCode?: Maybe<Scalars['String']>;
  terminalPremisesTypeCode?: Maybe<Scalars['String']>;
  customerTag?: Maybe<Scalars['String']>;
  cardTag?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  availableDate?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  customField1?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  denialReason?: Maybe<Scalars['String']>;
  feeCode?: Maybe<Scalars['String']>;
  feeDescription?: Maybe<Scalars['String']>;
  friendlyDescription?: Maybe<Scalars['String']>;
  fromAccountAmount?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  fromAccountNumberMasked?: Maybe<Scalars['String']>;
  fromAvailableAmount?: Maybe<Scalars['String']>;
  fromCategory?: Maybe<Scalars['String']>;
  fromCreatedDate?: Maybe<Scalars['String']>;
  fromCustomField1?: Maybe<Scalars['String']>;
  fromCustomField2?: Maybe<Scalars['String']>;
  fromCustomField3?: Maybe<Scalars['String']>;
  fromCustomField4?: Maybe<Scalars['String']>;
  fromCustomField5?: Maybe<Scalars['String']>;
  fromLegalName1?: Maybe<Scalars['String']>;
  fromLegalName2?: Maybe<Scalars['String']>;
  fromName?: Maybe<Scalars['String']>;
  fromPendingAmount?: Maybe<Scalars['String']>;
  fromPrimaryCustomerId?: Maybe<Scalars['Int']>;
  fromSubCategory?: Maybe<Scalars['String']>;
  fromTag?: Maybe<Scalars['String']>;
  institutionName?: Maybe<Scalars['String']>;
  masterId?: Maybe<Scalars['String']>;
  modifiedById?: Maybe<Scalars['Int']>;
  payloadTypeId?: Maybe<Scalars['Int']>;
  settledDate?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
  subTypeCode?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  toAccountAmount?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toAccountNumberMasked?: Maybe<Scalars['String']>;
  toAvailableAmount?: Maybe<Scalars['String']>;
  toCategory?: Maybe<Scalars['String']>;
  toCreatedDate?: Maybe<Scalars['String']>;
  toCustomField1?: Maybe<Scalars['String']>;
  toCustomField2?: Maybe<Scalars['String']>;
  toCustomField3?: Maybe<Scalars['String']>;
  toCustomField4?: Maybe<Scalars['String']>;
  toCustomField5?: Maybe<Scalars['String']>;
  toLegalName1?: Maybe<Scalars['String']>;
  toLegalName2?: Maybe<Scalars['String']>;
  toName?: Maybe<Scalars['String']>;
  toPendingAmount?: Maybe<Scalars['String']>;
  toPrimaryCustomerId?: Maybe<Scalars['Int']>;
  toSubCategory?: Maybe<Scalars['String']>;
  toTag?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeCode?: Maybe<Scalars['String']>;
  eventTypeId?: Maybe<Scalars['String']>;
  networkProviderTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
}

export interface CardNotificationRowOutputType {
  CashbackAmount?: Maybe<Scalars['Float']>;
  SurchargeAmount?: Maybe<Scalars['Float']>;
  CashDepositAmount?: Maybe<Scalars['Float']>;
  CheckDepositAmount?: Maybe<Scalars['Float']>;
  Amount?: Maybe<Scalars['Float']>;
  FromAccountAmount?: Maybe<Scalars['Float']>;
  FromAvailableAmount?: Maybe<Scalars['Float']>;
  FromPendingAmount?: Maybe<Scalars['Float']>;
  ToAccountAmount?: Maybe<Scalars['Float']>;
  ToAvailableAmount?: Maybe<Scalars['Float']>;
  ToPendingAmount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  headerId?: Maybe<Scalars['Int']>;
  userEventId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  cardId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
  authorizationTransactionId?: Maybe<Scalars['String']>;
  requestTypeCode?: Maybe<Scalars['String']>;
  reserved?: Maybe<Scalars['String']>;
  merchantCategoryCode?: Maybe<Scalars['String']>;
  merchantGroupTypeCode?: Maybe<Scalars['String']>;
  terminalId?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  merchantLocation?: Maybe<Scalars['String']>;
  merchantCity?: Maybe<Scalars['String']>;
  merchantStateCode?: Maybe<Scalars['String']>;
  merchantZipCode?: Maybe<Scalars['String']>;
  merchantCountryCode?: Maybe<Scalars['String']>;
  panEntryModeTypeCode?: Maybe<Scalars['String']>;
  pinEntryModeTypeCode?: Maybe<Scalars['String']>;
  cardHolderPresenceTypeCode?: Maybe<Scalars['String']>;
  cardPresenceTypeCode?: Maybe<Scalars['String']>;
  terminalUnattendedTypeCode?: Maybe<Scalars['String']>;
  terminalPremisesTypeCode?: Maybe<Scalars['String']>;
  customerTag?: Maybe<Scalars['String']>;
  cardTag?: Maybe<Scalars['String']>;
  availableDate?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  customField1?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  denialReason?: Maybe<Scalars['String']>;
  feeCode?: Maybe<Scalars['String']>;
  feeDescription?: Maybe<Scalars['String']>;
  friendlyDescription?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  fromAccountNumberMasked?: Maybe<Scalars['String']>;
  fromCategory?: Maybe<Scalars['String']>;
  fromCreatedDate?: Maybe<Scalars['String']>;
  fromCustomField1?: Maybe<Scalars['String']>;
  fromCustomField2?: Maybe<Scalars['String']>;
  fromCustomField3?: Maybe<Scalars['String']>;
  fromCustomField4?: Maybe<Scalars['String']>;
  fromCustomField5?: Maybe<Scalars['String']>;
  fromLegalName1?: Maybe<Scalars['String']>;
  fromLegalName2?: Maybe<Scalars['String']>;
  fromName?: Maybe<Scalars['String']>;
  fromPrimaryCustomerId?: Maybe<Scalars['Int']>;
  fromSubCategory?: Maybe<Scalars['String']>;
  fromTag?: Maybe<Scalars['String']>;
  institutionName?: Maybe<Scalars['String']>;
  masterId?: Maybe<Scalars['String']>;
  modifiedById?: Maybe<Scalars['Int']>;
  payloadTypeId?: Maybe<Scalars['Int']>;
  settledDate?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
  subTypeCode?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toAccountNumberMasked?: Maybe<Scalars['String']>;
  toCategory?: Maybe<Scalars['String']>;
  toCreatedDate?: Maybe<Scalars['String']>;
  toCustomField1?: Maybe<Scalars['String']>;
  toCustomField2?: Maybe<Scalars['String']>;
  toCustomField3?: Maybe<Scalars['String']>;
  toCustomField4?: Maybe<Scalars['String']>;
  toCustomField5?: Maybe<Scalars['String']>;
  toLegalName1?: Maybe<Scalars['String']>;
  toLegalName2?: Maybe<Scalars['String']>;
  toName?: Maybe<Scalars['String']>;
  toPrimaryCustomerId?: Maybe<Scalars['Int']>;
  toSubCategory?: Maybe<Scalars['String']>;
  toTag?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeCode?: Maybe<Scalars['String']>;
  eventTypeId?: Maybe<Scalars['String']>;
  networkProviderTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  cashbackAmount?: Maybe<Scalars['String']>;
  surchargeAmount?: Maybe<Scalars['String']>;
  cashDepositAmount?: Maybe<Scalars['String']>;
  checkDepositAmount?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  fromAccountAmount?: Maybe<Scalars['String']>;
  fromAvailableAmount?: Maybe<Scalars['String']>;
  fromPendingAmount?: Maybe<Scalars['String']>;
  toAccountAmount?: Maybe<Scalars['String']>;
  toAvailableAmount?: Maybe<Scalars['String']>;
  toPendingAmount?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum CardReplaceReason {
  PhysicalDamage = 'PHYSICAL_DAMAGE',
  Stolen = 'STOLEN',
  Lost = 'LOST',
  Fraud = 'FRAUD'
}

/** An enumeration. */
export enum CardStatus {
  Initiated = 'INITIATED',
  Pending = 'PENDING',
  PendingVerification = 'PENDING_VERIFICATION',
  Verified = 'VERIFIED',
  Denied = 'DENIED',
  Expired = 'EXPIRED',
  Archived = 'ARCHIVED',
  Reissued = 'REISSUED',
  Hotlisted = 'HOTLISTED',
  ReissuedPendingVerification = 'REISSUED_PENDING_VERIFICATION'
}

export interface CardType {
  cardId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  accountId?: Maybe<Scalars['Int']>;
  cardNumberMasked?: Maybe<Scalars['String']>;
  cardStatus?: Maybe<CardStatus>;
  isActive?: Maybe<Scalars['Boolean']>;
}

export interface CategoryItemOutputType {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface ChangeForgottenPassword {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ChangePassword {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface CheckTendIdUnique {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Returns True if unique, false otherwise */
  isUnique?: Maybe<Scalars['Boolean']>;
  /** Returns True if it already exists in user tend id's history, false otherwise */
  belongsToUser?: Maybe<Scalars['Boolean']>;
}

export interface ConfirmVerificationCode {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  code?: Maybe<VerificationCodeType>;
}

export interface ContactPreferenceType {
  channelId?: Maybe<Scalars['String']>;
  channelName?: Maybe<Scalars['String']>;
  channelCategory?: Maybe<Scalars['String']>;
  contactPreferences?: Maybe<Array<Maybe<IContactPreference>>>;
}

export interface CoreProAccountInfoOutputType {
  member?: Maybe<SafeMemberType>;
  accountStatus?: Maybe<Scalars['String']>;
  card?: Maybe<CardInfoOutputType>;
}

export enum Country {
  Us = 'US',
  Mx = 'MX'
}

export interface CountryType {
  /** countryAbv */
  abbreviation?: Maybe<Scalars['String']>;
  /** createdDate */
  createdDate?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
  /** countryName */
  name?: Maybe<Scalars['String']>;
  supported?: Maybe<Scalars['Boolean']>;
  /** unitOfMeasure */
  unitOfMeasure?: Maybe<Scalars['String']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['String']>;
}

export interface CouponRetrievedIterable {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface CreateCardNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  cardNotificationRow?: Maybe<CardNotificationRowOutputType>;
}

export interface CreateEventNotificationHeader {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  eventNotificationHeader?: Maybe<EventNotificationHeaderOutputType>;
}

export interface CreateEventNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  eventNotificationRow?: Maybe<EventNotificationRowOutputType>;
}

export interface CreateLogin {
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

export interface CreateP2pRequest {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Request created date */
  date?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface CreatePinwheelLink {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  link?: Maybe<PinwheelLinkType>;
  error?: Maybe<PinwheelLinkErrorType>;
}

export interface CreateTransferHistory {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  transferHistory?: Maybe<TransferHistoryOutputType>;
}

export interface CreateUpdateTendId {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Member's current Tend ID */
  tendId?: Maybe<Scalars['String']>;
}

export interface CreditScoreDataUrlType {
  /** URL for receiving the Members Credit Score Data */
  url?: Maybe<Scalars['String']>;
}

export interface CustomerDataType {
  memberId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  currentOnboardingStatus?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  osVersion?: Maybe<Scalars['String']>;
  appDownload?: Maybe<Scalars['DateTime']>;
  countrySelected?: Maybe<Scalars['DateTime']>;
  emailMobileEntered?: Maybe<Scalars['DateTime']>;
  inviterChosen?: Maybe<Scalars['DateTime']>;
  inviterId?: Maybe<Scalars['String']>;
  inviterCode?: Maybe<Scalars['String']>;
  promotionType?: Maybe<Scalars['String']>;
  loginCreated?: Maybe<Scalars['DateTime']>;
  personalInfoCompleted?: Maybe<Scalars['DateTime']>;
  tncSubmitted?: Maybe<Scalars['DateTime']>;
  applicationStatusTime?: Maybe<ApplicationStatusTime>;
  fundingSource?: Maybe<Scalars['String']>;
  paymentCompleted?: Maybe<Scalars['DateTime']>;
  cardIssued?: Maybe<Scalars['DateTime']>;
  membershipCode?: Maybe<Scalars['String']>;
  otpVerified?: Maybe<Scalars['DateTime']>;
  idScanCompleted?: Maybe<Scalars['DateTime']>;
  selfieCompleted?: Maybe<Scalars['DateTime']>;
  startedJumio?: Maybe<Scalars['DateTime']>;
  completedJumio?: Maybe<Scalars['DateTime']>;
  setUpProfile?: Maybe<Scalars['DateTime']>;
  beneficiaryCompleted?: Maybe<Scalars['DateTime']>;
  accountLevelSelected?: Maybe<Scalars['DateTime']>;
  accountLevel?: Maybe<Scalars['String']>;
  infoEntered?: Maybe<Scalars['String']>;
  accountFunded?: Maybe<Scalars['String']>;
  kycClosure?: Maybe<Scalars['DateTime']>;
  applicationApproved?: Maybe<Scalars['DateTime']>;
}

/** All Customer Fields should be here. */
export interface CustomerFieldsInputType {
  /** Customer Name */
  name?: Maybe<Scalars['String']>;
  /** Customer Nickname */
  nickname?: Maybe<Scalars['String']>;
  /** Customer Mail */
  email?: Maybe<Scalars['String']>;
  /** Customer Address List */
  addresses?: Maybe<Array<Maybe<AddressInputType>>>;
  /** Customer Phone List */
  phones?: Maybe<Array<Maybe<PhoneNumberInputType>>>;
}

export interface CustomerFieldsOutputType {
  /** Customer ID */
  customerId?: Maybe<Scalars['ID']>;
  /** Customer First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Customer Middle Name */
  middleName?: Maybe<Scalars['String']>;
  /** Customer Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Customer Date of Birth */
  dob?: Maybe<Scalars['String']>;
  /** Customer SSN */
  ssnNo?: Maybe<Scalars['String']>;
  /** Customer Mail */
  email?: Maybe<Scalars['String']>;
  /** Customer Address List */
  addresses?: Maybe<Array<Maybe<AddressOutputType>>>;
  /** Customer Phone List */
  phones?: Maybe<Array<Maybe<PhoneNumberOutputType>>>;
}

export interface CustomerFileRowInputType {
  headerId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerTag?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  culture?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  customerStatus?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  archivedDate?: Maybe<Scalars['String']>;
  deceasedDate?: Maybe<Scalars['String']>;
  idVerificationDate?: Maybe<Scalars['String']>;
  idVerificationDocumentsReceivedDate?: Maybe<Scalars['String']>;
  driversLicenseNumber?: Maybe<Scalars['String']>;
  driversLicenseState?: Maybe<Scalars['String']>;
  driversLicenseIssueDate?: Maybe<Scalars['String']>;
  driversLicenseExpireDate?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  passportCountry?: Maybe<Scalars['String']>;
  passportIssueDate?: Maybe<Scalars['String']>;
  passportExpireDate?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  isSubjectToBackupWithholding?: Maybe<Scalars['String']>;
  isOptedInToBankCommunication?: Maybe<Scalars['String']>;
  isDocumentsAccepted?: Maybe<Scalars['String']>;
  documentsAcceptedDate?: Maybe<Scalars['String']>;
  isLocked?: Maybe<Scalars['String']>;
  lockedDate?: Maybe<Scalars['String']>;
  lockedReason?: Maybe<Scalars['String']>;
  residenceLine1?: Maybe<Scalars['String']>;
  residenceLine2?: Maybe<Scalars['String']>;
  residenceLine3?: Maybe<Scalars['String']>;
  residenceLine4?: Maybe<Scalars['String']>;
  residenceCity?: Maybe<Scalars['String']>;
  residenceState?: Maybe<Scalars['String']>;
  residencePostalCode?: Maybe<Scalars['String']>;
  residenceCountry?: Maybe<Scalars['String']>;
  mailingLine1?: Maybe<Scalars['String']>;
  mailingLine2?: Maybe<Scalars['String']>;
  mailingLine3?: Maybe<Scalars['String']>;
  mailingLine4?: Maybe<Scalars['String']>;
  mailingCity?: Maybe<Scalars['String']>;
  mailingState?: Maybe<Scalars['String']>;
  mailingPostalCode?: Maybe<Scalars['String']>;
  mailingCountry?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  officePhone?: Maybe<Scalars['String']>;
  customField1?: Maybe<Scalars['String']>;
  customField2?: Maybe<Scalars['String']>;
  customField3?: Maybe<Scalars['String']>;
  customField4?: Maybe<Scalars['String']>;
  customField5?: Maybe<Scalars['String']>;
  lastActivityDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

export interface CustomerRegistrationFileRowInputType {
  headerId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerTag?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  culture?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  customerStatus?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  archivedDate?: Maybe<Scalars['String']>;
  idVerificationDate?: Maybe<Scalars['String']>;
  deniedDate?: Maybe<Scalars['String']>;
  expiredDate?: Maybe<Scalars['String']>;
  idVerificationDocumentsReceivedDate?: Maybe<Scalars['String']>;
  driversLicenseNumber?: Maybe<Scalars['String']>;
  driversLicenseState?: Maybe<Scalars['String']>;
  driversLicenseIssueDate?: Maybe<Scalars['String']>;
  driversLicenseExpireDate?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  passportCountry?: Maybe<Scalars['String']>;
  passportIssueDate?: Maybe<Scalars['String']>;
  passportExpireDate?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  isSubjectToBackupWithholding?: Maybe<Scalars['String']>;
  isOptedInToBankCommunication?: Maybe<Scalars['String']>;
  isDocumentsAccepted?: Maybe<Scalars['String']>;
  documentsAcceptedDate?: Maybe<Scalars['String']>;
  residenceLine1?: Maybe<Scalars['String']>;
  residenceLine2?: Maybe<Scalars['String']>;
  residenceLine3?: Maybe<Scalars['String']>;
  residenceLine4?: Maybe<Scalars['String']>;
  residenceCity?: Maybe<Scalars['String']>;
  residenceState?: Maybe<Scalars['String']>;
  residencePostalCode?: Maybe<Scalars['String']>;
  residenceCountry?: Maybe<Scalars['String']>;
  mailingLine1?: Maybe<Scalars['String']>;
  mailingLine2?: Maybe<Scalars['String']>;
  mailingLine3?: Maybe<Scalars['String']>;
  mailingLine4?: Maybe<Scalars['String']>;
  mailingCity?: Maybe<Scalars['String']>;
  mailingState?: Maybe<Scalars['String']>;
  mailingPostalCode?: Maybe<Scalars['String']>;
  mailingCountry?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  officePhone?: Maybe<Scalars['String']>;
  customField1?: Maybe<Scalars['String']>;
  customField2?: Maybe<Scalars['String']>;
  customField3?: Maybe<Scalars['String']>;
  customField4?: Maybe<Scalars['String']>;
  customField5?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}




export interface DeclineP2pRequest {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface DeleteEventNotificationHeader {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  eventNotificationHeader?: Maybe<EventNotificationHeaderOutputType>;
}

export interface DeleteEventNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  eventNotificationRow?: Maybe<EventNotificationRowOutputType>;
}

export interface DeleteP2pContact {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  contact?: Maybe<P2pContactType>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface DeleteTransferHistory {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  transferHistory?: Maybe<TransferHistoryOutputType>;
}

export interface DocumentItem {
  /** uploaded KYC document name */
  name?: Maybe<DocumentName>;
  /** uploaded KYC document */
  image?: Maybe<Scalars['String']>;
  /** uploaded KYC document's extension */
  extension?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum DocumentName {
  Front = 'FRONT',
  Back = 'BACK',
  Selfie = 'SELFIE'
}

export interface DueDiligenceAnswerInputType {
  /** The unique identifier created by CorePro for a particular question */
  questionId?: Maybe<Scalars['String']>;
  /** The customer's response to a question with an answerType of Text */
  questionAnswer?: Maybe<Scalars['String']>;
  /** The customer's response to a question with an answerType of Single-Select or Multi-Select */
  selectedChoices?: Maybe<Array<Maybe<DueDiligenceSelectedChoiceInputType>>>;
}

export interface DueDiligenceAnswersInputType {
  /** The unique identifier created by CorePro for a particular question */
  questionId?: Maybe<Scalars['String']>;
  /** The customer's response to a question with an answerType of Text */
  answer?: Maybe<Scalars['String']>;
  /** The customer's response to a question with an answerType of Single-Select or Multi-Select */
  selectedChoices?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface DueDiligenceAnswersOutputType {
  /** The unique identifier created by CorePro for a particular question */
  questionId?: Maybe<Scalars['String']>;
  /** The customer's response to a question with an answerType of Text */
  answer?: Maybe<Scalars['String']>;
  /** The customer's response to a question with an answerType of Single-Select or Multi-Select */
  selectedChoices?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface DueDiligenceChoiceType {
  /** choiceDescription */
  choiceDescription?: Maybe<Scalars['String']>;
  /** choiceEnglishDescription */
  choiceEnglishDescription?: Maybe<Scalars['String']>;
  /** choiceId */
  choiceId?: Maybe<Scalars['String']>;
  /** choiceName */
  choiceName?: Maybe<Scalars['String']>;
  /** choiceSpanishDescription */
  choiceSpanishDescription?: Maybe<Scalars['String']>;
  /** createdDate */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['DateTime']>;
}

export interface DueDiligenceQuestionType {
  /** answerMaxLength */
  answerMaxLength?: Maybe<Scalars['Int']>;
  /** answerType */
  answerType?: Maybe<Scalars['String']>;
  choices?: Maybe<Array<Maybe<DueDiligenceChoiceType>>>;
  /** createdDate */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** questionDescription */
  questionDescription?: Maybe<Scalars['String']>;
  /** questionEnglishDescription */
  questionEnglishDescription?: Maybe<Scalars['String']>;
  /** questionId */
  questionId?: Maybe<Scalars['String']>;
  /** questionName */
  questionName?: Maybe<Scalars['String']>;
  /** questionSpanishDescription */
  questionSpanishDescription?: Maybe<Scalars['String']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['DateTime']>;
}

export interface DueDiligenceSelectedChoiceInputType {
  /** The unique identifier created by CorePro for a particular choice */
  choiceId?: Maybe<Scalars['String']>;
}

export interface ESignAcceptanceInputType {
  accepted?: Maybe<Scalars['Boolean']>;
}

export interface EventNotificationHeaderOutputType {
  id: Scalars['ID'];
  fileName?: Maybe<Scalars['String']>;
  recordCount?: Maybe<Scalars['Int']>;
  fileCreatedDate?: Maybe<Scalars['DateTime']>;
  fileEffectiveDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
}

export interface EventNotificationRowInputType {
  headerId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerTag?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  accountTag?: Maybe<Scalars['String']>;
  externalAccountId?: Maybe<Scalars['Int']>;
  externalAccountTag?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionTag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  eventTypeId?: Maybe<Scalars['Int']>;
  transactionTypeCode?: Maybe<Scalars['String']>;
  transactionSettledDate?: Maybe<Scalars['String']>;
  transactionAvailableDate?: Maybe<Scalars['String']>;
  userEventId?: Maybe<Scalars['String']>;
  masterId?: Maybe<Scalars['String']>;
  transactionAmount?: Maybe<Scalars['String']>;
  transactionCreatedDate?: Maybe<Scalars['String']>;
  transactionSubTypeCode?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  fromAvailableBalance?: Maybe<Scalars['String']>;
  fromAccountBalance?: Maybe<Scalars['String']>;
  fromPendingBalance?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toAvailableBalance?: Maybe<Scalars['String']>;
  toAccountBalance?: Maybe<Scalars['String']>;
  toPendingBalance?: Maybe<Scalars['String']>;
  modifiedById?: Maybe<Scalars['Int']>;
  eventDate?: Maybe<Scalars['String']>;
  isAdminUser?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
}

export interface EventNotificationRowOutputType {
  TransactionAmount?: Maybe<Scalars['Float']>;
  FromAvailableBalance?: Maybe<Scalars['Float']>;
  FromAccountBalance?: Maybe<Scalars['Float']>;
  FromPendingBalance?: Maybe<Scalars['Float']>;
  ToAvailableBalance?: Maybe<Scalars['Float']>;
  ToAccountBalance?: Maybe<Scalars['Float']>;
  ToPendingBalance?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  headerId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerTag?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  accountTag?: Maybe<Scalars['String']>;
  externalAccountId?: Maybe<Scalars['Int']>;
  externalAccountTag?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionTag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  eventTypeId?: Maybe<Scalars['Int']>;
  transactionTypeCode?: Maybe<Scalars['String']>;
  transactionSettledDate?: Maybe<Scalars['String']>;
  transactionAvailableDate?: Maybe<Scalars['String']>;
  userEventId?: Maybe<Scalars['String']>;
  masterId?: Maybe<Scalars['String']>;
  transactionCreatedDate?: Maybe<Scalars['String']>;
  transactionSubTypeCode?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  toAccountId?: Maybe<Scalars['Int']>;
  modifiedById?: Maybe<Scalars['Int']>;
  eventDate?: Maybe<Scalars['String']>;
  isAdminUser?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  transactionAmount?: Maybe<Scalars['String']>;
  fromAvailableBalance?: Maybe<Scalars['String']>;
  fromAccountBalance?: Maybe<Scalars['String']>;
  fromPendingBalance?: Maybe<Scalars['String']>;
  toAvailableBalance?: Maybe<Scalars['String']>;
  toAccountBalance?: Maybe<Scalars['String']>;
  toPendingBalance?: Maybe<Scalars['String']>;
}

export interface ExperianInputType {
  /** Datetime when the Member accepted Terms & Conditions */
  disclosureDatetime?: Maybe<Scalars['DateTime']>;
}

export interface ExternalAccountType {
  accountId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  routingNumber?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  currency?: Maybe<TendCurrency>;
  availableBalance?: Maybe<Scalars['Float']>;
}

export interface ExternalToInternalTransfer {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  transfer?: Maybe<TransferType>;
}

export interface FundProviderInputType {
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Paternal Last Name */
  paternalLastName?: Maybe<Scalars['String']>;
  /** Maternal Last Name */
  maternalLastName?: Maybe<Scalars['String']>;
  /** Date of Birth ?MM/DD/YYYY? */
  dateOfBirth?: Maybe<Scalars['String']>;
  /** Will member fund herself */
  fundMyself?: Maybe<Scalars['Boolean']>;
}

export interface GeneralInfoInputType {
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Paternal Last Name */
  paternalLastName?: Maybe<Scalars['String']>;
  /** Maternal Last Name */
  maternalLastName?: Maybe<Scalars['String']>;
  /** Date of Birth ?MM/DD/YYYY? */
  dateOfBirth?: Maybe<Scalars['String']>;
  /** Member's curp */
  curp?: Maybe<Scalars['String']>;
}

export interface GetSchemaOutputType {
  uuid: Scalars['String'];
  applicationName?: Maybe<Scalars['String']>;
  schemaType: Scalars['String'];
  applicationRoute: Scalars['String'];
  schema?: Maybe<Scalars['JSONString']>;
  updatedBy?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['String']>;
}

export interface GovDisclosureInfoInputType {
  holdGovPosition?: Maybe<Scalars['Boolean']>;
  positionInfo?: Maybe<PositionInfoInputType>;
  relativeHoldGovPosition?: Maybe<Scalars['Boolean']>;
  relativeInfo?: Maybe<RelativeInfoInputType>;
}

export interface IContactPreference {
  preferenceId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}

export interface IdentityInformationInputType {
  /** uploaded KYC utility document name */
  utilityDocument?: Maybe<Scalars['String']>;
  /** uploaded KYC utility document extension */
  utilityExtension?: Maybe<Scalars['String']>;
  /** uploaded KYC utility document */
  utilityImage?: Maybe<Scalars['String']>;
}

export interface IdentityInputType {
  /** Member's Date of Birth ?MM/DD/YYYY? */
  dateOfBirth?: Maybe<Scalars['String']>;
  /** Member's SSN */
  ssn?: Maybe<Scalars['String']>;
  identityType?: Maybe<IdentityType>;
  identityState?: Maybe<Scalars['String']>;
  identityNumber?: Maybe<Scalars['String']>;
}

export interface IdentityOutputType {
  /** Member's Date of Birth ?MM/DD/YYYY? */
  dateOfBirth?: Maybe<Scalars['String']>;
  /** Member's SSN */
  ssn?: Maybe<Scalars['String']>;
  identityType?: Maybe<QueryIdentityType>;
  identityState?: Maybe<Scalars['String']>;
  identityNumber?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum IdentityType {
  DriversLicense = 'DRIVERS_LICENSE',
  Passport = 'PASSPORT',
  MilitaryId = 'MILITARY_ID',
  StateId = 'STATE_ID'
}

export interface IndividualTriggerInputType {
  general?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['Boolean']>;
  beneficiary?: Maybe<Scalars['Boolean']>;
  accountLevel?: Maybe<Scalars['Boolean']>;
  personal?: Maybe<Scalars['Boolean']>;
  identityConfirmation?: Maybe<Scalars['Boolean']>;
  fundProvider?: Maybe<Scalars['Boolean']>;
  govDisclosure?: Maybe<Scalars['Boolean']>;
}

export interface InternalToExternalTransfer {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  transfer?: Maybe<TransferType>;
}

export interface InternalTransfer {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  transfer?: Maybe<TransferType>;
}

export interface InvexOnboard {
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<SafeMemberType>;
}

export interface InvexStateCityMunicipalityItemType {
  stateName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  municipalityName?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  cityName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  suburbName?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
}


export interface KycItemOutputType {
  /** uploaded KYC document type */
  documentType?: Maybe<Scalars['String']>;
  /** uploaded KYC document */
  documentImage?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum Language {
  English = 'ENGLISH',
  Spanish = 'SPANISH'
}

export interface LinkExternalAccount {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  externalAccount?: Maybe<ExternalAccountType>;
}

/** An enumeration. */
export enum LocationType {
  Atm = 'ATM',
  BusinessWalmart = 'BUSINESS_WALMART',
  BusinessSamsClub = 'BUSINESS_SAMS_CLUB',
  BusinessBodega = 'BUSINESS_BODEGA',
  BusinessAurrera = 'BUSINESS_AURRERA',
  BusinessSuperam = 'BUSINESS_SUPERAM',
  BusinessChedraui = 'BUSINESS_CHEDRAUI'
}

export interface LockCard {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  card?: Maybe<CardType>;
}

export interface LoginMember {
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
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface MlaInputType {
  relation?: Maybe<ArmedForceRelation>;
  militaryPerson?: Maybe<MilitaryPersonDetailsInputType>;
}

export interface MlaOutputType {
  relation?: Maybe<QueryArmedForceRelation>;
  militaryPerson?: Maybe<MilitaryPersonDetailsOutputType>;
}

export interface MemberDeviceType {
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
  /** accountLevel */
  accountLevel?: Maybe<Scalars['String']>;
  /** accountStatus */
  accountStatus?: Maybe<Scalars['String']>;
  /** applicationProgress */
  applicationProgress?: Maybe<Scalars['String']>;
  /** applicationStatus */
  applicationStatus?: Maybe<Scalars['String']>;
  bank?: Maybe<BankType>;
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
  tendId?: Maybe<Scalars['String']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['DateTime']>;
  /** primaryDocumentTypeUploaded */
  uploadedPrimaryDocumentType?: Maybe<Scalars['String']>;
  /** usedInviterTendId */
  usedInviterTendId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

export interface MilitaryPersonDetailsInputType {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  /** DOB of Dependent Armed Forces */
  dob?: Maybe<Scalars['String']>;
}

export interface MilitaryPersonDetailsOutputType {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  /** DOB of Dependent Armed Forces */
  dob?: Maybe<Scalars['String']>;
}

export interface NbkcOnboard {
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<SafeMemberType>;
}

export interface NbkcOnboardDetailsType {
  address?: Maybe<AddressOutputType>;
  name?: Maybe<NameOutputType>;
  identity?: Maybe<IdentityOutputType>;
  mla?: Maybe<MlaOutputType>;
  dueDiligence?: Maybe<Array<Maybe<DueDiligenceAnswersOutputType>>>;
  eSign?: Maybe<Scalars['Boolean']>;
  tnc?: Maybe<TncAcceptanceOutputType>;
  kyc?: Maybe<Array<Maybe<KycItemOutputType>>>;
  trigger?: Maybe<TriggerOutputType>;
}

export interface NameInputType {
  /** Member's First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Member's Last Name */
  lastName?: Maybe<Scalars['String']>;
}

export interface NameOutputType {
  /** Member's First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Member's Last Name */
  lastName?: Maybe<Scalars['String']>;
}

export interface OfferDetailsOutputType {
  id?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  merchant?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  shopType?: Maybe<Scalars['String']>;
  tenWord?: Maybe<Scalars['String']>;
  twentyWord?: Maybe<Scalars['String']>;
  outsideLink?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  activationRequired?: Maybe<Scalars['String']>;
  offerValue?: Maybe<Scalars['String']>;
  stores?: Maybe<Array<Maybe<StoreItemOutputType>>>;
}

export interface OfferItemOutputType {
  id?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  merchant?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  shopType?: Maybe<Scalars['String']>;
  tenWord?: Maybe<Scalars['String']>;
  twentyWord?: Maybe<Scalars['String']>;
  outsideLink?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  activationRequired?: Maybe<Scalars['String']>;
  offerValue?: Maybe<Scalars['String']>;
}

export interface OnboardMember {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<SafeMemberType>;
}

export interface OrderCard {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  card?: Maybe<CardType>;
}

export interface P2PRequestType {
  amount?: Maybe<Scalars['Float']>;
  /** confirmationCode */
  confirmationCode?: Maybe<Scalars['String']>;
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  /** receiverEmail */
  receiverEmail?: Maybe<Scalars['String']>;
  /** requestStatus */
  requestStatus?: Maybe<Scalars['String']>;
  /** senderEmail */
  senderEmail?: Maybe<Scalars['String']>;
  /** updatedAt */
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface P2pContactType {
  /** belongTo */
  belongTo?: Maybe<Scalars['ID']>;
  /** contactType */
  contactType?: Maybe<Scalars['String']>;
  /** createdAt */
  createdDate?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  /** updatedAt */
  updatedDate?: Maybe<Scalars['DateTime']>;
}

export enum P2pRequestStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Declined = 'DECLINED'
}

export interface P2pTransfer {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Recipient Masked Name */
  recipientName?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface PersonalInputType {
  /** Member's Sex */
  sex?: Maybe<Scalars['String']>;
  /** Member's Country of Birth */
  countryOfBirth?: Maybe<Scalars['String']>;
  /** Member's Nationality */
  nationality?: Maybe<Scalars['String']>;
  /** Member's Place of Birth */
  placeOfBirth?: Maybe<Scalars['String']>;
  /** Member's Marital Status */
  maritalStatus?: Maybe<Scalars['String']>;
  /** Member's Profession */
  profession?: Maybe<Scalars['String']>;
  /** Member's Occupation */
  occupation?: Maybe<Scalars['String']>;
  /** Member's Economic Activity */
  economicActivity?: Maybe<Scalars['String']>;
  /** Member's Level of Education */
  highestLevelOfEducation?: Maybe<Scalars['String']>;
  /** Member's Banxico Activity */
  banxicoActivity?: Maybe<Scalars['String']>;
  /** Member's FM Number */
  fmNumber?: Maybe<Scalars['String']>;
}

export interface PhoneNumberInputType {
  /** Phone Type */
  phoneType?: Maybe<Q2PhoneType>;
  /** Customer Phone Number */
  number?: Maybe<Scalars['String']>;
}

export interface PhoneNumberOutputType {
  /** Phone Type */
  phoneType?: Maybe<Q2PhoneType>;
  /** Customer Phone Number */
  number?: Maybe<Scalars['String']>;
}

export interface PinwheelLinkErrorType {
  /** Pinwheel API error type */
  type?: Maybe<Scalars['String']>;
  /** Pinwheel API error code */
  code?: Maybe<Scalars['String']>;
  /** Pinwheel API error message */
  message?: Maybe<Scalars['String']>;
  /** Pinwheel API request status code */
  statusCode?: Maybe<Scalars['String']>;
}

export interface PinwheelLinkType {
  /** sandbox, development, or production */
  mode?: Maybe<Scalars['String']>;
  /** Short-lived token that is used to initialize Pinwheel Link. */
  token?: Maybe<Scalars['String']>;
  /** an ISO-8601 formatted timestamp string of when token expires. */
  expires?: Maybe<Scalars['DateTime']>;
  /** Unique identifier for the object. */
  tokenId?: Maybe<Scalars['String']>;
}

export enum PinwheelVersionType {
  April_2021 = 'APRIL_2021',
  July_2021 = 'JULY_2021'
}

export interface PlaidLinkTokenType {
  linkToken?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['String']>;
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

export interface PopulateDueDiligenceCategories {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface PopulateRetailMeNotCoupons {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface PositionInfoInputType {
  position?: Maybe<Scalars['String']>;
  association?: Maybe<Scalars['String']>;
}

export interface PostedTransactionRowInputType {
  headerId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerTag?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
  accountTag?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionTag?: Maybe<Scalars['String']>;
  transactionTypeCode?: Maybe<Scalars['String']>;
  transactionAmount?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  transactionDescription?: Maybe<Scalars['String']>;
  nachaDescription?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  settledDate?: Maybe<Scalars['String']>;
  availableDate?: Maybe<Scalars['String']>;
  masterId?: Maybe<Scalars['String']>;
  returnCode?: Maybe<Scalars['String']>;
  feeCode?: Maybe<Scalars['String']>;
  externalAccountId?: Maybe<Scalars['String']>;
  returnedTransactionId?: Maybe<Scalars['String']>;
  debitAccountId?: Maybe<Scalars['String']>;
  creditAccountId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

export interface PrimaryDocumentType {
  /** uploaded KYC document type */
  type?: Maybe<Scalars['String']>;
  /** Member's KYC files */
  files?: Maybe<Array<Maybe<DocumentItem>>>;
}

/** An enumeration. */
export enum Q2AddressType {
  Mailing = 'MAILING',
  Residential = 'RESIDENTIAL'
}

/** An enumeration. */
export enum Q2PhoneType {
  Home = 'HOME',
  Mobile = 'MOBILE',
  Office = 'OFFICE'
}

/** An enumeration. */
export enum QueryArmedForceRelation {
  Member = 'MEMBER',
  Dependent = 'DEPENDENT',
  Neither = 'NEITHER'
}

/** An enumeration. */
export enum QueryIdentityType {
  DriversLicense = 'DRIVERS_LICENSE',
  Passport = 'PASSPORT',
  MilitaryId = 'MILITARY_ID',
  StateId = 'STATE_ID'
}

export interface ReferrerInputType {
  /** Friends Tend Id who Referred the Member */
  friendTendId?: Maybe<Scalars['String']>;
}

export interface RefreshToken {
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
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface RegisterExperianSubscriber {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<MemberType>;
}

export interface RegisterWithAffinity {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Affinity Session ID */
  sessionId?: Maybe<Scalars['String']>;
}

export interface RelativeInfoInputType {
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Paternal Last Name */
  paternalLastName?: Maybe<Scalars['String']>;
  /** Maternal Last Name */
  maternalLastName?: Maybe<Scalars['String']>;
  /** Date of Birth ?MM/DD/YYYY? */
  dateOfBirth?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  homeAddress?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  participation?: Maybe<Scalars['String']>;
}

export interface ReplaceCard {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  card?: Maybe<CardType>;
}

export interface ReplaceExternalAccount {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  externalAccount?: Maybe<ExternalAccountType>;
}

export interface RequestResetPassword {
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
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Time based token */
  tempToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ResetPasswordWithOtp {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Time based token */
  tempToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface ResetPin {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  card?: Maybe<CardType>;
}

export interface ResetTendId {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface RetailMeNotCouponType {
  rmnId: Scalars['String'];
  couponDate: Scalars['String'];
  applicableOn?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryRank?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  eventRank?: Maybe<Scalars['Int']>;
  eventType?: Maybe<Scalars['String']>;
  exclusions?: Maybe<Scalars['String']>;
  logourl?: Maybe<Scalars['String']>;
  merchantUrl?: Maybe<Scalars['String']>;
  merchantRank?: Maybe<Scalars['Int']>;
  monetized?: Maybe<Scalars['Boolean']>;
  popularRank?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  store?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  validTill?: Maybe<Scalars['String']>;
  validity?: Maybe<Scalars['String']>;
  validationTimestamp?: Maybe<Scalars['DateTime']>;
  rmnUrl?: Maybe<Scalars['String']>;
  rmnMobileClicks?: Maybe<Scalars['Int']>;
  rmnDesktopClicks?: Maybe<Scalars['Int']>;
  rmnAppClicks?: Maybe<Scalars['Int']>;
  merchantCategory?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  brands?: Maybe<Scalars['String']>;
  subcategories?: Maybe<Scalars['String']>;
  logoBackgroundColor?: Maybe<Scalars['String']>;
}

export interface RootMutation {
  acceptP2pRequest?: Maybe<AcceptP2pRequest>;
  activateOffer?: Maybe<ActivateOffer>;
  addMemberEmail?: Maybe<AddMemberEmail>;
  addP2pContact?: Maybe<AddP2pContact>;
  applyMembershipCode?: Maybe<ApplyMembershipCode>;
  applyOnboardMember?: Maybe<ApplyOnboardMember>;
  bulkCreateAccountBalanceRow?: Maybe<BulkCreateBalanceNotificationRow>;
  bulkCreateCardNotificationRow?: Maybe<BulkCreateCardNotificationRow>;
  bulkCreateCustomerNotificationRow?: Maybe<BulkCreateCustomerNotificationRow>;
  bulkCreateCustomerRegNotificationRow?: Maybe<BulkCreateCustomerRegisterNotificationRow>;
  bulkCreateEventNotificationRow?: Maybe<BulkCreateEventNotificationRow>;
  bulkCreatePostedTransactionRow?: Maybe<BulkCreatePostedTransactionNotificationRow>;
  bulkCreateTransferHistory?: Maybe<BulkCreateTransferHistory>;
  cancelP2pRequest?: Maybe<CancelP2pRequest>;
  changeForgottenPassword?: Maybe<ChangeForgottenPassword>;
  changePassword?: Maybe<ChangePassword>;
  checkTendIdUnique?: Maybe<CheckTendIdUnique>;
  confirmVerificationCode?: Maybe<ConfirmVerificationCode>;
  createCardNotificationRow?: Maybe<CreateCardNotificationRow>;
  createEventNotificationHeader?: Maybe<CreateEventNotificationHeader>;
  createEventNotificationRow?: Maybe<CreateEventNotificationRow>;
  createLogin?: Maybe<CreateLogin>;
  createPinwheelLink?: Maybe<CreatePinwheelLink>;
  createTransferHistory?: Maybe<CreateTransferHistory>;
  createUpdateTendId?: Maybe<CreateUpdateTendId>;
  declineP2pRequest?: Maybe<DeclineP2pRequest>;
  deleteEventNotificationHeader?: Maybe<DeleteEventNotificationHeader>;
  deleteEventNotificationRow?: Maybe<DeleteEventNotificationRow>;
  deleteP2pContact?: Maybe<DeleteP2pContact>;
  deleteTransferHistory?: Maybe<DeleteTransferHistory>;
  externalToInternalTransfer?: Maybe<ExternalToInternalTransfer>;
  internalToExternalTransfer?: Maybe<InternalToExternalTransfer>;
  internalTransfer?: Maybe<InternalTransfer>;
  invexOnboard?: Maybe<InvexOnboard>;
  linkExternalAccount?: Maybe<LinkExternalAccount>;
  lockCard?: Maybe<LockCard>;
  loginMember?: Maybe<LoginMember>;
  logoutMember?: Maybe<LogoutMember>;
  nbkcOnboard?: Maybe<NbkcOnboard>;
  onboardMember?: Maybe<OnboardMember>;
  orderCard?: Maybe<OrderCard>;
  p2pRequest?: Maybe<CreateP2pRequest>;
  p2pTransfer?: Maybe<P2pTransfer>;
  populateDueDiligenceCategories?: Maybe<PopulateDueDiligenceCategories>;
  populateRetailMeNotCoupons?: Maybe<PopulateRetailMeNotCoupons>;
  preferencesSubscriber?: Maybe<Subscriber>;
  refreshToken?: Maybe<RefreshToken>;
  registerDevice?: Maybe<RegisterDevice>;
  registerExperianSubscriber?: Maybe<RegisterExperianSubscriber>;
  registerWithAffinity?: Maybe<RegisterWithAffinity>;
  replaceCard?: Maybe<ReplaceCard>;
  replaceExternalAccount?: Maybe<ReplaceExternalAccount>;
  requestResetPassword?: Maybe<RequestResetPassword>;
  resetPassword?: Maybe<ResetPassword>;
  resetPasswordWithOtp?: Maybe<ResetPasswordWithOtp>;
  resetPin?: Maybe<ResetPin>;
  resetTendId?: Maybe<ResetTendId>;
  saveDueDiligenceAnswers?: Maybe<SaveDueDiligenceAnswers>;
  sendOneTimePassword?: Maybe<SendOneTimePassword>;
  sendP2pVerificationCode?: Maybe<SendP2pVerificationCode>;
  sendVerificationCode?: Maybe<SendVerificationCode>;
  setCouponRetrievedIterable?: Maybe<CouponRetrievedIterable>;
  /**
   * - OnboardMember
   * - UpdateReferrer
   * - SendVerificationCode
   */
  tendOnboard?: Maybe<TendOnboard>;
  testLogger?: Maybe<TestLoggingMutation>;
  transferFunds?: Maybe<TransferFunds>;
  unlockCard?: Maybe<UnlockCard>;
  updateCardNotificationRow?: Maybe<UpdateCardNotificationRow>;
  updateEventNotificationHeader?: Maybe<UpdateEventNotificationHeader>;
  updateEventNotificationRow?: Maybe<UpdateEventNotificationRow>;
  updateMemberApplicationProgress?: Maybe<UpdateMemberApplicationProgress>;
  updateMemberDevices?: Maybe<UpdateMemberDevices>;
  updateMemberReferrer?: Maybe<UpdateMemberReferrer>;
  updatePersonalDetails?: Maybe<UpdatePersonalDetails>;
  updateTransferHistory?: Maybe<UpdateTransferHistory>;
  /**
   * This mutation serves for lambda function.
   * It decrypts the encrypted information
   * and validates the user. Returns a new token.
   */
  validateUser?: Maybe<ValidateUser>;
  verifyCard?: Maybe<VerifyCard>;
}


export type RootMutationAcceptP2pRequestArgs = {
  p2pRequestId?: Maybe<Scalars['String']>;
};


export type RootMutationActivateOfferArgs = {
  offerId: Scalars['Int'];
};


export type RootMutationAddMemberEmailArgs = {
  email: Scalars['String'];
};


export type RootMutationAddP2pContactArgs = {
  contactEmail?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationApplyMembershipCodeArgs = {
  membershipCode?: Maybe<Scalars['String']>;
};


export type RootMutationApplyOnboardMemberArgs = {
  apply?: Maybe<ApplyInputType>;
  dueDiligence?: Maybe<Array<Maybe<DueDiligenceAnswerInputType>>>;
  experian?: Maybe<ExperianInputType>;
  tnc?: Maybe<TncInputType>;
};


export type RootMutationBulkCreateAccountBalanceRowArgs = {
  accountBalanceRows?: Maybe<Array<Maybe<AccountBalanceRowInputType>>>;
};


export type RootMutationBulkCreateCardNotificationRowArgs = {
  cardNotificationRows?: Maybe<Array<Maybe<CardNotificationRowInputType>>>;
};


export type RootMutationBulkCreateCustomerNotificationRowArgs = {
  customerRows?: Maybe<Array<Maybe<CustomerFileRowInputType>>>;
};


export type RootMutationBulkCreateCustomerRegNotificationRowArgs = {
  customerRegRows?: Maybe<Array<Maybe<CustomerRegistrationFileRowInputType>>>;
};


export type RootMutationBulkCreateEventNotificationRowArgs = {
  eventNotificationRows?: Maybe<Array<Maybe<EventNotificationRowInputType>>>;
};


export type RootMutationBulkCreatePostedTransactionRowArgs = {
  postedTransactionRows?: Maybe<Array<Maybe<PostedTransactionRowInputType>>>;
};


export type RootMutationBulkCreateTransferHistoryArgs = {
  transferHistories?: Maybe<Array<Maybe<TransferHistoryInputType>>>;
};


export type RootMutationCancelP2pRequestArgs = {
  p2pRequestId?: Maybe<Scalars['String']>;
};


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


export type RootMutationConfirmVerificationCodeArgs = {
  code: Scalars['String'];
  memberId: Scalars['String'];
};


export type RootMutationCreateCardNotificationRowArgs = {
  cardNotificationRow?: Maybe<CardNotificationRowInputType>;
};


export type RootMutationCreateEventNotificationHeaderArgs = {
  fileCreatedDate?: Maybe<Scalars['DateTime']>;
  fileEffectiveDate?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  recordCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};


export type RootMutationCreateEventNotificationRowArgs = {
  eventNotificationRow?: Maybe<EventNotificationRowInputType>;
};


export type RootMutationCreateLoginArgs = {
  email?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type RootMutationCreatePinwheelLinkArgs = {
  accountName?: Maybe<Scalars['String']>;
  accountNumber: Scalars['String'];
  accountType: Scalars['String'];
  amountNumber?: Maybe<Scalars['Decimal']>;
  disableDirectDepositSplitting?: Maybe<Scalars['Boolean']>;
  employerId?: Maybe<Scalars['String']>;
  job: Scalars['String'];
  orgName: Scalars['String'];
  pinwheelVersion?: Maybe<PinwheelVersionType>;
  platformId?: Maybe<Scalars['String']>;
  routingNumber: Scalars['String'];
  skipEmployerSearch?: Maybe<Scalars['Boolean']>;
  skipExitSurvey?: Maybe<Scalars['Boolean']>;
  skipIntroScreen?: Maybe<Scalars['Boolean']>;
};


export type RootMutationCreateTransferHistoryArgs = {
  fileCreationDate: Scalars['Int'];
  filename: Scalars['String'];
  folderName: Scalars['String'];
  passed: Scalars['Boolean'];
  success: Scalars['Boolean'];
};


export type RootMutationCreateUpdateTendIdArgs = {
  tendId?: Maybe<Scalars['String']>;
};


export type RootMutationDeclineP2pRequestArgs = {
  p2pRequestId?: Maybe<Scalars['String']>;
};


export type RootMutationDeleteEventNotificationHeaderArgs = {
  id: Scalars['ID'];
};


export type RootMutationDeleteEventNotificationRowArgs = {
  id: Scalars['ID'];
};


export type RootMutationDeleteP2pContactArgs = {
  contactId?: Maybe<Scalars['String']>;
};


export type RootMutationDeleteTransferHistoryArgs = {
  id: Scalars['ID'];
};


export type RootMutationExternalToInternalTransferArgs = {
  amount?: Maybe<Scalars['Float']>;
  memberId?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
};


export type RootMutationInternalToExternalTransferArgs = {
  amount?: Maybe<Scalars['Float']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  memberId?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};


export type RootMutationInternalTransferArgs = {
  amount?: Maybe<Scalars['Float']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  memberId?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
};


export type RootMutationInvexOnboardArgs = {
  accountLevel?: Maybe<AccountLevelInputType>;
  address?: Maybe<AddressInfoInputType>;
  beneficiary?: Maybe<BeneficiaryInputType>;
  fundProvider?: Maybe<FundProviderInputType>;
  general?: Maybe<GeneralInfoInputType>;
  govDisclosure?: Maybe<GovDisclosureInfoInputType>;
  identityConfirmation?: Maybe<IdentityInformationInputType>;
  personal?: Maybe<PersonalInputType>;
  tnc?: Maybe<TncInvexAcceptanceInputType>;
  trigger?: Maybe<IndividualTriggerInputType>;
};


export type RootMutationLinkExternalAccountArgs = {
  memberId?: Maybe<Scalars['String']>;
  plaidAccountId?: Maybe<Scalars['String']>;
  plaidToken?: Maybe<Scalars['String']>;
};


export type RootMutationLockCardArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationLoginMemberArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


export type RootMutationNbkcOnboardArgs = {
  address?: Maybe<AddressInputType>;
  dueDiligence?: Maybe<Array<Maybe<DueDiligenceAnswersInputType>>>;
  eSign?: Maybe<ESignAcceptanceInputType>;
  email?: Maybe<Scalars['String']>;
  identity?: Maybe<IdentityInputType>;
  mla?: Maybe<MlaInputType>;
  name?: Maybe<NameInputType>;
  primaryDocument?: Maybe<PrimaryDocumentType>;
  secondaryDocument?: Maybe<SecondaryDocumentType>;
  tnc?: Maybe<TncAcceptanceInputType>;
  trigger?: Maybe<TriggerInputType>;
};


export type RootMutationOnboardMemberArgs = {
  countryId: Scalars['String'];
  email: Scalars['String'];
  language?: Maybe<Language>;
  phone: Scalars['String'];
};


export type RootMutationOrderCardArgs = {
  memberId?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
};


export type RootMutationP2pRequestArgs = {
  amount?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  recipientEmails?: Maybe<Array<Maybe<Scalars['String']>>>;
  requesterMemberId?: Maybe<Scalars['String']>;
};


export type RootMutationP2pTransferArgs = {
  amount?: Maybe<Scalars['Float']>;
  note?: Maybe<Scalars['String']>;
  recipientContactId?: Maybe<Scalars['String']>;
  senderMemberId?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
};


export type RootMutationPopulateRetailMeNotCouponsArgs = {
  n?: Maybe<Scalars['Int']>;
};


export type RootMutationPreferencesSubscriberArgs = {
  memberId?: Maybe<Scalars['String']>;
  preference: SubscriberInput;
};


export type RootMutationRegisterDeviceArgs = {
  bundleId?: Maybe<Scalars['String']>;
  platform?: Maybe<PlatformType>;
  token?: Maybe<Scalars['String']>;
};


export type RootMutationRegisterExperianSubscriberArgs = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  disclosureDatetime?: Maybe<Scalars['DateTime']>;
  dob?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};


export type RootMutationRegisterWithAffinityArgs = {
  zipCode?: Maybe<Scalars['String']>;
};


export type RootMutationReplaceCardArgs = {
  cardReplaceReason: CardReplaceReason;
  memberId: Scalars['String'];
  newPin?: Maybe<Scalars['String']>;
};


export type RootMutationReplaceExternalAccountArgs = {
  memberId?: Maybe<Scalars['String']>;
  plaidAccountId?: Maybe<Scalars['String']>;
  plaidToken?: Maybe<Scalars['String']>;
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


export type RootMutationResetPinArgs = {
  memberId?: Maybe<Scalars['String']>;
  newPin?: Maybe<Scalars['String']>;
};


export type RootMutationSaveDueDiligenceAnswersArgs = {
  answers?: Maybe<Array<Maybe<DueDiligenceAnswerInputType>>>;
};


export type RootMutationSendOneTimePasswordArgs = {
  memberId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};


export type RootMutationSendP2pVerificationCodeArgs = {
  senderMemberId?: Maybe<Scalars['String']>;
};


export type RootMutationSendVerificationCodeArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationSetCouponRetrievedIterableArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationTendOnboardArgs = {
  onboard?: Maybe<TendOnboardInputType>;
  referrer?: Maybe<ReferrerInputType>;
};


export type RootMutationTestLoggerArgs = {
  logCount?: Maybe<Scalars['Int']>;
  logType?: Maybe<Array<Maybe<Scalars['String']>>>;
  message?: Maybe<Scalars['String']>;
  optional?: Maybe<Scalars['String']>;
  userInfo?: Maybe<UserType>;
};


export type RootMutationTransferFundsArgs = {
  checkingAmount?: Maybe<Scalars['Float']>;
  memberId?: Maybe<Scalars['String']>;
  savingsAmount?: Maybe<Scalars['Float']>;
};


export type RootMutationUnlockCardArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationUpdateCardNotificationRowArgs = {
  cardNotificationRow?: Maybe<CardNotificationRowInputType>;
  id: Scalars['ID'];
};


export type RootMutationUpdateEventNotificationHeaderArgs = {
  fileCreatedDate?: Maybe<Scalars['DateTime']>;
  fileEffectiveDate?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  recordCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};


export type RootMutationUpdateEventNotificationRowArgs = {
  eventNotificationRow?: Maybe<EventNotificationRowInputType>;
  id: Scalars['ID'];
};


export type RootMutationUpdateMemberApplicationProgressArgs = {
  applicationProgress?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationUpdateMemberDevicesArgs = {
  deviceOs?: Maybe<Scalars['String']>;
  deviceUuid?: Maybe<Scalars['String']>;
};


export type RootMutationUpdateMemberReferrerArgs = {
  companyCode?: Maybe<Scalars['String']>;
  friendEmail?: Maybe<Scalars['String']>;
  friendTendId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};


export type RootMutationUpdatePersonalDetailsArgs = {
  bankIdentifier: Scalars['String'];
  customerFields?: Maybe<CustomerFieldsInputType>;
  memberId: Scalars['String'];
  otpCode?: Maybe<Scalars['String']>;
};


export type RootMutationUpdateTransferHistoryArgs = {
  filename?: Maybe<Scalars['String']>;
  folderName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  passed?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};


export type RootMutationValidateUserArgs = {
  phrase: Scalars['String'];
};


export type RootMutationVerifyCardArgs = {
  dob?: Maybe<Scalars['Date']>;
  last4CardDigits?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};

export interface RootQuery {
  appVersion?: Maybe<AppVersionOutputType>;
  card?: Maybe<CardType>;
  coreproAccountInfo?: Maybe<CoreProAccountInfoOutputType>;
  creditScoreDataUrl?: Maybe<CreditScoreDataUrlType>;
  customer?: Maybe<CustomerFieldsOutputType>;
  dueDiligenceQuestions?: Maybe<Array<Maybe<DueDiligenceQuestionType>>>;
  eventNotificationHeader?: Maybe<EventNotificationHeaderOutputType>;
  eventNotificationHeaders?: Maybe<Array<Maybe<EventNotificationHeaderOutputType>>>;
  eventNotificationRow?: Maybe<EventNotificationRowOutputType>;
  eventNotificationRows?: Maybe<Array<Maybe<EventNotificationRowOutputType>>>;
  eventNotificationRowsByEvent?: Maybe<Array<Maybe<EventNotificationRowOutputType>>>;
  externalAccount?: Maybe<ExternalAccountType>;
  findAtmByCoordinates?: Maybe<Array<Maybe<AtmType>>>;
  getAddressAutoComplete?: Maybe<Array<Maybe<AutoCompletedAddressType>>>;
  getCategories?: Maybe<Array<Maybe<CategoryItemOutputType>>>;
  getCoupons?: Maybe<Array<Maybe<RetailMeNotCouponType>>>;
  getCustomer?: Maybe<CustomerDataType>;
  getCustomers?: Maybe<Array<Maybe<CustomerDataType>>>;
  getFeaturedOffers?: Maybe<Array<Maybe<OfferItemOutputType>>>;
  getMemberApplicationProgress?: Maybe<SafeMemberType>;
  getNbkcOnboardMember?: Maybe<NbkcOnboardDetailsType>;
  getOfferDetails?: Maybe<OfferDetailsOutputType>;
  getOffers?: Maybe<Array<Maybe<OfferItemOutputType>>>;
  getSchemas?: Maybe<Array<Maybe<GetSchemaOutputType>>>;
  getStateCityMunicipality?: Maybe<Array<Maybe<InvexStateCityMunicipalityItemType>>>;
  getTermsAndConditions?: Maybe<TermsAndConditionsType>;
  me?: Maybe<MemberType>;
  memberDevices?: Maybe<Array<Maybe<MemberDeviceType>>>;
  p2pContacts?: Maybe<Array<Maybe<P2pContactType>>>;
  p2pRequestsFromMe?: Maybe<Array<Maybe<P2PRequestType>>>;
  p2pRequestsToMe?: Maybe<Array<Maybe<P2PRequestType>>>;
  plaidLinkToken?: Maybe<PlaidLinkTokenType>;
  preferences?: Maybe<Array<Maybe<ContactPreferenceType>>>;
  supportedCountries?: Maybe<Array<Maybe<CountryType>>>;
  tendId?: Maybe<Scalars['String']>;
  transactions?: Maybe<TransactionListType>;
  transferHistories?: Maybe<Array<Maybe<TransferHistoryOutputType>>>;
  transferHistory?: Maybe<TransferHistoryOutputType>;
}


export type RootQueryAppVersionArgs = {
  currentVersion: Scalars['String'];
  platform: Platform;
  country: Country;
  deviceId?: Maybe<Scalars['String']>;
};


export type RootQueryCardArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootQueryCoreproAccountInfoArgs = {
  email?: Maybe<Scalars['String']>;
};


export type RootQueryCreditScoreDataUrlArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootQueryCustomerArgs = {
  memberId: Scalars['ID'];
};


export type RootQueryEventNotificationHeaderArgs = {
  id: Scalars['ID'];
};


export type RootQueryEventNotificationHeadersArgs = {
  fileName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type RootQueryEventNotificationRowArgs = {
  id: Scalars['ID'];
};


export type RootQueryEventNotificationRowsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RootQueryEventNotificationRowsByEventArgs = {
  events?: Maybe<Array<Maybe<Scalars['Int']>>>;
  status?: Maybe<Scalars['String']>;
};


export type RootQueryExternalAccountArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootQueryFindAtmByCoordinatesArgs = {
  bankId: BankIdentifier;
  locationType?: Maybe<LocationType>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};


export type RootQueryGetAddressAutoCompleteArgs = {
  lookup: Scalars['String'];
};


export type RootQueryGetCouponsArgs = {
  date?: Maybe<Scalars['String']>;
};


export type RootQueryGetCustomerArgs = {
  memberId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
};


export type RootQueryGetCustomersArgs = {
  currentOnboardingStatus?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  bank?: Maybe<BankIdentifier>;
};


export type RootQueryGetMemberApplicationProgressArgs = {
  email?: Maybe<Scalars['String']>;
};


export type RootQueryGetOfferDetailsArgs = {
  offerId?: Maybe<Scalars['Int']>;
};


export type RootQueryGetOffersArgs = {
  zipCode?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  shopType?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type RootQueryGetSchemasArgs = {
  applicationName?: Maybe<Scalars['String']>;
  schemaType?: Maybe<Scalars['String']>;
  applicationRoute?: Maybe<Scalars['String']>;
};


export type RootQueryGetStateCityMunicipalityArgs = {
  zipCode: Scalars['String'];
};


export type RootQueryP2pContactsArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootQueryP2pRequestsFromMeArgs = {
  memberId?: Maybe<Scalars['String']>;
  requestStatus?: Maybe<P2pRequestStatus>;
};


export type RootQueryP2pRequestsToMeArgs = {
  memberId?: Maybe<Scalars['String']>;
  requestStatus?: Maybe<P2pRequestStatus>;
};


export type RootQueryPlaidLinkTokenArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootQueryPreferencesArgs = {
  memberId?: Maybe<Scalars['String']>;
};


export type RootQueryTransactionsArgs = {
  memberId: Scalars['String'];
  accountId: Scalars['Int'];
  amountMin?: Maybe<Scalars['Float']>;
  amountMax?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  isCredit?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type RootQueryTransferHistoriesArgs = {
  success?: Maybe<Scalars['Boolean']>;
  passed?: Maybe<Scalars['Boolean']>;
  folderName?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type RootQueryTransferHistoryArgs = {
  id: Scalars['ID'];
};

export interface SafeBankType {
  identifier?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** shortName */
  shortName?: Maybe<Scalars['String']>;
}

export interface SafeMemberType {
  /** accountLevel */
  accountLevel?: Maybe<Scalars['String']>;
  /** accountStatus */
  accountStatus?: Maybe<Scalars['String']>;
  /** applicationProgress */
  applicationProgress?: Maybe<Scalars['String']>;
  /** applicationStatus */
  applicationStatus?: Maybe<Scalars['String']>;
  bank?: Maybe<SafeBankType>;
  /** bank */
  bankId?: Maybe<Scalars['ID']>;
  /** country */
  countryId?: Maybe<Scalars['ID']>;
  /** customerId */
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
}

export interface SaveDueDiligenceAnswers {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface SecondaryDocumentType {
  /** uploaded KYC document type */
  type?: Maybe<Scalars['String']>;
  /** uploaded KYC document */
  image?: Maybe<Scalars['String']>;
  /** uploaded KYC document's extension */
  extension?: Maybe<Scalars['String']>;
}

export interface SendOneTimePassword {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** OTP Code */
  otpCode?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
}

export interface SendP2pVerificationCode {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  code?: Maybe<VerificationCodeType>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface SendVerificationCode {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  code?: Maybe<VerificationCodeType>;
}

export interface StoreItemOutputType {
  id?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
}

export interface Subscriber {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface SubscriberInput {
  preferenceId?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}

export interface TncAcceptanceInputType {
  tnc?: Maybe<Scalars['Boolean']>;
  tncCorporate?: Maybe<Scalars['Boolean']>;
  tncTend?: Maybe<Scalars['Boolean']>;
  registerCreditScore?: Maybe<Scalars['Boolean']>;
}

export interface TncAcceptanceOutputType {
  tnc?: Maybe<Scalars['Boolean']>;
  tncCorporate?: Maybe<Scalars['Boolean']>;
  tncTend?: Maybe<Scalars['Boolean']>;
}

export interface TncInputType {
  termsAccepted?: Maybe<Scalars['Boolean']>;
}

export interface TncInvexAcceptanceInputType {
  tnc?: Maybe<Scalars['Boolean']>;
  corporateTermsAccepted?: Maybe<Scalars['Boolean']>;
}

/** An enumeration. */
export enum TendCurrency {
  Usd = 'USD'
}

export interface TendErrorType {
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

/**
 * - OnboardMember
 * - UpdateReferrer
 * - SendVerificationCode
 */
export interface TendOnboard {
  code?: Maybe<VerificationCodeType>;
  member?: Maybe<SafeMemberType>;
}

export interface TendOnboardInputType {
  /** Member Email */
  email: Scalars['String'];
  /** Member Phone Number */
  phone: Scalars['String'];
  /** Member Country ID */
  countryId: Scalars['String'];
  /** Member Language */
  language?: Maybe<Language>;
}

export interface TermsAndConditionsType {
  tnc?: Maybe<TncAcceptanceOutputType>;
}

export interface TestLoggingMutation {
  result?: Maybe<Scalars['String']>;
}

export interface TransactionDescriptionType {
  note?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
}

export interface TransactionListType {
  pending?: Maybe<Array<Maybe<TransactionType>>>;
  recent?: Maybe<Array<Maybe<TransactionType>>>;
  scheduled?: Maybe<Array<Maybe<TransactionType>>>;
}

export interface TransactionType {
  transactionId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  description?: Maybe<TransactionDescriptionType>;
  createdDate?: Maybe<Scalars['Date']>;
  availableDate?: Maybe<Scalars['Date']>;
  settledDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  isCredit?: Maybe<Scalars['Boolean']>;
  friendlyDescription?: Maybe<Scalars['String']>;
}

/** An enumeration. */
export enum TransferFrequency {
  Once = 'ONCE',
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY'
}

export interface TransferFunds {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  transfers?: Maybe<Array<Maybe<TransferType>>>;
}

export interface TransferHistoryInputType {
  filename: Scalars['String'];
  folderName: Scalars['String'];
  success: Scalars['Boolean'];
  passed: Scalars['Boolean'];
  fileCreationDate: Scalars['Int'];
}

export interface TransferHistoryOutputType {
  id: Scalars['String'];
  filename?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  passed?: Maybe<Scalars['Boolean']>;
  folderName?: Maybe<Scalars['String']>;
  fileCreatedDate?: Maybe<Scalars['DateTime']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  updatedDate?: Maybe<Scalars['DateTime']>;
}

/** An enumeration. */
export enum TransferTiming {
  Immediate = 'IMMEDIATE',
  Scheduled = 'SCHEDULED',
  Recurring = 'RECURRING'
}

export interface TransferType {
  transactionId?: Maybe<Scalars['String']>;
  fromAccountId?: Maybe<Scalars['Int']>;
  toAccountId?: Maybe<Scalars['Int']>;
  fromAccountLocation?: Maybe<AccountLocation>;
  toAccountLocation?: Maybe<AccountLocation>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<TendCurrency>;
  scheduledTransferDate?: Maybe<Scalars['Date']>;
  transferCompletionDatetime?: Maybe<Scalars['DateTime']>;
  transferFrequency?: Maybe<TransferFrequency>;
  transferTiming?: Maybe<TransferTiming>;
}

export interface TriggerInputType {
  creditScore?: Maybe<Scalars['Boolean']>;
  cashback?: Maybe<Scalars['Boolean']>;
  kyc?: Maybe<Scalars['Boolean']>;
  createCustomer?: Maybe<Scalars['Boolean']>;
  createAccounts?: Maybe<Scalars['Boolean']>;
  iterableUpdateIdentity?: Maybe<Scalars['Boolean']>;
  nbkcBeneficiary?: Maybe<Scalars['Boolean']>;
  nbkcDueDiligence?: Maybe<Scalars['Boolean']>;
  uploadPrimary?: Maybe<Scalars['Boolean']>;
  uploadSecondary?: Maybe<Scalars['Boolean']>;
}

export interface TriggerOutputType {
  creditScore?: Maybe<Scalars['Boolean']>;
  cashback?: Maybe<Scalars['Boolean']>;
  kyc?: Maybe<Scalars['Boolean']>;
  nbkcCustomer?: Maybe<Scalars['Boolean']>;
  nbkcAccounts?: Maybe<Scalars['Boolean']>;
}

/** An enumeration. */
export enum UnitOfMeasure {
  Imperial = 'IMPERIAL',
  Metric = 'METRIC'
}

export interface UnlockCard {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  card?: Maybe<CardType>;
}

export interface UpdateCardNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  cardNotificationRow?: Maybe<CardNotificationRowOutputType>;
}

export interface UpdateEventNotificationHeader {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  eventNotificationHeader?: Maybe<EventNotificationHeaderOutputType>;
}

export interface UpdateEventNotificationRow {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  eventNotificationRow?: Maybe<EventNotificationRowOutputType>;
}

export interface UpdateMemberApplicationProgress {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<SafeMemberType>;
}

export interface UpdateMemberDevices {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
}

export interface UpdateMemberReferrer {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  member?: Maybe<SafeMemberType>;
}

export interface UpdatePersonalDetails {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  /** Updated Fields */
  updatedFields?: Maybe<CustomerFieldsOutputType>;
}

export interface UpdateTransferHistory {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  transferHistory?: Maybe<TransferHistoryOutputType>;
}

export interface UserType {
  id?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
}

/**
 * This mutation serves for lambda function.
 * It decrypts the encrypted information
 * and validates the user. Returns a new token.
 */
export interface ValidateUser {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request status */
  message?: Maybe<Scalars['String']>;
  /** Member's Onboard Token */
  onboardToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<TendErrorType>>>;
}

export interface VerificationCodeType {
  /** createdDate */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** _id */
  id?: Maybe<Scalars['ID']>;
  member?: Maybe<MemberType>;
  /** memberId */
  memberId?: Maybe<Scalars['ID']>;
  /** numberOfTries */
  numberOfTries?: Maybe<Scalars['Int']>;
  purpose?: Maybe<Scalars['String']>;
  /** updatedDate */
  updatedDate?: Maybe<Scalars['DateTime']>;
  validated?: Maybe<Scalars['Boolean']>;
  /** verificationCode */
  verificationCode?: Maybe<Scalars['String']>;
}

export interface VerifyCard {
  /** Request status */
  ok?: Maybe<Scalars['Boolean']>;
  /** Request message */
  message?: Maybe<Scalars['String']>;
  card?: Maybe<CardType>;
}

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<Pick<MemberType, 'id' | 'email' | 'isActive' | 'lastLoggedIn' | 'createdDate' | 'updatedDate'>> };

export type CreateLoginMutationVariables = Exact<{
  memberId: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateLoginMutation = { createLogin?: Maybe<(
    Pick<CreateLogin, 'ok' | 'message'>
    & { member?: Maybe<(
      Pick<MemberType, 'id' | 'bankId' | 'countryId' | 'inviterId' | 'accountStatus' | 'applicationProgress' | 'applicationStatus' | 'companyCode' | 'customerId' | 'email' | 'phone' | 'language' | 'friendEmail' | 'memberType' | 'createdDate' | 'updatedDate'>
      & { bank?: Maybe<Pick<BankType, 'identifier'>> }
    )> }
  )> };

export type LoginMemberMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type LoginMemberMutation = { loginMember?: Maybe<(
    Pick<LoginMember, 'ok' | 'message' | 'accessToken' | 'refreshToken'>
    & { member?: Maybe<(
      Pick<MemberType, 'id' | 'bankId' | 'countryId' | 'inviterId' | 'accountStatus' | 'applicationProgress' | 'applicationStatus' | 'companyCode' | 'customerId' | 'email' | 'phone' | 'language' | 'friendEmail' | 'memberType' | 'createdDate' | 'updatedDate'>
      & { bank?: Maybe<Pick<BankType, 'identifier'>> }
    )> }
  )> };

export type RegisterDeviceMutationVariables = Exact<{
  bundleId: Scalars['String'];
  platform: PlatformType;
  token: Scalars['String'];
}>;


export type RegisterDeviceMutation = { registerDevice?: Maybe<Pick<RegisterDevice, 'ok' | 'message'>> };

export type LogoutMemberMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMemberMutation = { logoutMember?: Maybe<Pick<LogoutMember, 'ok' | 'message'>> };

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { changePassword?: Maybe<Pick<ChangePassword, 'ok' | 'message'>> };

export type ChangeForgottenPasswordMutationVariables = Exact<{
  memberId: Scalars['String'];
  tempToken: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeForgottenPasswordMutation = { changeForgottenPassword?: Maybe<Pick<ChangeForgottenPassword, 'ok' | 'message'>> };

export type ResetPasswordMutationVariables = Exact<{
  memberId: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['String']>;
  ssnNumber?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
}>;


export type ResetPasswordMutation = { resetPassword?: Maybe<Pick<ResetPassword, 'ok' | 'message' | 'tempToken'>> };

export type RequestResetPasswordMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
}>;


export type RequestResetPasswordMutation = { requestResetPassword?: Maybe<(
    Pick<RequestResetPassword, 'ok' | 'bankIdentifier' | 'memberId'>
    & { member?: Maybe<Pick<AbstractMemberType, 'id' | 'email' | 'phone' | 'accountStatus' | 'applicationProgress' | 'applicationStatus'>> }
  )> };

export type ValidateUserMutationVariables = Exact<{
  phrase: Scalars['String'];
}>;


export type ValidateUserMutation = { validateUser?: Maybe<Pick<ValidateUser, 'ok' | 'message' | 'onboardToken'>> };

export type CoreproAccountInfoQueryVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type CoreproAccountInfoQuery = { coreproAccountInfo?: Maybe<(
    Pick<CoreProAccountInfoOutputType, 'accountStatus'>
    & { card?: Maybe<Pick<CardInfoOutputType, 'isCardOrdered' | 'cardStatus'>>, member?: Maybe<Pick<SafeMemberType, 'id' | 'bankId' | 'countryId' | 'applicationProgress' | 'applicationStatus' | 'accountStatus' | 'customerId' | 'email'>> }
  )> };

export type TendIdQueryVariables = Exact<{ [key: string]: never; }>;


export type TendIdQuery = Pick<RootQuery, 'tendId'>;

export type CreateUpdateTendIdMutationVariables = Exact<{
  tendId?: Maybe<Scalars['String']>;
}>;


export type CreateUpdateTendIdMutation = { createUpdateTendId?: Maybe<Pick<CreateUpdateTendId, 'ok' | 'message' | 'tendId'>> };

export type ResetTendIdMutationVariables = Exact<{ [key: string]: never; }>;


export type ResetTendIdMutation = { resetTendId?: Maybe<Pick<ResetTendId, 'ok' | 'message'>> };

export type CheckTendIdUniqueMutationVariables = Exact<{
  memberId: Scalars['String'];
  tendId?: Maybe<Scalars['String']>;
}>;


export type CheckTendIdUniqueMutation = { checkTendIdUnique?: Maybe<Pick<CheckTendIdUnique, 'ok' | 'isUnique' | 'belongsToUser'>> };

export type AppVersionQueryVariables = Exact<{
  currentVersion: Scalars['String'];
  platform: Platform;
  country: Country;
  deviceId?: Maybe<Scalars['String']>;
}>;


export type AppVersionQuery = { appVersion?: Maybe<Pick<AppVersionOutputType, 'updateStatus' | 'newVersion' | 'updateUrl'>> };

export type ResetPasswordWithOtpMutationVariables = Exact<{
  code?: Maybe<Scalars['String']>;
  memberId: Scalars['String'];
}>;


export type ResetPasswordWithOtpMutation = { resetPasswordWithOtp?: Maybe<Pick<ResetPasswordWithOtp, 'ok' | 'message' | 'tempToken'>> };

export type UpdateMemberDevicesMutationVariables = Exact<{
  deviceOs: Scalars['String'];
  deviceUuid: Scalars['String'];
}>;


export type UpdateMemberDevicesMutation = { updateMemberDevices?: Maybe<Pick<UpdateMemberDevices, 'ok' | 'message'>> };

export type CardQueryVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type CardQuery = { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus' | 'isActive'>> };

export type OrderCardMutationVariables = Exact<{
  memberId: Scalars['String'];
  pin: Scalars['String'];
}>;


export type OrderCardMutation = { orderCard?: Maybe<(
    Pick<OrderCard, 'ok' | 'message'>
    & { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus'>> }
  )> };

export type ResetPinMutationVariables = Exact<{
  memberId: Scalars['String'];
  newPin: Scalars['String'];
}>;


export type ResetPinMutation = { resetPin?: Maybe<(
    Pick<ResetPin, 'ok' | 'message'>
    & { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus'>> }
  )> };

export type VerifyCardMutationVariables = Exact<{
  memberId: Scalars['String'];
  last4CardDigits: Scalars['String'];
  dob: Scalars['Date'];
}>;


export type VerifyCardMutation = { verifyCard?: Maybe<(
    Pick<VerifyCard, 'ok' | 'message'>
    & { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus'>> }
  )> };

export type LockCardMutationVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type LockCardMutation = { lockCard?: Maybe<(
    Pick<LockCard, 'ok' | 'message'>
    & { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus' | 'isActive'>> }
  )> };

export type UnlockCardMutationVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type UnlockCardMutation = { unlockCard?: Maybe<(
    Pick<UnlockCard, 'ok' | 'message'>
    & { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus' | 'isActive'>> }
  )> };

export type ReplaceCardMutationVariables = Exact<{
  memberId: Scalars['String'];
  cardReplaceReason: CardReplaceReason;
  newPin?: Maybe<Scalars['String']>;
}>;


export type ReplaceCardMutation = { replaceCard?: Maybe<(
    Pick<ReplaceCard, 'ok' | 'message'>
    & { card?: Maybe<Pick<CardType, 'cardId' | 'customerId' | 'accountId' | 'cardNumberMasked' | 'cardStatus' | 'isActive'>> }
  )> };

export type FindAtmByCoordinatesQueryVariables = Exact<{
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  bankId: BankIdentifier;
  locationType?: Maybe<LocationType>;
}>;


export type FindAtmByCoordinatesQuery = { findAtmByCoordinates?: Maybe<Array<Maybe<(
    Pick<AtmType, 'name' | 'description' | 'distance'>
    & { coordinates?: Maybe<Pick<AtmCoordinatesType, 'lat' | 'lng'>>, addressComponents?: Maybe<Array<Maybe<Pick<AtmAddressComponentsType, 'longName' | 'shortName' | 'types'>>>>, address?: Maybe<Pick<AtmAddressType, 'city' | 'state' | 'street' | 'postalCode'>> }
  )>>> };

export type RegisterWithAffinityMutationVariables = Exact<{
  zipCode: Scalars['String'];
}>;


export type RegisterWithAffinityMutation = { registerWithAffinity?: Maybe<Pick<RegisterWithAffinity, 'ok' | 'message'>> };

export type ActivateOfferMutationVariables = Exact<{
  offerId: Scalars['Int'];
}>;


export type ActivateOfferMutation = { activateOffer?: Maybe<Pick<ActivateOffer, 'ok' | 'message'>> };

export type GetOffersQueryVariables = Exact<{
  zipCode?: Maybe<Scalars['String']>;
  shopType?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
}>;


export type GetOffersQuery = { getOffers?: Maybe<Array<Maybe<Pick<OfferItemOutputType, 'id' | 'activated' | 'title' | 'merchant' | 'image' | 'shopType' | 'tenWord' | 'twentyWord' | 'outsideLink' | 'expiration' | 'merchantId' | 'activationRequired' | 'offerValue'>>>> };

export type GetFeaturedOffersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedOffersQuery = { getFeaturedOffers?: Maybe<Array<Maybe<Pick<OfferItemOutputType, 'id' | 'activated' | 'title' | 'merchant' | 'image' | 'shopType' | 'tenWord' | 'twentyWord' | 'outsideLink' | 'expiration' | 'merchantId' | 'activationRequired' | 'offerValue'>>>> };

export type GetOfferDetailsQueryVariables = Exact<{
  offerId: Scalars['Int'];
}>;


export type GetOfferDetailsQuery = { getOfferDetails?: Maybe<(
    Pick<OfferDetailsOutputType, 'id' | 'activated' | 'title' | 'merchant' | 'image' | 'shopType' | 'tenWord' | 'twentyWord' | 'outsideLink' | 'expiration' | 'merchantId' | 'activationRequired' | 'offerValue'>
    & { stores?: Maybe<Array<Maybe<Pick<StoreItemOutputType, 'id' | 'address' | 'city' | 'zip' | 'lat' | 'long' | 'distance'>>>> }
  )> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { getCategories?: Maybe<Array<Maybe<Pick<CategoryItemOutputType, 'id' | 'name'>>>> };

export type GetCouponsQueryVariables = Exact<{
  date?: Maybe<Scalars['String']>;
}>;


export type GetCouponsQuery = { getCoupons?: Maybe<Array<Maybe<Pick<RetailMeNotCouponType, 'rmnId' | 'couponDate' | 'applicableOn' | 'category' | 'categoryRank' | 'code' | 'description' | 'eventRank' | 'eventType' | 'exclusions' | 'logourl' | 'merchantUrl' | 'merchantRank' | 'monetized' | 'popularRank' | 'source' | 'startDate' | 'store' | 'terms' | 'title' | 'url' | 'validTill' | 'validity' | 'validationTimestamp' | 'rmnUrl' | 'rmnMobileClicks' | 'rmnDesktopClicks' | 'rmnAppClicks' | 'merchantCategory' | 'tag' | 'logoBackgroundColor'>>>> };

export type SetCouponRetrievedIterableMutationVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type SetCouponRetrievedIterableMutation = { setCouponRetrievedIterable?: Maybe<Pick<CouponRetrievedIterable, 'ok' | 'message'>> };

export type RegisterExperianSubscriberMutationVariables = Exact<{
  memberId?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  disclosureDatetime?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
}>;


export type RegisterExperianSubscriberMutation = { registerExperianSubscriber?: Maybe<(
    Pick<RegisterExperianSubscriber, 'ok' | 'message'>
    & { member?: Maybe<Pick<MemberType, 'id' | 'applicationProgress'>> }
  )> };

export type CreditScoreDataUrlQueryVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type CreditScoreDataUrlQuery = { creditScoreDataUrl?: Maybe<Pick<CreditScoreDataUrlType, 'url'>> };

export type P2pContactsQueryVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type P2pContactsQuery = { p2pContacts?: Maybe<Array<Maybe<Pick<P2pContactType, 'id' | 'belongTo' | 'email' | 'contactType' | 'createdDate' | 'updatedDate'>>>> };

export type AddP2pContactMutationVariables = Exact<{
  memberId: Scalars['String'];
  contactEmail: Scalars['String'];
}>;


export type AddP2pContactMutation = { addP2pContact?: Maybe<(
    Pick<AddP2pContact, 'ok' | 'message'>
    & { contact?: Maybe<Pick<P2pContactType, 'id' | 'belongTo' | 'email' | 'contactType' | 'createdDate' | 'updatedDate'>>, errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type DeleteP2pContactMutationVariables = Exact<{
  contactId: Scalars['String'];
}>;


export type DeleteP2pContactMutation = { deleteP2pContact?: Maybe<(
    Pick<DeleteP2pContact, 'ok' | 'message'>
    & { contact?: Maybe<Pick<P2pContactType, 'id' | 'belongTo' | 'email' | 'contactType' | 'createdDate' | 'updatedDate'>>, errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'code' | 'message'>>>> }
  )> };

export type SendP2pVerificationCodeMutationVariables = Exact<{
  senderMemberId: Scalars['String'];
}>;


export type SendP2pVerificationCodeMutation = { sendP2pVerificationCode?: Maybe<(
    Pick<SendP2pVerificationCode, 'ok' | 'message'>
    & { errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type P2pTransferMutationVariables = Exact<{
  senderMemberId: Scalars['String'];
  recipientContactId: Scalars['String'];
  verificationCode: Scalars['String'];
  amount: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
}>;


export type P2pTransferMutation = { p2pTransfer?: Maybe<(
    Pick<P2pTransfer, 'ok' | 'message' | 'recipientName'>
    & { errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type P2pRequestMutationVariables = Exact<{
  amount?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  recipientEmails?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  requesterMemberId?: Maybe<Scalars['String']>;
}>;


export type P2pRequestMutation = { p2pRequest?: Maybe<(
    Pick<CreateP2pRequest, 'ok' | 'message' | 'date'>
    & { errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type P2pRequestsFromMeQueryVariables = Exact<{
  memberId?: Maybe<Scalars['String']>;
  requestStatus?: Maybe<P2pRequestStatus>;
}>;


export type P2pRequestsFromMeQuery = { p2pRequestsFromMe?: Maybe<Array<Maybe<Pick<P2PRequestType, 'amount' | 'confirmationCode' | 'createdAt' | 'id' | 'message' | 'receiverEmail' | 'requestStatus' | 'senderEmail' | 'updatedAt'>>>> };

export type P2pRequestsToMeQueryVariables = Exact<{
  memberId?: Maybe<Scalars['String']>;
  requestStatus?: Maybe<P2pRequestStatus>;
}>;


export type P2pRequestsToMeQuery = { p2pRequestsToMe?: Maybe<Array<Maybe<Pick<P2PRequestType, 'amount' | 'confirmationCode' | 'createdAt' | 'id' | 'message' | 'receiverEmail' | 'requestStatus' | 'senderEmail' | 'updatedAt'>>>> };

export type CancelP2pRequestMutationVariables = Exact<{
  p2pRequestId?: Maybe<Scalars['String']>;
}>;


export type CancelP2pRequestMutation = { cancelP2pRequest?: Maybe<(
    Pick<CancelP2pRequest, 'ok'>
    & { errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type DeclineP2pRequestMutationVariables = Exact<{
  p2pRequestId?: Maybe<Scalars['String']>;
}>;


export type DeclineP2pRequestMutation = { declineP2pRequest?: Maybe<(
    Pick<DeclineP2pRequest, 'ok'>
    & { errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type AcceotP2pRequestMutationVariables = Exact<{
  p2pRequestId?: Maybe<Scalars['String']>;
}>;


export type AcceotP2pRequestMutation = { acceptP2pRequest?: Maybe<(
    Pick<AcceptP2pRequest, 'ok'>
    & { errors?: Maybe<Array<Maybe<Pick<TendErrorType, 'name' | 'message' | 'code'>>>> }
  )> };

export type CustomerQueryVariables = Exact<{
  memberId: Scalars['ID'];
}>;


export type CustomerQuery = { customer?: Maybe<(
    Pick<CustomerFieldsOutputType, 'customerId' | 'firstName' | 'middleName' | 'lastName' | 'email' | 'dob'>
    & { addresses?: Maybe<Array<Maybe<Pick<AddressOutputType, 'addressType' | 'addressLine' | 'city' | 'state' | 'postalCode' | 'country'>>>>, phones?: Maybe<Array<Maybe<Pick<PhoneNumberOutputType, 'phoneType' | 'number'>>>> }
  )> };

export type UpdatePersonalDetailsMutationVariables = Exact<{
  memberId: Scalars['String'];
  bankIdentifier: Scalars['String'];
  customerFields?: Maybe<CustomerFieldsInputType>;
  otpCode: Scalars['String'];
}>;


export type UpdatePersonalDetailsMutation = { updatePersonalDetails?: Maybe<{ updatedFields?: Maybe<(
      Pick<CustomerFieldsOutputType, 'firstName' | 'middleName' | 'lastName' | 'email'>
      & { addresses?: Maybe<Array<Maybe<Pick<AddressOutputType, 'addressType' | 'addressLine' | 'city' | 'state' | 'postalCode' | 'country'>>>>, phones?: Maybe<Array<Maybe<Pick<PhoneNumberOutputType, 'phoneType' | 'number'>>>> }
    )> }> };

export type GetAddressAutoCompleteQueryVariables = Exact<{
  lookup: Scalars['String'];
}>;


export type GetAddressAutoCompleteQuery = { getAddressAutoComplete?: Maybe<Array<Maybe<Pick<AutoCompletedAddressType, 'streetLine' | 'secondary' | 'city' | 'state' | 'zipcode'>>>> };

export type GetSchemasQueryVariables = Exact<{
  applicationName?: Maybe<Scalars['String']>;
  schemaType?: Maybe<Scalars['String']>;
  applicationRoute?: Maybe<Scalars['String']>;
}>;


export type GetSchemasQuery = { getSchemas?: Maybe<Array<Maybe<Pick<GetSchemaOutputType, 'applicationName' | 'schemaType' | 'applicationRoute' | 'schema' | 'updatedBy' | 'createdAt' | 'updatedAt' | 'version'>>>> };

export type PreferencesQueryVariables = Exact<{
  memberId?: Maybe<Scalars['String']>;
}>;


export type PreferencesQuery = { preferences?: Maybe<Array<Maybe<(
    Pick<ContactPreferenceType, 'channelId' | 'channelName' | 'channelCategory'>
    & { contactPreferences?: Maybe<Array<Maybe<Pick<IContactPreference, 'preferenceId' | 'name' | 'enabled'>>>> }
  )>>> };

export type PreferencesSubscriberMutationVariables = Exact<{
  memberId?: Maybe<Scalars['String']>;
  preference: SubscriberInput;
}>;


export type PreferencesSubscriberMutation = { preferencesSubscriber?: Maybe<Pick<Subscriber, 'ok' | 'message'>> };

export type TransferHistoriesQueryVariables = Exact<{
  success?: Maybe<Scalars['Boolean']>;
  passed?: Maybe<Scalars['Boolean']>;
  folderName?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type TransferHistoriesQuery = { transferHistories?: Maybe<Array<Maybe<Pick<TransferHistoryOutputType, 'id' | 'filename' | 'folderName' | 'success' | 'passed' | 'fileCreatedDate' | 'createdDate' | 'updatedDate'>>>> };

export type TransferHistoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TransferHistoryQuery = { transferHistory?: Maybe<Pick<TransferHistoryOutputType, 'id' | 'filename' | 'success' | 'passed' | 'folderName' | 'fileCreatedDate' | 'createdDate' | 'updatedDate'>> };

export type EventNotificationHeadersQueryVariables = Exact<{
  fileName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type EventNotificationHeadersQuery = { eventNotificationHeaders?: Maybe<Array<Maybe<Pick<EventNotificationHeaderOutputType, 'id' | 'fileName' | 'recordCount' | 'fileCreatedDate' | 'fileEffectiveDate' | 'status'>>>> };

export type EventNotificationHeaderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EventNotificationHeaderQuery = { eventNotificationHeader?: Maybe<Pick<EventNotificationHeaderOutputType, 'id' | 'fileName' | 'recordCount' | 'fileCreatedDate' | 'fileEffectiveDate' | 'status'>> };

export type EventNotificationRowsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type EventNotificationRowsQuery = { eventNotificationRows?: Maybe<Array<Maybe<Pick<EventNotificationRowOutputType, 'id' | 'headerId' | 'customerId' | 'customerTag' | 'accountId' | 'accountTag' | 'externalAccountId' | 'externalAccountTag' | 'transactionId' | 'transactionTag' | 'description' | 'eventTypeId' | 'transactionTypeCode' | 'transactionSettledDate' | 'transactionAvailableDate' | 'userEventId' | 'masterId' | 'transactionAmount' | 'transactionCreatedDate' | 'transactionSubTypeCode' | 'fromAccountId' | 'fromAvailableBalance' | 'fromAccountBalance' | 'fromPendingBalance' | 'toAccountId' | 'toAvailableBalance' | 'toAccountBalance' | 'toPendingBalance' | 'modifiedById' | 'eventDate' | 'isAdminUser'>>>> };

export type EventNotificationRowsByEventQueryVariables = Exact<{
  events?: Maybe<Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>>;
  status?: Maybe<Scalars['String']>;
}>;


export type EventNotificationRowsByEventQuery = { eventNotificationRowsByEvent?: Maybe<Array<Maybe<Pick<EventNotificationRowOutputType, 'id' | 'headerId' | 'customerId' | 'userEventId' | 'status'>>>> };

export type EventNotificationRowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EventNotificationRowQuery = { eventNotificationRow?: Maybe<Pick<EventNotificationRowOutputType, 'id' | 'headerId' | 'customerId' | 'customerTag' | 'accountId' | 'accountTag' | 'externalAccountId' | 'externalAccountTag' | 'transactionId' | 'transactionTag' | 'description' | 'eventTypeId' | 'transactionTypeCode' | 'transactionSettledDate' | 'transactionAvailableDate' | 'userEventId' | 'masterId' | 'transactionAmount' | 'transactionCreatedDate' | 'transactionSubTypeCode' | 'fromAccountId' | 'fromAvailableBalance' | 'fromAccountBalance' | 'fromPendingBalance' | 'toAccountId' | 'toAvailableBalance' | 'toAccountBalance' | 'toPendingBalance' | 'modifiedById' | 'eventDate' | 'isAdminUser'>> };

export type CreateTransferHistoryMutationVariables = Exact<{
  filename: Scalars['String'];
  folderName: Scalars['String'];
  success: Scalars['Boolean'];
  passed: Scalars['Boolean'];
  fileCreationDate: Scalars['Int'];
}>;


export type CreateTransferHistoryMutation = { createTransferHistory?: Maybe<(
    Pick<CreateTransferHistory, 'ok'>
    & { transferHistory?: Maybe<Pick<TransferHistoryOutputType, 'id' | 'filename' | 'folderName' | 'success' | 'passed' | 'fileCreatedDate' | 'createdDate' | 'updatedDate'>> }
  )> };

export type BulkCreateTransferHistoryMutationVariables = Exact<{
  transferHistories?: Maybe<Array<Maybe<TransferHistoryInputType>> | Maybe<TransferHistoryInputType>>;
}>;


export type BulkCreateTransferHistoryMutation = { bulkCreateTransferHistory?: Maybe<Pick<BulkCreateTransferHistory, 'ok'>> };

export type UpdateTransferHistoryMutationVariables = Exact<{
  id: Scalars['ID'];
  filename?: Maybe<Scalars['String']>;
  folderName?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  passed?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTransferHistoryMutation = { updateTransferHistory?: Maybe<(
    Pick<UpdateTransferHistory, 'ok'>
    & { transferHistory?: Maybe<Pick<TransferHistoryOutputType, 'filename' | 'success' | 'folderName' | 'passed' | 'fileCreatedDate' | 'createdDate' | 'updatedDate'>> }
  )> };

export type DeleteTransferHistoryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTransferHistoryMutation = { deleteTransferHistory?: Maybe<(
    Pick<DeleteTransferHistory, 'ok'>
    & { transferHistory?: Maybe<Pick<TransferHistoryOutputType, 'filename' | 'folderName' | 'success' | 'passed' | 'fileCreatedDate' | 'createdDate' | 'updatedDate'>> }
  )> };

export type CreateEventNotificationHeaderMutationVariables = Exact<{
  fileCreatedDate?: Maybe<Scalars['DateTime']>;
  fileEffectiveDate?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  recordCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
}>;


export type CreateEventNotificationHeaderMutation = { createEventNotificationHeader?: Maybe<(
    Pick<CreateEventNotificationHeader, 'ok'>
    & { eventNotificationHeader?: Maybe<Pick<EventNotificationHeaderOutputType, 'fileCreatedDate' | 'fileEffectiveDate' | 'fileName' | 'recordCount' | 'status'>> }
  )> };

export type UpdateEventNotificationHeaderMutationVariables = Exact<{
  id: Scalars['ID'];
  fileCreatedDate?: Maybe<Scalars['DateTime']>;
  fileEffectiveDate?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  recordCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
}>;


export type UpdateEventNotificationHeaderMutation = { updateEventNotificationHeader?: Maybe<(
    Pick<UpdateEventNotificationHeader, 'ok'>
    & { eventNotificationHeader?: Maybe<Pick<EventNotificationHeaderOutputType, 'fileCreatedDate' | 'fileEffectiveDate' | 'fileName' | 'recordCount' | 'status'>> }
  )> };

export type DeleteEventNotificationHeaderMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteEventNotificationHeaderMutation = { deleteEventNotificationHeader?: Maybe<(
    Pick<DeleteEventNotificationHeader, 'ok'>
    & { eventNotificationHeader?: Maybe<Pick<EventNotificationHeaderOutputType, 'fileCreatedDate' | 'fileEffectiveDate' | 'fileName' | 'recordCount' | 'status'>> }
  )> };

export type CreateEventNotificationRowMutationVariables = Exact<{
  eventNotificationRow?: Maybe<EventNotificationRowInputType>;
}>;


export type CreateEventNotificationRowMutation = { createEventNotificationRow?: Maybe<(
    Pick<CreateEventNotificationRow, 'ok'>
    & { eventNotificationRow?: Maybe<Pick<EventNotificationRowOutputType, 'id' | 'headerId' | 'customerId' | 'customerTag' | 'accountId' | 'accountTag' | 'externalAccountId' | 'externalAccountTag' | 'transactionId' | 'transactionTag' | 'description' | 'eventTypeId' | 'transactionTypeCode' | 'transactionSettledDate' | 'transactionAvailableDate' | 'userEventId' | 'masterId' | 'transactionAmount' | 'transactionCreatedDate' | 'transactionSubTypeCode' | 'fromAccountId' | 'fromAvailableBalance' | 'fromAccountBalance' | 'fromPendingBalance' | 'toAccountId' | 'toAvailableBalance' | 'toAccountBalance' | 'toPendingBalance' | 'modifiedById' | 'eventDate' | 'isAdminUser'>> }
  )> };

export type BulkCreateEventNotificationRowMutationVariables = Exact<{
  eventNotificationRows?: Maybe<Array<Maybe<EventNotificationRowInputType>> | Maybe<EventNotificationRowInputType>>;
}>;


export type BulkCreateEventNotificationRowMutation = { bulkCreateEventNotificationRow?: Maybe<Pick<BulkCreateEventNotificationRow, 'ok'>> };

export type UpdateEventNotificationRowMutationVariables = Exact<{
  id: Scalars['ID'];
  eventNotificationRow?: Maybe<EventNotificationRowInputType>;
}>;


export type UpdateEventNotificationRowMutation = { updateEventNotificationRow?: Maybe<(
    Pick<UpdateEventNotificationRow, 'ok'>
    & { eventNotificationRow?: Maybe<Pick<EventNotificationRowOutputType, 'id' | 'headerId' | 'customerId' | 'customerTag' | 'accountId' | 'accountTag' | 'externalAccountId' | 'externalAccountTag' | 'transactionId' | 'transactionTag' | 'description' | 'eventTypeId' | 'transactionTypeCode' | 'transactionSettledDate' | 'transactionAvailableDate' | 'userEventId' | 'masterId' | 'transactionAmount' | 'transactionCreatedDate' | 'transactionSubTypeCode' | 'fromAccountId' | 'fromAvailableBalance' | 'fromAccountBalance' | 'fromPendingBalance' | 'toAccountId' | 'toAvailableBalance' | 'toAccountBalance' | 'toPendingBalance' | 'modifiedById' | 'eventDate' | 'isAdminUser'>> }
  )> };

export type DeleteEventNotificationRowMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteEventNotificationRowMutation = { updateEventNotificationRow?: Maybe<(
    Pick<UpdateEventNotificationRow, 'ok'>
    & { eventNotificationRow?: Maybe<Pick<EventNotificationRowOutputType, 'id' | 'headerId' | 'customerId' | 'customerTag' | 'accountId' | 'accountTag' | 'externalAccountId' | 'externalAccountTag' | 'transactionId' | 'transactionTag' | 'description' | 'eventTypeId' | 'transactionTypeCode' | 'transactionSettledDate' | 'transactionAvailableDate' | 'userEventId' | 'masterId' | 'transactionAmount' | 'transactionCreatedDate' | 'transactionSubTypeCode' | 'fromAccountId' | 'fromAvailableBalance' | 'fromAccountBalance' | 'fromPendingBalance' | 'toAccountId' | 'toAvailableBalance' | 'toAccountBalance' | 'toPendingBalance' | 'modifiedById' | 'eventDate' | 'isAdminUser'>> }
  )> };

export type CreateCardNotificationRowMutationVariables = Exact<{
  cardNotificationRow?: Maybe<CardNotificationRowInputType>;
}>;


export type CreateCardNotificationRowMutation = { createCardNotificationRow?: Maybe<(
    Pick<CreateCardNotificationRow, 'ok'>
    & { cardNotificationRow?: Maybe<Pick<CardNotificationRowOutputType, 'id' | 'headerId' | 'userEventId' | 'customerId' | 'cardId' | 'transactionId' | 'authorizationTransactionId' | 'requestTypeCode' | 'reserved' | 'merchantCategoryCode' | 'merchantGroupTypeCode' | 'cashbackAmount' | 'surchargeAmount' | 'cashDepositAmount' | 'checkDepositAmount' | 'terminalId' | 'merchantId' | 'merchantLocation' | 'merchantCity' | 'merchantStateCode' | 'merchantZipCode' | 'merchantCountryCode' | 'panEntryModeTypeCode' | 'pinEntryModeTypeCode' | 'cardHolderPresenceTypeCode' | 'cardPresenceTypeCode' | 'terminalUnattendedTypeCode' | 'terminalPremisesTypeCode' | 'customerTag' | 'cardTag' | 'amount' | 'availableDate' | 'createdDate' | 'customField1' | 'description' | 'denialReason' | 'feeCode' | 'feeDescription' | 'friendlyDescription' | 'fromAccountAmount' | 'fromAccountId' | 'fromAccountNumberMasked' | 'fromAvailableAmount' | 'fromCategory' | 'fromCreatedDate' | 'fromCustomField1' | 'fromCustomField2' | 'fromCustomField3' | 'fromCustomField4' | 'fromCustomField5' | 'fromLegalName1' | 'fromLegalName2' | 'fromName' | 'fromPendingAmount' | 'fromPrimaryCustomerId' | 'fromSubCategory' | 'fromTag' | 'institutionName' | 'masterId' | 'modifiedById' | 'payloadTypeId' | 'settledDate' | 'subType' | 'subTypeCode' | 'tag' | 'toAccountAmount' | 'toAccountId' | 'toAccountNumberMasked' | 'toAvailableAmount' | 'toCategory' | 'toCreatedDate' | 'toCustomField1' | 'toCustomField2' | 'toCustomField3' | 'toCustomField4' | 'toCustomField5' | 'toLegalName1' | 'toLegalName2' | 'toName' | 'toPendingAmount' | 'toPrimaryCustomerId' | 'toSubCategory' | 'toTag' | 'type' | 'typeCode' | 'eventTypeId' | 'networkProviderTypeId' | 'status'>> }
  )> };

export type BulkCreateCardNotificationRowMutationVariables = Exact<{
  cardNotificationRows?: Maybe<Array<Maybe<CardNotificationRowInputType>> | Maybe<CardNotificationRowInputType>>;
}>;


export type BulkCreateCardNotificationRowMutation = { bulkCreateCardNotificationRow?: Maybe<Pick<BulkCreateCardNotificationRow, 'ok'>> };

export type UpdateCardNotificationRowMutationVariables = Exact<{
  id: Scalars['ID'];
  cardNotificationRow?: Maybe<CardNotificationRowInputType>;
}>;


export type UpdateCardNotificationRowMutation = { updateCardNotificationRow?: Maybe<(
    Pick<UpdateCardNotificationRow, 'ok'>
    & { cardNotificationRow?: Maybe<Pick<CardNotificationRowOutputType, 'id' | 'headerId' | 'userEventId' | 'customerId' | 'cardId' | 'transactionId' | 'authorizationTransactionId' | 'requestTypeCode' | 'reserved' | 'merchantCategoryCode' | 'merchantGroupTypeCode' | 'cashbackAmount' | 'surchargeAmount' | 'cashDepositAmount' | 'checkDepositAmount' | 'terminalId' | 'merchantId' | 'merchantLocation' | 'merchantCity' | 'merchantStateCode' | 'merchantZipCode' | 'merchantCountryCode' | 'panEntryModeTypeCode' | 'pinEntryModeTypeCode' | 'cardHolderPresenceTypeCode' | 'cardPresenceTypeCode' | 'terminalUnattendedTypeCode' | 'terminalPremisesTypeCode' | 'customerTag' | 'cardTag' | 'amount' | 'availableDate' | 'createdDate' | 'customField1' | 'description' | 'denialReason' | 'feeCode' | 'feeDescription' | 'friendlyDescription' | 'fromAccountAmount' | 'fromAccountId' | 'fromAccountNumberMasked' | 'fromAvailableAmount' | 'fromCategory' | 'fromCreatedDate' | 'fromCustomField1' | 'fromCustomField2' | 'fromCustomField3' | 'fromCustomField4' | 'fromCustomField5' | 'fromLegalName1' | 'fromLegalName2' | 'fromName' | 'fromPendingAmount' | 'fromPrimaryCustomerId' | 'fromSubCategory' | 'fromTag' | 'institutionName' | 'masterId' | 'modifiedById' | 'payloadTypeId' | 'settledDate' | 'subType' | 'subTypeCode' | 'tag' | 'toAccountAmount' | 'toAccountId' | 'toAccountNumberMasked' | 'toAvailableAmount' | 'toCategory' | 'toCreatedDate' | 'toCustomField1' | 'toCustomField2' | 'toCustomField3' | 'toCustomField4' | 'toCustomField5' | 'toLegalName1' | 'toLegalName2' | 'toName' | 'toPendingAmount' | 'toPrimaryCustomerId' | 'toSubCategory' | 'toTag' | 'type' | 'typeCode' | 'eventTypeId' | 'networkProviderTypeId' | 'status'>> }
  )> };

export type GetMemberApplicationProgressQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetMemberApplicationProgressQuery = { getMemberApplicationProgress?: Maybe<(
    Pick<SafeMemberType, 'id' | 'bankId' | 'countryId' | 'customerId' | 'applicationProgress'>
    & { bank?: Maybe<Pick<SafeBankType, 'identifier'>> }
  )> };

export type UpdateMemberApplicationProgressMutationVariables = Exact<{
  memberId: Scalars['String'];
  applicationProgress: Scalars['String'];
}>;


export type UpdateMemberApplicationProgressMutation = { updateMemberApplicationProgress?: Maybe<{ member?: Maybe<(
      Pick<SafeMemberType, 'id' | 'bankId' | 'countryId' | 'customerId' | 'applicationProgress'>
      & { bank?: Maybe<Pick<SafeBankType, 'identifier'>> }
    )> }> };

export type SupportedCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type SupportedCountriesQuery = { supportedCountries?: Maybe<Array<Maybe<Pick<CountryType, 'id' | 'abbreviation' | 'name' | 'identifier' | 'supported' | 'unitOfMeasure' | 'createdDate' | 'updatedDate'>>>> };

export type OnboardMemberMutationVariables = Exact<{
  email: Scalars['String'];
  phone: Scalars['String'];
  countryId: Scalars['String'];
}>;


export type OnboardMemberMutation = { onboardMember?: Maybe<{ member?: Maybe<(
      Pick<SafeMemberType, 'id' | 'bankId' | 'countryId' | 'customerId' | 'applicationProgress'>
      & { bank?: Maybe<Pick<SafeBankType, 'identifier'>> }
    )> }> };

export type SendVerificationCodeMutationVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type SendVerificationCodeMutation = { sendVerificationCode?: Maybe<{ code?: Maybe<Pick<VerificationCodeType, 'id' | 'verificationCode'>> }> };

export type ConfirmVerificationCodeMutationVariables = Exact<{
  code: Scalars['String'];
  memberId: Scalars['String'];
}>;


export type ConfirmVerificationCodeMutation = { confirmVerificationCode?: Maybe<{ code?: Maybe<Pick<VerificationCodeType, 'id' | 'verificationCode' | 'validated'>> }> };

export type UpdateMemberReferrerMutationVariables = Exact<{
  friendTendId?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  friendEmail?: Maybe<Scalars['String']>;
  memberId: Scalars['String'];
}>;


export type UpdateMemberReferrerMutation = { updateMemberReferrer?: Maybe<{ member?: Maybe<(
      Pick<SafeMemberType, 'bankId' | 'countryId' | 'customerId' | 'applicationProgress'>
      & { bank?: Maybe<Pick<SafeBankType, 'identifier'>> }
    )> }> };

export type AddMemberEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type AddMemberEmailMutation = { addMemberEmail?: Maybe<(
    Pick<AddMemberEmail, 'ok' | 'message'>
    & { member?: Maybe<(
      Pick<MemberType, 'id' | 'bankId' | 'countryId' | 'inviterId' | 'accountStatus' | 'applicationProgress' | 'applicationStatus' | 'companyCode' | 'customerId' | 'email' | 'phone' | 'language' | 'friendEmail' | 'memberType' | 'createdDate' | 'updatedDate'>
      & { bank?: Maybe<Pick<BankType, 'identifier'>> }
    )> }
  )> };

export type DueDiligenceQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type DueDiligenceQuestionsQuery = { dueDiligenceQuestions?: Maybe<Array<Maybe<(
    Pick<DueDiligenceQuestionType, 'questionName' | 'questionId' | 'questionDescription' | 'questionEnglishDescription' | 'questionSpanishDescription' | 'answerType' | 'answerMaxLength'>
    & { choices?: Maybe<Array<Maybe<Pick<DueDiligenceChoiceType, 'choiceId' | 'choiceDescription' | 'choiceEnglishDescription' | 'choiceSpanishDescription'>>>> }
  )>>> };

export type PopulateDueDiligenceCategoriesMutationVariables = Exact<{ [key: string]: never; }>;


export type PopulateDueDiligenceCategoriesMutation = { populateDueDiligenceCategories?: Maybe<Pick<PopulateDueDiligenceCategories, 'ok' | 'message'>> };

export type SaveDueDiligenceAnswersMutationVariables = Exact<{
  answers?: Maybe<Array<Maybe<DueDiligenceAnswerInputType>> | Maybe<DueDiligenceAnswerInputType>>;
}>;


export type SaveDueDiligenceAnswersMutation = { saveDueDiligenceAnswers?: Maybe<Pick<SaveDueDiligenceAnswers, 'ok' | 'message'>> };

export type GetCustomerQueryVariables = Exact<{
  memberId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
}>;


export type GetCustomerQuery = { getCustomer?: Maybe<(
    Pick<CustomerDataType, 'memberId' | 'username' | 'email' | 'customerId' | 'currentOnboardingStatus' | 'country' | 'deviceType' | 'osVersion' | 'appDownload' | 'countrySelected' | 'emailMobileEntered' | 'inviterChosen' | 'inviterId' | 'inviterCode' | 'promotionType' | 'loginCreated' | 'personalInfoCompleted' | 'tncSubmitted' | 'fundingSource' | 'paymentCompleted' | 'cardIssued' | 'otpVerified' | 'idScanCompleted' | 'selfieCompleted' | 'startedJumio' | 'completedJumio' | 'setUpProfile' | 'beneficiaryCompleted' | 'accountLevelSelected' | 'accountLevel' | 'infoEntered' | 'accountFunded' | 'kycClosure'>
    & { applicationStatusTime?: Maybe<Pick<ApplicationStatusTime, 'applicationDenied' | 'applicationOnHold' | 'applicationApproved'>> }
  )> };

export type GetCustomersQueryVariables = Exact<{
  currentOnboardingStatus?: Maybe<Scalars['String']>;
  bank?: Maybe<BankIdentifier>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetCustomersQuery = { getCustomers?: Maybe<Array<Maybe<(
    Pick<CustomerDataType, 'memberId' | 'username' | 'email' | 'customerId' | 'currentOnboardingStatus' | 'country' | 'deviceType' | 'osVersion' | 'appDownload' | 'countrySelected' | 'emailMobileEntered' | 'inviterChosen' | 'inviterId' | 'inviterCode' | 'promotionType' | 'loginCreated' | 'personalInfoCompleted' | 'tncSubmitted' | 'fundingSource' | 'paymentCompleted' | 'cardIssued' | 'otpVerified' | 'idScanCompleted' | 'selfieCompleted' | 'startedJumio' | 'completedJumio' | 'setUpProfile' | 'beneficiaryCompleted' | 'accountLevelSelected' | 'accountLevel' | 'infoEntered' | 'accountFunded' | 'kycClosure'>
    & { applicationStatusTime?: Maybe<Pick<ApplicationStatusTime, 'applicationDenied' | 'applicationOnHold' | 'applicationApproved'>> }
  )>>> };

export type NbkcOnboardMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInputType>;
  dueDiligence?: Maybe<Array<Maybe<DueDiligenceAnswersInputType>> | Maybe<DueDiligenceAnswersInputType>>;
  eSign?: Maybe<ESignAcceptanceInputType>;
  identity?: Maybe<IdentityInputType>;
  mla?: Maybe<MlaInputType>;
  name?: Maybe<NameInputType>;
  tnc?: Maybe<TncAcceptanceInputType>;
  trigger?: Maybe<TriggerInputType>;
  primaryDocument?: Maybe<PrimaryDocumentType>;
  secondaryDocument?: Maybe<SecondaryDocumentType>;
}>;


export type NbkcOnboardMutation = { nbkcOnboard?: Maybe<(
    Pick<NbkcOnboard, 'ok' | 'message'>
    & { member?: Maybe<(
      Pick<SafeMemberType, 'id' | 'bankId' | 'countryId' | 'customerId' | 'applicationProgress'>
      & { bank?: Maybe<Pick<SafeBankType, 'identifier'>> }
    )> }
  )> };

export type InvexOnboardMutationVariables = Exact<{
  accountLevel?: Maybe<AccountLevelInputType>;
  address?: Maybe<AddressInfoInputType>;
  beneficiary?: Maybe<BeneficiaryInputType>;
  fundProvider?: Maybe<FundProviderInputType>;
  general?: Maybe<GeneralInfoInputType>;
  govDisclosure?: Maybe<GovDisclosureInfoInputType>;
  identityConfirmation?: Maybe<IdentityInformationInputType>;
  personal?: Maybe<PersonalInputType>;
  tnc?: Maybe<TncInvexAcceptanceInputType>;
}>;


export type InvexOnboardMutation = { invexOnboard?: Maybe<Pick<InvexOnboard, 'ok' | 'message'>> };

export type ApplyMembershipCodeMutationVariables = Exact<{
  membershipCode: Scalars['String'];
}>;


export type ApplyMembershipCodeMutation = { applyMembershipCode?: Maybe<{ member?: Maybe<(
      Pick<SafeMemberType, 'bankId' | 'countryId' | 'customerId' | 'applicationProgress'>
      & { bank?: Maybe<Pick<SafeBankType, 'identifier'>> }
    )> }> };

export type GetStateCityMunicipalityQueryVariables = Exact<{
  zipCode: Scalars['String'];
}>;


export type GetStateCityMunicipalityQuery = { getStateCityMunicipality?: Maybe<Array<Maybe<Pick<InvexStateCityMunicipalityItemType, 'stateName' | 'state' | 'municipalityName' | 'municipality' | 'cityName' | 'city' | 'suburbName' | 'suburb'>>>> };

export type PlaidLinkTokenQueryVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type PlaidLinkTokenQuery = { plaidLinkToken?: Maybe<Pick<PlaidLinkTokenType, 'linkToken' | 'expiration'>> };

export type ExternalAccountQueryVariables = Exact<{
  memberId: Scalars['String'];
}>;


export type ExternalAccountQuery = { externalAccount?: Maybe<Pick<ExternalAccountType, 'accountId' | 'accountNumber' | 'routingNumber' | 'accountName' | 'currency'>> };

export type LinkExternalAccountMutationVariables = Exact<{
  memberId: Scalars['String'];
  plaidToken: Scalars['String'];
  plaidAccountId: Scalars['String'];
}>;


export type LinkExternalAccountMutation = { linkExternalAccount?: Maybe<(
    Pick<LinkExternalAccount, 'ok' | 'message'>
    & { externalAccount?: Maybe<Pick<ExternalAccountType, 'accountId' | 'accountNumber' | 'routingNumber' | 'accountName' | 'currency' | 'availableBalance'>> }
  )> };

export type ReplaceExternalAccountMutationVariables = Exact<{
  memberId: Scalars['String'];
  plaidToken: Scalars['String'];
  plaidAccountId: Scalars['String'];
}>;


export type ReplaceExternalAccountMutation = { replaceExternalAccount?: Maybe<(
    Pick<ReplaceExternalAccount, 'ok' | 'message'>
    & { externalAccount?: Maybe<Pick<ExternalAccountType, 'accountId' | 'accountNumber' | 'routingNumber' | 'accountName' | 'currency' | 'availableBalance'>> }
  )> };

export type TransferFundsMutationVariables = Exact<{
  memberId: Scalars['String'];
  savingsAmount: Scalars['Float'];
  checkingAmount: Scalars['Float'];
}>;


export type TransferFundsMutation = { transferFunds?: Maybe<(
    Pick<TransferFunds, 'ok' | 'message'>
    & { transfers?: Maybe<Array<Maybe<Pick<TransferType, 'transactionId' | 'fromAccountId' | 'toAccountId' | 'fromAccountLocation' | 'toAccountLocation' | 'amount' | 'currency' | 'scheduledTransferDate' | 'transferCompletionDatetime' | 'transferFrequency' | 'transferTiming'>>>> }
  )> };

export type ExternalToInternalTransferMutationVariables = Exact<{
  memberId: Scalars['String'];
  toAccountId: Scalars['Int'];
  amount: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
}>;


export type ExternalToInternalTransferMutation = { externalToInternalTransfer?: Maybe<(
    Pick<ExternalToInternalTransfer, 'ok' | 'message'>
    & { transfer?: Maybe<Pick<TransferType, 'transactionId' | 'fromAccountId' | 'toAccountId' | 'fromAccountLocation' | 'toAccountLocation' | 'amount' | 'currency' | 'scheduledTransferDate' | 'transferCompletionDatetime' | 'transferFrequency' | 'transferTiming'>> }
  )> };

export type InternalToExternalTransferMutationVariables = Exact<{
  memberId: Scalars['String'];
  fromAccountId: Scalars['Int'];
  amount: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
}>;


export type InternalToExternalTransferMutation = { internalToExternalTransfer?: Maybe<(
    Pick<InternalToExternalTransfer, 'ok' | 'message'>
    & { transfer?: Maybe<Pick<TransferType, 'transactionId' | 'fromAccountId' | 'toAccountId' | 'fromAccountLocation' | 'toAccountLocation' | 'amount' | 'currency' | 'scheduledTransferDate' | 'transferCompletionDatetime' | 'transferFrequency' | 'transferTiming'>> }
  )> };

export type CreatePinwheelLinkMutationVariables = Exact<{
  routingNumber: Scalars['String'];
  accountNumber: Scalars['String'];
  accountType: Scalars['String'];
  pinwheelVersion?: Maybe<PinwheelVersionType>;
}>;


export type CreatePinwheelLinkMutation = { createPinwheelLink?: Maybe<(
    Pick<CreatePinwheelLink, 'ok' | 'message'>
    & { link?: Maybe<Pick<PinwheelLinkType, 'mode' | 'token' | 'expires' | 'tokenId'>>, error?: Maybe<Pick<PinwheelLinkErrorType, 'type' | 'code' | 'message' | 'statusCode'>> }
  )> };

export type InternalTransferMutationVariables = Exact<{
  memberId: Scalars['String'];
  fromAccountId: Scalars['Int'];
  toAccountId: Scalars['Int'];
  amount: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
}>;


export type InternalTransferMutation = { internalTransfer?: Maybe<(
    Pick<InternalTransfer, 'ok' | 'message'>
    & { transfer?: Maybe<Pick<TransferType, 'transactionId' | 'fromAccountId' | 'toAccountId' | 'fromAccountLocation' | 'toAccountLocation' | 'amount' | 'currency' | 'scheduledTransferDate' | 'transferCompletionDatetime' | 'transferFrequency' | 'transferTiming'>> }
  )> };

export type TransactionsQueryVariables = Exact<{
  memberId: Scalars['String'];
  accountId: Scalars['Int'];
  amountMin?: Maybe<Scalars['Float']>;
  amountMax?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  isCredit?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}>;


export type TransactionsQuery = { transactions?: Maybe<{ pending?: Maybe<Array<Maybe<(
      Pick<TransactionType, 'transactionId' | 'customerId' | 'amount' | 'isCredit' | 'createdDate' | 'availableDate' | 'settledDate' | 'status' | 'friendlyDescription'>
      & { description?: Maybe<Pick<TransactionDescriptionType, 'category' | 'note'>> }
    )>>>, recent?: Maybe<Array<Maybe<(
      Pick<TransactionType, 'transactionId' | 'customerId' | 'amount' | 'isCredit' | 'createdDate' | 'availableDate' | 'settledDate' | 'status' | 'friendlyDescription'>
      & { description?: Maybe<Pick<TransactionDescriptionType, 'category' | 'note'>> }
    )>>>, scheduled?: Maybe<Array<Maybe<(
      Pick<TransactionType, 'transactionId' | 'customerId' | 'amount' | 'isCredit' | 'createdDate' | 'availableDate' | 'settledDate' | 'status' | 'friendlyDescription'>
      & { description?: Maybe<Pick<TransactionDescriptionType, 'category' | 'note'>> }
    )>>> }> };

export const MeDocument = gql`
    query me {
  me {
    id
    email
    isActive
    lastLoggedIn
    createdDate
    updatedDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateLoginDocument = gql`
    mutation createLogin($memberId: String!, $email: String!, $password: String!) {
  createLogin(memberId: $memberId, email: $email, password: $password) {
    ok
    message
    member {
      id
      bankId
      countryId
      inviterId
      accountStatus
      applicationProgress
      applicationStatus
      companyCode
      customerId
      email
      phone
      language
      friendEmail
      memberType
      createdDate
      updatedDate
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateLoginGQL extends Apollo.Mutation<CreateLoginMutation, CreateLoginMutationVariables> {
    document = CreateLoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginMemberDocument = gql`
    mutation loginMember($email: String, $phone: String, $password: String!) {
  loginMember(email: $email, phone: $phone, password: $password) {
    ok
    message
    accessToken
    refreshToken
    member {
      id
      bankId
      countryId
      inviterId
      accountStatus
      applicationProgress
      applicationStatus
      companyCode
      customerId
      email
      phone
      language
      friendEmail
      memberType
      createdDate
      updatedDate
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginMemberGQL extends Apollo.Mutation<LoginMemberMutation, LoginMemberMutationVariables> {
    document = LoginMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDeviceDocument = gql`
    mutation registerDevice($bundleId: String!, $platform: PlatformType!, $token: String!) {
  registerDevice(bundleId: $bundleId, platform: $platform, token: $token) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterDeviceGQL extends Apollo.Mutation<RegisterDeviceMutation, RegisterDeviceMutationVariables> {
    document = RegisterDeviceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogoutMemberDocument = gql`
    mutation logoutMember {
  logoutMember {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutMemberGQL extends Apollo.Mutation<LogoutMemberMutation, LogoutMemberMutationVariables> {
    document = LogoutMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangePasswordDocument = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePasswordGQL extends Apollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> {
    document = ChangePasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangeForgottenPasswordDocument = gql`
    mutation changeForgottenPassword($memberId: String!, $tempToken: String!, $newPassword: String!) {
  changeForgottenPassword(
    memberId: $memberId
    tempToken: $tempToken
    newPassword: $newPassword
  ) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangeForgottenPasswordGQL extends Apollo.Mutation<ChangeForgottenPasswordMutation, ChangeForgottenPasswordMutationVariables> {
    document = ChangeForgottenPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetPasswordDocument = gql`
    mutation resetPassword($memberId: String!, $dateOfBirth: String, $ssnNumber: String, $cardNumber: String) {
  resetPassword(
    memberId: $memberId
    dateOfBirth: $dateOfBirth
    ssnNumber: $ssnNumber
    cardNumber: $cardNumber
  ) {
    ok
    message
    tempToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordGQL extends Apollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> {
    document = ResetPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RequestResetPasswordDocument = gql`
    mutation requestResetPassword($email: String, $phone: String) {
  requestResetPassword(email: $email, phone: $phone) {
    ok
    bankIdentifier
    memberId
    member {
      id
      email
      phone
      accountStatus
      applicationProgress
      applicationStatus
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RequestResetPasswordGQL extends Apollo.Mutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables> {
    document = RequestResetPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ValidateUserDocument = gql`
    mutation validateUser($phrase: String!) {
  validateUser(phrase: $phrase) {
    ok
    message
    onboardToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidateUserGQL extends Apollo.Mutation<ValidateUserMutation, ValidateUserMutationVariables> {
    document = ValidateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CoreproAccountInfoDocument = gql`
    query coreproAccountInfo($email: String) {
  coreproAccountInfo(email: $email) {
    accountStatus
    card {
      isCardOrdered
      cardStatus
    }
    member {
      id
      bankId
      countryId
      applicationProgress
      applicationStatus
      accountStatus
      customerId
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CoreproAccountInfoGQL extends Apollo.Query<CoreproAccountInfoQuery, CoreproAccountInfoQueryVariables> {
    document = CoreproAccountInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TendIdDocument = gql`
    query tendId {
  tendId
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TendIdGQL extends Apollo.Query<TendIdQuery, TendIdQueryVariables> {
    document = TendIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUpdateTendIdDocument = gql`
    mutation createUpdateTendId($tendId: String) {
  createUpdateTendId(tendId: $tendId) {
    ok
    message
    tendId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUpdateTendIdGQL extends Apollo.Mutation<CreateUpdateTendIdMutation, CreateUpdateTendIdMutationVariables> {
    document = CreateUpdateTendIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetTendIdDocument = gql`
    mutation resetTendId {
  resetTendId {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetTendIdGQL extends Apollo.Mutation<ResetTendIdMutation, ResetTendIdMutationVariables> {
    document = ResetTendIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CheckTendIdUniqueDocument = gql`
    mutation checkTendIdUnique($memberId: String!, $tendId: String) {
  checkTendIdUnique(tendId: $tendId, memberId: $memberId) {
    ok
    isUnique
    belongsToUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckTendIdUniqueGQL extends Apollo.Mutation<CheckTendIdUniqueMutation, CheckTendIdUniqueMutationVariables> {
    document = CheckTendIdUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AppVersionDocument = gql`
    query appVersion($currentVersion: String!, $platform: Platform!, $country: Country!, $deviceId: String) {
  appVersion(
    currentVersion: $currentVersion
    platform: $platform
    country: $country
    deviceId: $deviceId
  ) {
    updateStatus
    newVersion
    updateUrl
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AppVersionGQL extends Apollo.Query<AppVersionQuery, AppVersionQueryVariables> {
    document = AppVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetPasswordWithOtpDocument = gql`
    mutation resetPasswordWithOtp($code: String, $memberId: String!) {
  resetPasswordWithOtp(code: $code, memberId: $memberId) {
    ok
    message
    tempToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordWithOtpGQL extends Apollo.Mutation<ResetPasswordWithOtpMutation, ResetPasswordWithOtpMutationVariables> {
    document = ResetPasswordWithOtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMemberDevicesDocument = gql`
    mutation updateMemberDevices($deviceOs: String!, $deviceUuid: String!) {
  updateMemberDevices(deviceOs: $deviceOs, deviceUuid: $deviceUuid) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMemberDevicesGQL extends Apollo.Mutation<UpdateMemberDevicesMutation, UpdateMemberDevicesMutationVariables> {
    document = UpdateMemberDevicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CardDocument = gql`
    query card($memberId: String!) {
  card(memberId: $memberId) {
    cardId
    customerId
    accountId
    cardNumberMasked
    cardStatus
    isActive
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CardGQL extends Apollo.Query<CardQuery, CardQueryVariables> {
    document = CardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrderCardDocument = gql`
    mutation orderCard($memberId: String!, $pin: String!) {
  orderCard(memberId: $memberId, pin: $pin) {
    ok
    message
    card {
      cardId
      customerId
      accountId
      cardNumberMasked
      cardStatus
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderCardGQL extends Apollo.Mutation<OrderCardMutation, OrderCardMutationVariables> {
    document = OrderCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetPinDocument = gql`
    mutation resetPin($memberId: String!, $newPin: String!) {
  resetPin(memberId: $memberId, newPin: $newPin) {
    ok
    message
    card {
      cardId
      customerId
      accountId
      cardNumberMasked
      cardStatus
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPinGQL extends Apollo.Mutation<ResetPinMutation, ResetPinMutationVariables> {
    document = ResetPinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyCardDocument = gql`
    mutation verifyCard($memberId: String!, $last4CardDigits: String!, $dob: Date!) {
  verifyCard(memberId: $memberId, last4CardDigits: $last4CardDigits, dob: $dob) {
    ok
    message
    card {
      cardId
      customerId
      accountId
      cardNumberMasked
      cardStatus
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyCardGQL extends Apollo.Mutation<VerifyCardMutation, VerifyCardMutationVariables> {
    document = VerifyCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LockCardDocument = gql`
    mutation lockCard($memberId: String!) {
  lockCard(memberId: $memberId) {
    ok
    message
    card {
      cardId
      customerId
      accountId
      cardNumberMasked
      cardStatus
      isActive
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LockCardGQL extends Apollo.Mutation<LockCardMutation, LockCardMutationVariables> {
    document = LockCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UnlockCardDocument = gql`
    mutation unlockCard($memberId: String!) {
  unlockCard(memberId: $memberId) {
    ok
    message
    card {
      cardId
      customerId
      accountId
      cardNumberMasked
      cardStatus
      isActive
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnlockCardGQL extends Apollo.Mutation<UnlockCardMutation, UnlockCardMutationVariables> {
    document = UnlockCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReplaceCardDocument = gql`
    mutation replaceCard($memberId: String!, $cardReplaceReason: CardReplaceReason!, $newPin: String) {
  replaceCard(
    memberId: $memberId
    cardReplaceReason: $cardReplaceReason
    newPin: $newPin
  ) {
    ok
    message
    card {
      cardId
      customerId
      accountId
      cardNumberMasked
      cardStatus
      isActive
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReplaceCardGQL extends Apollo.Mutation<ReplaceCardMutation, ReplaceCardMutationVariables> {
    document = ReplaceCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindAtmByCoordinatesDocument = gql`
    query findAtmByCoordinates($lat: Float, $lng: Float, $radius: Int, $count: Int, $unitOfMeasure: UnitOfMeasure, $bankId: BankIdentifier!, $locationType: LocationType) {
  findAtmByCoordinates(
    lat: $lat
    lng: $lng
    radius: $radius
    count: $count
    unitOfMeasure: $unitOfMeasure
    bankId: $bankId
    locationType: $locationType
  ) {
    name
    description
    coordinates {
      lat
      lng
    }
    addressComponents {
      longName
      shortName
      types
    }
    address {
      city
      state
      street
      postalCode
    }
    distance
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindAtmByCoordinatesGQL extends Apollo.Query<FindAtmByCoordinatesQuery, FindAtmByCoordinatesQueryVariables> {
    document = FindAtmByCoordinatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterWithAffinityDocument = gql`
    mutation registerWithAffinity($zipCode: String!) {
  registerWithAffinity(zipCode: $zipCode) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterWithAffinityGQL extends Apollo.Mutation<RegisterWithAffinityMutation, RegisterWithAffinityMutationVariables> {
    document = RegisterWithAffinityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ActivateOfferDocument = gql`
    mutation activateOffer($offerId: Int!) {
  activateOffer(offerId: $offerId) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivateOfferGQL extends Apollo.Mutation<ActivateOfferMutation, ActivateOfferMutationVariables> {
    document = ActivateOfferDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOffersDocument = gql`
    query getOffers($zipCode: String, $shopType: String, $radius: Int, $search: String, $activated: Boolean, $page: Int, $perPage: Int) {
  getOffers(
    zipCode: $zipCode
    shopType: $shopType
    radius: $radius
    search: $search
    activated: $activated
    page: $page
    perPage: $perPage
  ) {
    id
    activated
    title
    merchant
    image
    shopType
    tenWord
    twentyWord
    outsideLink
    expiration
    merchantId
    activationRequired
    offerValue
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOffersGQL extends Apollo.Query<GetOffersQuery, GetOffersQueryVariables> {
    document = GetOffersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFeaturedOffersDocument = gql`
    query getFeaturedOffers {
  getFeaturedOffers {
    id
    activated
    title
    merchant
    image
    shopType
    tenWord
    twentyWord
    outsideLink
    expiration
    merchantId
    activationRequired
    offerValue
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFeaturedOffersGQL extends Apollo.Query<GetFeaturedOffersQuery, GetFeaturedOffersQueryVariables> {
    document = GetFeaturedOffersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOfferDetailsDocument = gql`
    query getOfferDetails($offerId: Int!) {
  getOfferDetails(offerId: $offerId) {
    id
    activated
    title
    merchant
    image
    shopType
    tenWord
    twentyWord
    outsideLink
    expiration
    merchantId
    activationRequired
    offerValue
    stores {
      id
      address
      city
      zip
      lat
      long
      distance
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOfferDetailsGQL extends Apollo.Query<GetOfferDetailsQuery, GetOfferDetailsQueryVariables> {
    document = GetOfferDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCategoriesDocument = gql`
    query getCategories {
  getCategories {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCategoriesGQL extends Apollo.Query<GetCategoriesQuery, GetCategoriesQueryVariables> {
    document = GetCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCouponsDocument = gql`
    query getCoupons($date: String) {
  getCoupons(date: $date) {
    rmnId
    couponDate
    applicableOn
    category
    categoryRank
    code
    description
    eventRank
    eventType
    exclusions
    logourl
    merchantUrl
    merchantRank
    monetized
    popularRank
    source
    startDate
    store
    terms
    title
    url
    validTill
    validity
    validationTimestamp
    rmnUrl
    rmnMobileClicks
    rmnDesktopClicks
    rmnAppClicks
    merchantCategory
    tag
    logoBackgroundColor
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCouponsGQL extends Apollo.Query<GetCouponsQuery, GetCouponsQueryVariables> {
    document = GetCouponsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetCouponRetrievedIterableDocument = gql`
    mutation setCouponRetrievedIterable($memberId: String!) {
  setCouponRetrievedIterable(memberId: $memberId) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetCouponRetrievedIterableGQL extends Apollo.Mutation<SetCouponRetrievedIterableMutation, SetCouponRetrievedIterableMutationVariables> {
    document = SetCouponRetrievedIterableDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterExperianSubscriberDocument = gql`
    mutation registerExperianSubscriber($memberId: String, $ssn: String, $dob: Date, $disclosureDatetime: DateTime, $firstName: String, $lastName: String, $email: String, $address1: String, $address2: String, $city: String, $state: String, $zipCode: String) {
  registerExperianSubscriber(
    memberId: $memberId
    ssn: $ssn
    dob: $dob
    disclosureDatetime: $disclosureDatetime
    firstName: $firstName
    lastName: $lastName
    email: $email
    address1: $address1
    address2: $address2
    city: $city
    state: $state
    zipCode: $zipCode
  ) {
    ok
    message
    member {
      id
      applicationProgress
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterExperianSubscriberGQL extends Apollo.Mutation<RegisterExperianSubscriberMutation, RegisterExperianSubscriberMutationVariables> {
    document = RegisterExperianSubscriberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreditScoreDataUrlDocument = gql`
    query creditScoreDataUrl($memberId: String!) {
  creditScoreDataUrl(memberId: $memberId) {
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreditScoreDataUrlGQL extends Apollo.Query<CreditScoreDataUrlQuery, CreditScoreDataUrlQueryVariables> {
    document = CreditScoreDataUrlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const P2pContactsDocument = gql`
    query p2pContacts($memberId: String!) {
  p2pContacts(memberId: $memberId) {
    id
    belongTo
    email
    contactType
    createdDate
    updatedDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class P2pContactsGQL extends Apollo.Query<P2pContactsQuery, P2pContactsQueryVariables> {
    document = P2pContactsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddP2pContactDocument = gql`
    mutation addP2pContact($memberId: String!, $contactEmail: String!) {
  addP2pContact(memberId: $memberId, contactEmail: $contactEmail) {
    ok
    message
    contact {
      id
      belongTo
      email
      contactType
      createdDate
      updatedDate
    }
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddP2pContactGQL extends Apollo.Mutation<AddP2pContactMutation, AddP2pContactMutationVariables> {
    document = AddP2pContactDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteP2pContactDocument = gql`
    mutation deleteP2pContact($contactId: String!) {
  deleteP2pContact(contactId: $contactId) {
    ok
    message
    contact {
      id
      belongTo
      email
      contactType
      createdDate
      updatedDate
    }
    errors {
      name
      code
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteP2pContactGQL extends Apollo.Mutation<DeleteP2pContactMutation, DeleteP2pContactMutationVariables> {
    document = DeleteP2pContactDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendP2pVerificationCodeDocument = gql`
    mutation sendP2pVerificationCode($senderMemberId: String!) {
  sendP2pVerificationCode(senderMemberId: $senderMemberId) {
    ok
    message
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendP2pVerificationCodeGQL extends Apollo.Mutation<SendP2pVerificationCodeMutation, SendP2pVerificationCodeMutationVariables> {
    document = SendP2pVerificationCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const P2pTransferDocument = gql`
    mutation p2pTransfer($senderMemberId: String!, $recipientContactId: String!, $verificationCode: String!, $amount: Float!, $note: String) {
  p2pTransfer(
    senderMemberId: $senderMemberId
    recipientContactId: $recipientContactId
    verificationCode: $verificationCode
    amount: $amount
    note: $note
  ) {
    ok
    message
    recipientName
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class P2pTransferGQL extends Apollo.Mutation<P2pTransferMutation, P2pTransferMutationVariables> {
    document = P2pTransferDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const P2pRequestDocument = gql`
    mutation p2pRequest($amount: String, $note: String, $recipientEmails: [String], $requesterMemberId: String) {
  p2pRequest(
    amount: $amount
    note: $note
    recipientEmails: $recipientEmails
    requesterMemberId: $requesterMemberId
  ) {
    ok
    message
    date
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class P2pRequestGQL extends Apollo.Mutation<P2pRequestMutation, P2pRequestMutationVariables> {
    document = P2pRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const P2pRequestsFromMeDocument = gql`
    query p2pRequestsFromMe($memberId: String, $requestStatus: P2pRequestStatus) {
  p2pRequestsFromMe(memberId: $memberId, requestStatus: $requestStatus) {
    amount
    confirmationCode
    createdAt
    id
    message
    receiverEmail
    requestStatus
    senderEmail
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class P2pRequestsFromMeGQL extends Apollo.Query<P2pRequestsFromMeQuery, P2pRequestsFromMeQueryVariables> {
    document = P2pRequestsFromMeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const P2pRequestsToMeDocument = gql`
    query p2pRequestsToMe($memberId: String, $requestStatus: P2pRequestStatus) {
  p2pRequestsToMe(memberId: $memberId, requestStatus: $requestStatus) {
    amount
    confirmationCode
    createdAt
    id
    message
    receiverEmail
    requestStatus
    senderEmail
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class P2pRequestsToMeGQL extends Apollo.Query<P2pRequestsToMeQuery, P2pRequestsToMeQueryVariables> {
    document = P2pRequestsToMeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CancelP2pRequestDocument = gql`
    mutation cancelP2pRequest($p2pRequestId: String) {
  cancelP2pRequest(p2pRequestId: $p2pRequestId) {
    ok
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CancelP2pRequestGQL extends Apollo.Mutation<CancelP2pRequestMutation, CancelP2pRequestMutationVariables> {
    document = CancelP2pRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeclineP2pRequestDocument = gql`
    mutation declineP2pRequest($p2pRequestId: String) {
  declineP2pRequest(p2pRequestId: $p2pRequestId) {
    ok
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeclineP2pRequestGQL extends Apollo.Mutation<DeclineP2pRequestMutation, DeclineP2pRequestMutationVariables> {
    document = DeclineP2pRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AcceotP2pRequestDocument = gql`
    mutation acceotP2pRequest($p2pRequestId: String) {
  acceptP2pRequest(p2pRequestId: $p2pRequestId) {
    ok
    errors {
      name
      message
      code
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AcceotP2pRequestGQL extends Apollo.Mutation<AcceotP2pRequestMutation, AcceotP2pRequestMutationVariables> {
    document = AcceotP2pRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CustomerDocument = gql`
    query customer($memberId: ID!) {
  customer(memberId: $memberId) {
    customerId
    firstName
    middleName
    lastName
    email
    dob
    addresses {
      addressType
      addressLine
      city
      state
      postalCode
      country
    }
    phones {
      phoneType
      number
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CustomerGQL extends Apollo.Query<CustomerQuery, CustomerQueryVariables> {
    document = CustomerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePersonalDetailsDocument = gql`
    mutation updatePersonalDetails($memberId: String!, $bankIdentifier: String!, $customerFields: CustomerFieldsInputType, $otpCode: String!) {
  updatePersonalDetails(
    memberId: $memberId
    bankIdentifier: $bankIdentifier
    customerFields: $customerFields
    otpCode: $otpCode
  ) {
    updatedFields {
      firstName
      middleName
      lastName
      email
      addresses {
        addressType
        addressLine
        city
        state
        postalCode
        country
      }
      phones {
        phoneType
        number
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePersonalDetailsGQL extends Apollo.Mutation<UpdatePersonalDetailsMutation, UpdatePersonalDetailsMutationVariables> {
    document = UpdatePersonalDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAddressAutoCompleteDocument = gql`
    query getAddressAutoComplete($lookup: String!) {
  getAddressAutoComplete(lookup: $lookup) {
    streetLine
    secondary
    city
    state
    zipcode
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAddressAutoCompleteGQL extends Apollo.Query<GetAddressAutoCompleteQuery, GetAddressAutoCompleteQueryVariables> {
    document = GetAddressAutoCompleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSchemasDocument = gql`
    query getSchemas($applicationName: String, $schemaType: String, $applicationRoute: String) {
  getSchemas(
    applicationName: $applicationName
    schemaType: $schemaType
    applicationRoute: $applicationRoute
  ) {
    applicationName
    schemaType
    applicationRoute
    schema
    updatedBy
    createdAt
    updatedAt
    version
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSchemasGQL extends Apollo.Query<GetSchemasQuery, GetSchemasQueryVariables> {
    document = GetSchemasDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PreferencesDocument = gql`
    query preferences($memberId: String) {
  preferences(memberId: $memberId) {
    channelId
    channelName
    channelCategory
    contactPreferences {
      preferenceId
      name
      enabled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PreferencesGQL extends Apollo.Query<PreferencesQuery, PreferencesQueryVariables> {
    document = PreferencesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PreferencesSubscriberDocument = gql`
    mutation preferencesSubscriber($memberId: String, $preference: SubscriberInput!) {
  preferencesSubscriber(memberId: $memberId, preference: $preference) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PreferencesSubscriberGQL extends Apollo.Mutation<PreferencesSubscriberMutation, PreferencesSubscriberMutationVariables> {
    document = PreferencesSubscriberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TransferHistoriesDocument = gql`
    query transferHistories($success: Boolean, $passed: Boolean, $folderName: String, $limit: Int) {
  transferHistories(
    success: $success
    passed: $passed
    folderName: $folderName
    limit: $limit
  ) {
    id
    filename
    folderName
    success
    passed
    fileCreatedDate
    createdDate
    updatedDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TransferHistoriesGQL extends Apollo.Query<TransferHistoriesQuery, TransferHistoriesQueryVariables> {
    document = TransferHistoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TransferHistoryDocument = gql`
    query transferHistory($id: ID!) {
  transferHistory(id: $id) {
    id
    filename
    success
    passed
    folderName
    fileCreatedDate
    createdDate
    updatedDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TransferHistoryGQL extends Apollo.Query<TransferHistoryQuery, TransferHistoryQueryVariables> {
    document = TransferHistoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventNotificationHeadersDocument = gql`
    query eventNotificationHeaders($fileName: String, $status: String, $limit: Int) {
  eventNotificationHeaders(fileName: $fileName, status: $status, limit: $limit) {
    id
    fileName
    recordCount
    fileCreatedDate
    fileEffectiveDate
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventNotificationHeadersGQL extends Apollo.Query<EventNotificationHeadersQuery, EventNotificationHeadersQueryVariables> {
    document = EventNotificationHeadersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventNotificationHeaderDocument = gql`
    query eventNotificationHeader($id: ID!) {
  eventNotificationHeader(id: $id) {
    id
    fileName
    recordCount
    fileCreatedDate
    fileEffectiveDate
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventNotificationHeaderGQL extends Apollo.Query<EventNotificationHeaderQuery, EventNotificationHeaderQueryVariables> {
    document = EventNotificationHeaderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventNotificationRowsDocument = gql`
    query eventNotificationRows($limit: Int) {
  eventNotificationRows(limit: $limit) {
    id
    headerId
    customerId
    customerTag
    accountId
    accountTag
    externalAccountId
    externalAccountTag
    transactionId
    transactionTag
    description
    eventTypeId
    transactionTypeCode
    transactionSettledDate
    transactionAvailableDate
    userEventId
    masterId
    transactionAmount
    transactionCreatedDate
    transactionSubTypeCode
    fromAccountId
    fromAvailableBalance
    fromAccountBalance
    fromPendingBalance
    toAccountId
    toAvailableBalance
    toAccountBalance
    toPendingBalance
    modifiedById
    eventDate
    isAdminUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventNotificationRowsGQL extends Apollo.Query<EventNotificationRowsQuery, EventNotificationRowsQueryVariables> {
    document = EventNotificationRowsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventNotificationRowsByEventDocument = gql`
    query eventNotificationRowsByEvent($events: [Int], $status: String) {
  eventNotificationRowsByEvent(events: $events, status: $status) {
    id
    headerId
    customerId
    userEventId
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventNotificationRowsByEventGQL extends Apollo.Query<EventNotificationRowsByEventQuery, EventNotificationRowsByEventQueryVariables> {
    document = EventNotificationRowsByEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventNotificationRowDocument = gql`
    query eventNotificationRow($id: ID!) {
  eventNotificationRow(id: $id) {
    id
    headerId
    customerId
    customerTag
    accountId
    accountTag
    externalAccountId
    externalAccountTag
    transactionId
    transactionTag
    description
    eventTypeId
    transactionTypeCode
    transactionSettledDate
    transactionAvailableDate
    userEventId
    masterId
    transactionAmount
    transactionCreatedDate
    transactionSubTypeCode
    fromAccountId
    fromAvailableBalance
    fromAccountBalance
    fromPendingBalance
    toAccountId
    toAvailableBalance
    toAccountBalance
    toPendingBalance
    modifiedById
    eventDate
    isAdminUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventNotificationRowGQL extends Apollo.Query<EventNotificationRowQuery, EventNotificationRowQueryVariables> {
    document = EventNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateTransferHistoryDocument = gql`
    mutation createTransferHistory($filename: String!, $folderName: String!, $success: Boolean!, $passed: Boolean!, $fileCreationDate: Int!) {
  createTransferHistory(
    filename: $filename
    folderName: $folderName
    success: $success
    passed: $passed
    fileCreationDate: $fileCreationDate
  ) {
    ok
    transferHistory {
      id
      filename
      folderName
      success
      passed
      fileCreatedDate
      createdDate
      updatedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTransferHistoryGQL extends Apollo.Mutation<CreateTransferHistoryMutation, CreateTransferHistoryMutationVariables> {
    document = CreateTransferHistoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkCreateTransferHistoryDocument = gql`
    mutation bulkCreateTransferHistory($transferHistories: [TransferHistoryInputType]) {
  bulkCreateTransferHistory(transferHistories: $transferHistories) {
    ok
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkCreateTransferHistoryGQL extends Apollo.Mutation<BulkCreateTransferHistoryMutation, BulkCreateTransferHistoryMutationVariables> {
    document = BulkCreateTransferHistoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTransferHistoryDocument = gql`
    mutation updateTransferHistory($id: ID!, $filename: String, $folderName: String, $success: Boolean, $passed: Boolean) {
  updateTransferHistory(
    id: $id
    filename: $filename
    folderName: $folderName
    success: $success
    passed: $passed
  ) {
    ok
    transferHistory {
      filename
      success
      folderName
      passed
      fileCreatedDate
      createdDate
      updatedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTransferHistoryGQL extends Apollo.Mutation<UpdateTransferHistoryMutation, UpdateTransferHistoryMutationVariables> {
    document = UpdateTransferHistoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteTransferHistoryDocument = gql`
    mutation deleteTransferHistory($id: ID!) {
  deleteTransferHistory(id: $id) {
    ok
    transferHistory {
      filename
      folderName
      success
      passed
      fileCreatedDate
      createdDate
      updatedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTransferHistoryGQL extends Apollo.Mutation<DeleteTransferHistoryMutation, DeleteTransferHistoryMutationVariables> {
    document = DeleteTransferHistoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateEventNotificationHeaderDocument = gql`
    mutation createEventNotificationHeader($fileCreatedDate: DateTime, $fileEffectiveDate: DateTime, $fileName: String, $recordCount: Int, $status: String) {
  createEventNotificationHeader(
    fileCreatedDate: $fileCreatedDate
    fileEffectiveDate: $fileEffectiveDate
    fileName: $fileName
    recordCount: $recordCount
    status: $status
  ) {
    ok
    eventNotificationHeader {
      fileCreatedDate
      fileEffectiveDate
      fileName
      recordCount
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEventNotificationHeaderGQL extends Apollo.Mutation<CreateEventNotificationHeaderMutation, CreateEventNotificationHeaderMutationVariables> {
    document = CreateEventNotificationHeaderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateEventNotificationHeaderDocument = gql`
    mutation updateEventNotificationHeader($id: ID!, $fileCreatedDate: DateTime, $fileEffectiveDate: DateTime, $fileName: String, $recordCount: Int, $status: String) {
  updateEventNotificationHeader(
    id: $id
    fileCreatedDate: $fileCreatedDate
    fileEffectiveDate: $fileEffectiveDate
    fileName: $fileName
    recordCount: $recordCount
    status: $status
  ) {
    ok
    eventNotificationHeader {
      fileCreatedDate
      fileEffectiveDate
      fileName
      recordCount
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEventNotificationHeaderGQL extends Apollo.Mutation<UpdateEventNotificationHeaderMutation, UpdateEventNotificationHeaderMutationVariables> {
    document = UpdateEventNotificationHeaderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteEventNotificationHeaderDocument = gql`
    mutation deleteEventNotificationHeader($id: ID!) {
  deleteEventNotificationHeader(id: $id) {
    ok
    eventNotificationHeader {
      fileCreatedDate
      fileEffectiveDate
      fileName
      recordCount
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventNotificationHeaderGQL extends Apollo.Mutation<DeleteEventNotificationHeaderMutation, DeleteEventNotificationHeaderMutationVariables> {
    document = DeleteEventNotificationHeaderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateEventNotificationRowDocument = gql`
    mutation createEventNotificationRow($eventNotificationRow: EventNotificationRowInputType) {
  createEventNotificationRow(eventNotificationRow: $eventNotificationRow) {
    ok
    eventNotificationRow {
      id
      headerId
      customerId
      customerTag
      accountId
      accountTag
      externalAccountId
      externalAccountTag
      transactionId
      transactionTag
      description
      eventTypeId
      transactionTypeCode
      transactionSettledDate
      transactionAvailableDate
      userEventId
      masterId
      transactionAmount
      transactionCreatedDate
      transactionSubTypeCode
      fromAccountId
      fromAvailableBalance
      fromAccountBalance
      fromPendingBalance
      toAccountId
      toAvailableBalance
      toAccountBalance
      toPendingBalance
      modifiedById
      eventDate
      isAdminUser
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEventNotificationRowGQL extends Apollo.Mutation<CreateEventNotificationRowMutation, CreateEventNotificationRowMutationVariables> {
    document = CreateEventNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkCreateEventNotificationRowDocument = gql`
    mutation bulkCreateEventNotificationRow($eventNotificationRows: [EventNotificationRowInputType]) {
  bulkCreateEventNotificationRow(eventNotificationRows: $eventNotificationRows) {
    ok
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkCreateEventNotificationRowGQL extends Apollo.Mutation<BulkCreateEventNotificationRowMutation, BulkCreateEventNotificationRowMutationVariables> {
    document = BulkCreateEventNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateEventNotificationRowDocument = gql`
    mutation updateEventNotificationRow($id: ID!, $eventNotificationRow: EventNotificationRowInputType) {
  updateEventNotificationRow(id: $id, eventNotificationRow: $eventNotificationRow) {
    ok
    eventNotificationRow {
      id
      headerId
      customerId
      customerTag
      accountId
      accountTag
      externalAccountId
      externalAccountTag
      transactionId
      transactionTag
      description
      eventTypeId
      transactionTypeCode
      transactionSettledDate
      transactionAvailableDate
      userEventId
      masterId
      transactionAmount
      transactionCreatedDate
      transactionSubTypeCode
      fromAccountId
      fromAvailableBalance
      fromAccountBalance
      fromPendingBalance
      toAccountId
      toAvailableBalance
      toAccountBalance
      toPendingBalance
      modifiedById
      eventDate
      isAdminUser
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEventNotificationRowGQL extends Apollo.Mutation<UpdateEventNotificationRowMutation, UpdateEventNotificationRowMutationVariables> {
    document = UpdateEventNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteEventNotificationRowDocument = gql`
    mutation deleteEventNotificationRow($id: ID!) {
  updateEventNotificationRow(id: $id) {
    ok
    eventNotificationRow {
      id
      headerId
      customerId
      customerTag
      accountId
      accountTag
      externalAccountId
      externalAccountTag
      transactionId
      transactionTag
      description
      eventTypeId
      transactionTypeCode
      transactionSettledDate
      transactionAvailableDate
      userEventId
      masterId
      transactionAmount
      transactionCreatedDate
      transactionSubTypeCode
      fromAccountId
      fromAvailableBalance
      fromAccountBalance
      fromPendingBalance
      toAccountId
      toAvailableBalance
      toAccountBalance
      toPendingBalance
      modifiedById
      eventDate
      isAdminUser
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventNotificationRowGQL extends Apollo.Mutation<DeleteEventNotificationRowMutation, DeleteEventNotificationRowMutationVariables> {
    document = DeleteEventNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCardNotificationRowDocument = gql`
    mutation createCardNotificationRow($cardNotificationRow: CardNotificationRowInputType) {
  createCardNotificationRow(cardNotificationRow: $cardNotificationRow) {
    ok
    cardNotificationRow {
      id
      headerId
      userEventId
      customerId
      cardId
      transactionId
      authorizationTransactionId
      requestTypeCode
      reserved
      merchantCategoryCode
      merchantGroupTypeCode
      cashbackAmount
      surchargeAmount
      cashDepositAmount
      checkDepositAmount
      terminalId
      merchantId
      merchantLocation
      merchantCity
      merchantStateCode
      merchantZipCode
      merchantCountryCode
      panEntryModeTypeCode
      pinEntryModeTypeCode
      cardHolderPresenceTypeCode
      cardPresenceTypeCode
      terminalUnattendedTypeCode
      terminalPremisesTypeCode
      customerTag
      cardTag
      amount
      availableDate
      createdDate
      customField1
      description
      denialReason
      feeCode
      feeDescription
      friendlyDescription
      fromAccountAmount
      fromAccountId
      fromAccountNumberMasked
      fromAvailableAmount
      fromCategory
      fromCreatedDate
      fromCustomField1
      fromCustomField2
      fromCustomField3
      fromCustomField4
      fromCustomField5
      fromLegalName1
      fromLegalName2
      fromName
      fromPendingAmount
      fromPrimaryCustomerId
      fromSubCategory
      fromTag
      institutionName
      masterId
      modifiedById
      payloadTypeId
      settledDate
      subType
      subTypeCode
      tag
      toAccountAmount
      toAccountId
      toAccountNumberMasked
      toAvailableAmount
      toCategory
      toCreatedDate
      toCustomField1
      toCustomField2
      toCustomField3
      toCustomField4
      toCustomField5
      toLegalName1
      toLegalName2
      toName
      toPendingAmount
      toPrimaryCustomerId
      toSubCategory
      toTag
      type
      typeCode
      eventTypeId
      networkProviderTypeId
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCardNotificationRowGQL extends Apollo.Mutation<CreateCardNotificationRowMutation, CreateCardNotificationRowMutationVariables> {
    document = CreateCardNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkCreateCardNotificationRowDocument = gql`
    mutation bulkCreateCardNotificationRow($cardNotificationRows: [CardNotificationRowInputType]) {
  bulkCreateCardNotificationRow(cardNotificationRows: $cardNotificationRows) {
    ok
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkCreateCardNotificationRowGQL extends Apollo.Mutation<BulkCreateCardNotificationRowMutation, BulkCreateCardNotificationRowMutationVariables> {
    document = BulkCreateCardNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCardNotificationRowDocument = gql`
    mutation updateCardNotificationRow($id: ID!, $cardNotificationRow: CardNotificationRowInputType) {
  updateCardNotificationRow(id: $id, cardNotificationRow: $cardNotificationRow) {
    ok
    cardNotificationRow {
      id
      headerId
      userEventId
      customerId
      cardId
      transactionId
      authorizationTransactionId
      requestTypeCode
      reserved
      merchantCategoryCode
      merchantGroupTypeCode
      cashbackAmount
      surchargeAmount
      cashDepositAmount
      checkDepositAmount
      terminalId
      merchantId
      merchantLocation
      merchantCity
      merchantStateCode
      merchantZipCode
      merchantCountryCode
      panEntryModeTypeCode
      pinEntryModeTypeCode
      cardHolderPresenceTypeCode
      cardPresenceTypeCode
      terminalUnattendedTypeCode
      terminalPremisesTypeCode
      customerTag
      cardTag
      amount
      availableDate
      createdDate
      customField1
      description
      denialReason
      feeCode
      feeDescription
      friendlyDescription
      fromAccountAmount
      fromAccountId
      fromAccountNumberMasked
      fromAvailableAmount
      fromCategory
      fromCreatedDate
      fromCustomField1
      fromCustomField2
      fromCustomField3
      fromCustomField4
      fromCustomField5
      fromLegalName1
      fromLegalName2
      fromName
      fromPendingAmount
      fromPrimaryCustomerId
      fromSubCategory
      fromTag
      institutionName
      masterId
      modifiedById
      payloadTypeId
      settledDate
      subType
      subTypeCode
      tag
      toAccountAmount
      toAccountId
      toAccountNumberMasked
      toAvailableAmount
      toCategory
      toCreatedDate
      toCustomField1
      toCustomField2
      toCustomField3
      toCustomField4
      toCustomField5
      toLegalName1
      toLegalName2
      toName
      toPendingAmount
      toPrimaryCustomerId
      toSubCategory
      toTag
      type
      typeCode
      eventTypeId
      networkProviderTypeId
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCardNotificationRowGQL extends Apollo.Mutation<UpdateCardNotificationRowMutation, UpdateCardNotificationRowMutationVariables> {
    document = UpdateCardNotificationRowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMemberApplicationProgressDocument = gql`
    query getMemberApplicationProgress($email: String!) {
  getMemberApplicationProgress(email: $email) {
    id
    bankId
    countryId
    customerId
    applicationProgress
    bank {
      identifier
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMemberApplicationProgressGQL extends Apollo.Query<GetMemberApplicationProgressQuery, GetMemberApplicationProgressQueryVariables> {
    document = GetMemberApplicationProgressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMemberApplicationProgressDocument = gql`
    mutation updateMemberApplicationProgress($memberId: String!, $applicationProgress: String!) {
  updateMemberApplicationProgress(
    memberId: $memberId
    applicationProgress: $applicationProgress
  ) {
    member {
      id
      bankId
      countryId
      customerId
      applicationProgress
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMemberApplicationProgressGQL extends Apollo.Mutation<UpdateMemberApplicationProgressMutation, UpdateMemberApplicationProgressMutationVariables> {
    document = UpdateMemberApplicationProgressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SupportedCountriesDocument = gql`
    query supportedCountries {
  supportedCountries {
    id
    abbreviation
    name
    identifier
    supported
    unitOfMeasure
    createdDate
    updatedDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SupportedCountriesGQL extends Apollo.Query<SupportedCountriesQuery, SupportedCountriesQueryVariables> {
    document = SupportedCountriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OnboardMemberDocument = gql`
    mutation onboardMember($email: String!, $phone: String!, $countryId: String!) {
  onboardMember(email: $email, phone: $phone, countryId: $countryId) {
    member {
      id
      bankId
      countryId
      customerId
      applicationProgress
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OnboardMemberGQL extends Apollo.Mutation<OnboardMemberMutation, OnboardMemberMutationVariables> {
    document = OnboardMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendVerificationCodeDocument = gql`
    mutation sendVerificationCode($memberId: String!) {
  sendVerificationCode(memberId: $memberId) {
    code {
      id
      verificationCode
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendVerificationCodeGQL extends Apollo.Mutation<SendVerificationCodeMutation, SendVerificationCodeMutationVariables> {
    document = SendVerificationCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfirmVerificationCodeDocument = gql`
    mutation confirmVerificationCode($code: String!, $memberId: String!) {
  confirmVerificationCode(code: $code, memberId: $memberId) {
    code {
      id
      verificationCode
      validated
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfirmVerificationCodeGQL extends Apollo.Mutation<ConfirmVerificationCodeMutation, ConfirmVerificationCodeMutationVariables> {
    document = ConfirmVerificationCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMemberReferrerDocument = gql`
    mutation updateMemberReferrer($friendTendId: String, $companyCode: String, $friendEmail: String, $memberId: String!) {
  updateMemberReferrer(
    friendTendId: $friendTendId
    memberId: $memberId
    companyCode: $companyCode
    friendEmail: $friendEmail
  ) {
    member {
      bankId
      countryId
      customerId
      applicationProgress
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMemberReferrerGQL extends Apollo.Mutation<UpdateMemberReferrerMutation, UpdateMemberReferrerMutationVariables> {
    document = UpdateMemberReferrerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddMemberEmailDocument = gql`
    mutation addMemberEmail($email: String!) {
  addMemberEmail(email: $email) {
    ok
    message
    member {
      id
      bankId
      countryId
      inviterId
      accountStatus
      applicationProgress
      applicationStatus
      companyCode
      customerId
      email
      phone
      language
      friendEmail
      memberType
      createdDate
      updatedDate
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddMemberEmailGQL extends Apollo.Mutation<AddMemberEmailMutation, AddMemberEmailMutationVariables> {
    document = AddMemberEmailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DueDiligenceQuestionsDocument = gql`
    query dueDiligenceQuestions {
  dueDiligenceQuestions {
    questionName
    questionId
    questionDescription
    questionEnglishDescription
    questionSpanishDescription
    answerType
    answerMaxLength
    choices {
      choiceId
      choiceDescription
      choiceEnglishDescription
      choiceSpanishDescription
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DueDiligenceQuestionsGQL extends Apollo.Query<DueDiligenceQuestionsQuery, DueDiligenceQuestionsQueryVariables> {
    document = DueDiligenceQuestionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PopulateDueDiligenceCategoriesDocument = gql`
    mutation populateDueDiligenceCategories {
  populateDueDiligenceCategories {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PopulateDueDiligenceCategoriesGQL extends Apollo.Mutation<PopulateDueDiligenceCategoriesMutation, PopulateDueDiligenceCategoriesMutationVariables> {
    document = PopulateDueDiligenceCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveDueDiligenceAnswersDocument = gql`
    mutation saveDueDiligenceAnswers($answers: [DueDiligenceAnswerInputType]) {
  saveDueDiligenceAnswers(answers: $answers) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveDueDiligenceAnswersGQL extends Apollo.Mutation<SaveDueDiligenceAnswersMutation, SaveDueDiligenceAnswersMutationVariables> {
    document = SaveDueDiligenceAnswersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCustomerDocument = gql`
    query getCustomer($memberId: ID, $customerId: ID) {
  getCustomer(memberId: $memberId, customerId: $customerId) {
    memberId
    username
    email
    customerId
    currentOnboardingStatus
    country
    deviceType
    osVersion
    appDownload
    countrySelected
    emailMobileEntered
    inviterChosen
    inviterId
    inviterCode
    promotionType
    loginCreated
    personalInfoCompleted
    tncSubmitted
    applicationStatusTime {
      applicationDenied
      applicationOnHold
      applicationApproved
    }
    fundingSource
    paymentCompleted
    cardIssued
    otpVerified
    idScanCompleted
    selfieCompleted
    startedJumio
    completedJumio
    setUpProfile
    beneficiaryCompleted
    accountLevelSelected
    accountLevel
    infoEntered
    accountFunded
    kycClosure
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCustomerGQL extends Apollo.Query<GetCustomerQuery, GetCustomerQueryVariables> {
    document = GetCustomerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCustomersDocument = gql`
    query getCustomers($currentOnboardingStatus: String, $bank: BankIdentifier, $page: Int, $limit: Int) {
  getCustomers(
    currentOnboardingStatus: $currentOnboardingStatus
    bank: $bank
    page: $page
    limit: $limit
  ) {
    memberId
    username
    email
    customerId
    currentOnboardingStatus
    country
    deviceType
    osVersion
    appDownload
    countrySelected
    emailMobileEntered
    inviterChosen
    inviterId
    inviterCode
    promotionType
    loginCreated
    personalInfoCompleted
    tncSubmitted
    applicationStatusTime {
      applicationDenied
      applicationOnHold
      applicationApproved
    }
    fundingSource
    paymentCompleted
    cardIssued
    otpVerified
    idScanCompleted
    selfieCompleted
    startedJumio
    completedJumio
    setUpProfile
    beneficiaryCompleted
    accountLevelSelected
    accountLevel
    infoEntered
    accountFunded
    kycClosure
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCustomersGQL extends Apollo.Query<GetCustomersQuery, GetCustomersQueryVariables> {
    document = GetCustomersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NbkcOnboardDocument = gql`
    mutation nbkcOnboard($email: String, $address: AddressInputType, $dueDiligence: [DueDiligenceAnswersInputType], $eSign: ESignAcceptanceInputType, $identity: IdentityInputType, $mla: MLAInputType, $name: NameInputType, $tnc: TNCAcceptanceInputType, $trigger: TriggerInputType, $primaryDocument: PrimaryDocumentType, $secondaryDocument: SecondaryDocumentType) {
  nbkcOnboard(
    email: $email
    address: $address
    dueDiligence: $dueDiligence
    eSign: $eSign
    identity: $identity
    mla: $mla
    name: $name
    tnc: $tnc
    trigger: $trigger
    primaryDocument: $primaryDocument
    secondaryDocument: $secondaryDocument
  ) {
    ok
    message
    member {
      id
      bankId
      countryId
      customerId
      applicationProgress
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NbkcOnboardGQL extends Apollo.Mutation<NbkcOnboardMutation, NbkcOnboardMutationVariables> {
    document = NbkcOnboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InvexOnboardDocument = gql`
    mutation invexOnboard($accountLevel: AccountLevelInputType, $address: AddressInfoInputType, $beneficiary: BeneficiaryInputType, $fundProvider: FundProviderInputType, $general: GeneralInfoInputType, $govDisclosure: GovDisclosureInfoInputType, $identityConfirmation: IdentityInformationInputType, $personal: PersonalInputType, $tnc: TNCInvexAcceptanceInputType) {
  invexOnboard(
    accountLevel: $accountLevel
    address: $address
    beneficiary: $beneficiary
    fundProvider: $fundProvider
    general: $general
    govDisclosure: $govDisclosure
    identityConfirmation: $identityConfirmation
    personal: $personal
    tnc: $tnc
  ) {
    ok
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InvexOnboardGQL extends Apollo.Mutation<InvexOnboardMutation, InvexOnboardMutationVariables> {
    document = InvexOnboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ApplyMembershipCodeDocument = gql`
    mutation applyMembershipCode($membershipCode: String!) {
  applyMembershipCode(membershipCode: $membershipCode) {
    member {
      bankId
      countryId
      customerId
      applicationProgress
      bank {
        identifier
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ApplyMembershipCodeGQL extends Apollo.Mutation<ApplyMembershipCodeMutation, ApplyMembershipCodeMutationVariables> {
    document = ApplyMembershipCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetStateCityMunicipalityDocument = gql`
    query getStateCityMunicipality($zipCode: String!) {
  getStateCityMunicipality(zipCode: $zipCode) {
    stateName
    state
    municipalityName
    municipality
    cityName
    city
    suburbName
    suburb
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStateCityMunicipalityGQL extends Apollo.Query<GetStateCityMunicipalityQuery, GetStateCityMunicipalityQueryVariables> {
    document = GetStateCityMunicipalityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PlaidLinkTokenDocument = gql`
    query plaidLinkToken($memberId: String!) {
  plaidLinkToken(memberId: $memberId) {
    linkToken
    expiration
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PlaidLinkTokenGQL extends Apollo.Query<PlaidLinkTokenQuery, PlaidLinkTokenQueryVariables> {
    document = PlaidLinkTokenDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExternalAccountDocument = gql`
    query externalAccount($memberId: String!) {
  externalAccount(memberId: $memberId) {
    accountId
    accountNumber
    routingNumber
    accountName
    currency
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExternalAccountGQL extends Apollo.Query<ExternalAccountQuery, ExternalAccountQueryVariables> {
    document = ExternalAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LinkExternalAccountDocument = gql`
    mutation linkExternalAccount($memberId: String!, $plaidToken: String!, $plaidAccountId: String!) {
  linkExternalAccount(
    memberId: $memberId
    plaidToken: $plaidToken
    plaidAccountId: $plaidAccountId
  ) {
    ok
    message
    externalAccount {
      accountId
      accountNumber
      routingNumber
      accountName
      currency
      availableBalance
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinkExternalAccountGQL extends Apollo.Mutation<LinkExternalAccountMutation, LinkExternalAccountMutationVariables> {
    document = LinkExternalAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReplaceExternalAccountDocument = gql`
    mutation replaceExternalAccount($memberId: String!, $plaidToken: String!, $plaidAccountId: String!) {
  replaceExternalAccount(
    memberId: $memberId
    plaidToken: $plaidToken
    plaidAccountId: $plaidAccountId
  ) {
    ok
    message
    externalAccount {
      accountId
      accountNumber
      routingNumber
      accountName
      currency
      availableBalance
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReplaceExternalAccountGQL extends Apollo.Mutation<ReplaceExternalAccountMutation, ReplaceExternalAccountMutationVariables> {
    document = ReplaceExternalAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TransferFundsDocument = gql`
    mutation transferFunds($memberId: String!, $savingsAmount: Float!, $checkingAmount: Float!) {
  transferFunds(
    memberId: $memberId
    savingsAmount: $savingsAmount
    checkingAmount: $checkingAmount
  ) {
    ok
    message
    transfers {
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TransferFundsGQL extends Apollo.Mutation<TransferFundsMutation, TransferFundsMutationVariables> {
    document = TransferFundsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExternalToInternalTransferDocument = gql`
    mutation externalToInternalTransfer($memberId: String!, $toAccountId: Int!, $amount: Float!, $note: String) {
  externalToInternalTransfer(
    memberId: $memberId
    toAccountId: $toAccountId
    amount: $amount
    note: $note
  ) {
    ok
    message
    transfer {
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExternalToInternalTransferGQL extends Apollo.Mutation<ExternalToInternalTransferMutation, ExternalToInternalTransferMutationVariables> {
    document = ExternalToInternalTransferDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InternalToExternalTransferDocument = gql`
    mutation internalToExternalTransfer($memberId: String!, $fromAccountId: Int!, $amount: Float!, $note: String) {
  internalToExternalTransfer(
    memberId: $memberId
    fromAccountId: $fromAccountId
    amount: $amount
    note: $note
  ) {
    ok
    message
    transfer {
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InternalToExternalTransferGQL extends Apollo.Mutation<InternalToExternalTransferMutation, InternalToExternalTransferMutationVariables> {
    document = InternalToExternalTransferDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePinwheelLinkDocument = gql`
    mutation createPinwheelLink($routingNumber: String!, $accountNumber: String!, $accountType: String!, $pinwheelVersion: PinwheelVersionType) {
  createPinwheelLink(
    orgName: "Tend"
    job: "direct_deposit_switch"
    routingNumber: $routingNumber
    accountNumber: $accountNumber
    accountType: $accountType
    pinwheelVersion: $pinwheelVersion
  ) {
    ok
    message
    link {
      mode
      token
      expires
      tokenId
    }
    error {
      type
      code
      message
      statusCode
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePinwheelLinkGQL extends Apollo.Mutation<CreatePinwheelLinkMutation, CreatePinwheelLinkMutationVariables> {
    document = CreatePinwheelLinkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InternalTransferDocument = gql`
    mutation internalTransfer($memberId: String!, $fromAccountId: Int!, $toAccountId: Int!, $amount: Float!, $note: String) {
  internalTransfer(
    memberId: $memberId
    fromAccountId: $fromAccountId
    toAccountId: $toAccountId
    amount: $amount
    note: $note
  ) {
    ok
    message
    transfer {
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InternalTransferGQL extends Apollo.Mutation<InternalTransferMutation, InternalTransferMutationVariables> {
    document = InternalTransferDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TransactionsDocument = gql`
    query transactions($memberId: String!, $accountId: Int!, $amountMin: Float, $amountMax: Float, $startDate: Date, $endDate: Date, $isCredit: Boolean, $keywords: [String], $pageNumber: Int, $pageSize: Int) {
  transactions(
    memberId: $memberId
    accountId: $accountId
    startDate: $startDate
    endDate: $endDate
    amountMin: $amountMin
    amountMax: $amountMax
    keywords: $keywords
    isCredit: $isCredit
    pageSize: $pageSize
    pageNumber: $pageNumber
  ) {
    pending {
      transactionId
      customerId
      amount
      isCredit
      createdDate
      availableDate
      settledDate
      description {
        category
        note
      }
      status
      friendlyDescription
    }
    recent {
      transactionId
      customerId
      amount
      isCredit
      createdDate
      availableDate
      settledDate
      description {
        category
        note
      }
      status
      friendlyDescription
    }
    scheduled {
      transactionId
      customerId
      amount
      isCredit
      createdDate
      availableDate
      settledDate
      description {
        category
        note
      }
      status
      friendlyDescription
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TransactionsGQL extends Apollo.Query<TransactionsQuery, TransactionsQueryVariables> {
    document = TransactionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }