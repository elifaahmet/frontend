/**@format */

export interface AddressProfileSetupState {
  addressType: { value: string; label: string } | null;
  propertyType: { value: string; label: string } | null;
  streetName: string;
  outdoorNumber: string;
  interiorNumber: string;
  postalCode: string;
  suburb: { value: string; label: string } | null;
  dateOfResidence: string;
}

export interface AddressProfileSetupProps {
  onContinue: (state: AddressProfileSetupState) => void;
  state?: string;
  municipality?: string;
  city?: string;
  addressTypeOptions: [];
  propertyTypeOptions: [];
  suburbOptions: [];
}
