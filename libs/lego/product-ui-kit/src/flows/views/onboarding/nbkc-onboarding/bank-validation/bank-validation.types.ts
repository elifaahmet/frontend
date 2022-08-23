/**@format */

export interface BankValidationState {
  member: {
    dob: string;
    ssn: string;
    idType: { value: string; label: string } | null;
    issuer: { value: string; label: string } | null;
    idNumber: string;
    memberType: string;
  };
  dependent: {
    firstName: string;
    lastName: string;
    ssn: string;
    dob: string;
  };
}

export interface BankValidationProps {
  idTypeOptions: { value: string; label: string }[];
  issuerOptions: { value: string; label: string }[];
  onContinue: (state: BankValidationState) => void;
}
