/**@format */

import React, { useState } from 'react';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  InputWrapper,
  DropdownProps,
  FileUpload,
  PageTitleSubtitleProps,
  PageTitleSubtitle,
} from '@tend/lego/product-ui-kit';
import { VerifyAddressProps, VerifyAddressState } from './verify-address.types';

export const VerifyAddress: React.FC<VerifyAddressProps> = (props) => {
  const [state, setState] = useState<VerifyAddressState>({
    utilityBillType: null,
    uploadedSuccessfully: false,
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled: !state.uploadedSuccessfully,
        onClick: () => {
          props.onContinue(state);
        },
      },
    ],
  };

  const utilityTypeProps: DropdownProps = {
    label: 'VALID UTILITY',
    placeholder: 'Select the valid utility bill type',
    options: props.utilityBillOptions,
    onChange: (option: { value: string; label: string }) => {
      setState({
        utilityBillType: option,
        uploadedSuccessfully: false,
      });
    },
  };

  const { onUpload, ...uploadRestProps } = props.fileUploadProps;
  const onUploadChained = (e) =>
    onUpload(e)
      .then((result) => {
        setState((prevState) => ({
          ...prevState,
          uploadedSuccessfully: result.success,
        }));
        return result;
      })
      .catch((err) => {
        setState((prevState) => ({
          ...prevState,
          uploadedSuccessfully: false,
        }));
        return err;
      });

  const aggregatedUploadProps = {
    ...uploadRestProps,
    onUpload: (e) => onUploadChained(e),
    forceReset: !state.uploadedSuccessfully,
  };

  const header: PageTitleSubtitleProps = {
    title: 'VALIDATE\nYOUR ADDRESS.',
    subtitle:
      'We just need to verify your address.\nPlease take an image of a utility bill\nfrom the last 3 months.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <InputWrapper dropdownProps={utilityTypeProps} inputType="dropdown" />
      <FileUpload {...aggregatedUploadProps} />
    </PageTemplateBottomDockedButtons>
  );
};

export default VerifyAddress;
