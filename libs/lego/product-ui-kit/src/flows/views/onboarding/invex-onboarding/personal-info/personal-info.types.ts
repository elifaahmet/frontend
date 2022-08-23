/**@format */

export interface PersonalInfoState {
  countryOfBirth: { value: string; label: string } | null;
  placeOfBirth?: { value: string; label: string } | null;
  fmNumber?: string;
  sex: { value: string; label: string } | null;
  maritalStatus: { value: string; label: string } | null;
  education: { value: string; label: string } | null;
  occupation: { value: string; label: string } | null;
  profession: { value: string; label: string } | null;
  economicActivity: { value: string; label: string } | null;
  banxicoActivity: { value: string; label: string } | null;
}

export interface PersonalInfoProps {
  onContinue: (state: PersonalInfoState) => void;
  countryOptions: [];
  placeOfBirthOptions: [];
  sexOptions: [];
  maritalStatusOptions: [];
  educationOptions: [];
  occupationOptions: [];
  professionOptions: [];
  economicActivityOptions: [];
  banxicoActivityOptions: [];
}
