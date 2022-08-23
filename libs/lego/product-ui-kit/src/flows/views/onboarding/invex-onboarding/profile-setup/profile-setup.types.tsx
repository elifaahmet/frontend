/**@format */

export interface ProfileSetupState {
  firstName: string;
  secondName: string;
  paternalLastName: string;
  maternalLastName: string;
  curp: string;
  dob: string;
}

export interface ProfileSetupProps {
  onContinue: (state: ProfileSetupState) => void;
}
