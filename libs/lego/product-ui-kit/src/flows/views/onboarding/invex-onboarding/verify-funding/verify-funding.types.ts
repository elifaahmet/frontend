/**@format */

export interface VerifyFundingState {
  isSelfFunded: boolean;
  firstName: string;
  secondName: string;
  paternalLastName: string;
  maternalLastName: string;
  dateOfBirth: string;
}

export interface VerifyFundingProps {
  onContinue: (state: VerifyFundingState) => void;
}
