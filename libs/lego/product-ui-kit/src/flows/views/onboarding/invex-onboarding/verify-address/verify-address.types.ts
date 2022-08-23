/**@format */

import { FileUploadProps } from '@tend/lego/product-ui-kit';

export interface VerifyAddressState {
  utilityBillType: { value: string; label: string };
  uploadedSuccessfully: boolean;
}

export interface VerifyAddressProps {
  onContinue: (state: VerifyAddressState) => void;
  utilityBillOptions: { value: string; label: string }[];
  fileUploadProps: FileUploadProps;
}
