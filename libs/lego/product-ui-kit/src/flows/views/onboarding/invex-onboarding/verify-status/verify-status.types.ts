/**@format */

export interface VerifyStatusState {
  applicantHoldsGovernmentPosition: boolean;
  relativeHoldsGovernmentPosition: boolean;
  applicant: {
    position: { value: string; label: string } | null;
    association: string;
  };
  relative?: {
    firstName: string;
    secondName?: string;
    paternalLastName: string;
    maternalLastName?: string;
    position: { value: string; label: string } | null;
    address: string;
    phone: string;
    participationPercent: { value: string; label: string } | null;
  };
}

export interface VerifyStatusProps {
  governmentPositions: { value: string; label: string }[];
  relativeContributionOptions: { value: string; label: string }[];
  onContinue: (state: VerifyStatusState) => void;
}
