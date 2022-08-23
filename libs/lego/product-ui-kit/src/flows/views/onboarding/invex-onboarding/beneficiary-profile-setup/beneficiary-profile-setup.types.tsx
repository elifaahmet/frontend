/**@format */

export interface BeneficiaryProfileSetupState {
  firstName: string;
  secondName: string;
  paternalLastName: string;
  maternalLastName: string;
  relationship: { value: string; label: string } | null;
  dob: string;
}

export interface BeneficiarySetupProps {
  onContinue: (state: BeneficiaryProfileSetupState) => void;
  relationshipOptions: [];
}
