export interface IUser {
  memberId: string;
  tendId: string;
  nickname: string;
  country: string;
}

export enum ApplicationProgressEnum {
  EmailRegistered = 'email-registered',
  InviterChosen = 'inviter-chosen',
  CountrySelected = 'country-selected',
  BankIdentified = 'bank-identified',
  EmailVerified = 'email-verified',
  CredentialsCreated = 'credentials-created',
  TendIdCreated = 'tend-id-created',
  JumioScanStarted = 'jumio-scan-started',
  JumioScanFailed = 'jumio-scan-failed',
  JumioScanSucceeded = 'jumio-scan-succeeded',
  JumioVerifyApproved = 'jumio-verify-approved',
  JumioVerifyDenied = 'jumio-verify-denied',
  GeneralInfoCompleted = 'general-info-completed',
  AddressInfoCompleted = 'address-info-completed',
  BeneficiaryInfoCompleted = 'beneficiary-info-completed',
  AccountLevelSelected = 'account-level-selected',
  PersonalInfoCompleted = 'personal-info-completed',
  FundSourceInfoCompleted = 'fund-source-info-completed',
  GovDisclosureCompleted = 'gov-disclosure-completed',
  IdentityConfirmationCompleted = 'identify-confirmation-completed',
  BankApplicationSubmitted = 'bank-application-submitted',
  IdentityQuestionsViewed = 'identity-questions-viewed',
  IdentityQuestionsAnswered = 'identity-questions-answered',
  ProductOnboarded = 'product-onboarded',
  TermsAndConditionAccepted = 'tnc-accepted',
  AccountFunded = 'account-funded',
  DirectDeposit = 'direct-deposit-performed',
  ExperianRegistered = 'experian-registered',
  RegistrationCompleted = 'registration-completed',
  ESignAccepted = 'esign-agreement-accepted',
  PrimaryDocumentsUploaded = 'primary-documents-uploaded',
  SecondaryDocumentUploaded = 'secondary-documents-uploaded'
}

export enum ApplicationStatusEnum {
  DENIED = 'denied',
  VERIFIED = 'verified',
  AUTOMATED = 'automated-review',
  SSN_MANUEL = 'ssn-manual-review',
  ADDRESS_MANUAL = 'address-manual-review',
  SSN_ADDRESS_MANUAL = 'ssn-and-address-manual-review',
  DOB_MANUAL = 'dob-manual-review',
  ALERT_OR_FRAUD = 'alert-or-fraud-manual-review',
  DEFAULT_MANUAL = 'default-manual-review',
  STARTED = 'started',
  COMPLETED = 'completed',
  ONHOLD = 'onhold',
}
