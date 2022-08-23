/**@format */
import React, { ChangeEvent, useState } from 'react';

import {
  DropdownProps,
  InputWrapper,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import { InputProps } from '@tend/shared/design/ui-kit';

import {
  BeneficiaryProfileSetupState,
  BeneficiarySetupProps,
} from './beneficiary-profile-setup.types';

export const BeneficiaryProfileSetup: React.FC<BeneficiarySetupProps> = (
  props
) => {
  const [state, setState] = useState<BeneficiaryProfileSetupState>({
    firstName: '',
    secondName: '',
    paternalLastName: '',
    maternalLastName: '',
    relationship: null,
    dob: '',
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled: [
          state.firstName,
          state.paternalLastName,
          state.dob,
          state.relationship,
        ].some((x) => !x),
      },
    ],
  };

  /**@tech-debt: move this function to utils file since its being used in all forms*/
  const getInputOnChangeHandler = (key: keyof BeneficiaryProfileSetupState) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const firstNameInputProps: InputProps = {
    type: 'text',
    name: 'first-name',
    label: 'First name',
    placeholder: 'Enter their first name',
    defaultValue: state.firstName,
    onChange: getInputOnChangeHandler('firstName'),
  };

  const secondNameInputProps: InputProps = {
    type: 'text',
    name: 'second-name',
    label: 'Second name',
    placeholder: 'Enter their second name',
    defaultValue: state.secondName,
    onChange: getInputOnChangeHandler('secondName'),
  };

  const maternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'maternal-last-name',
    label: 'maternal name',
    placeholder: 'Enter their maternal last name',
    defaultValue: state.maternalLastName,
    onChange: getInputOnChangeHandler('maternalLastName'),
  };

  const paternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'paternal-last-name',
    label: 'paternal name',
    placeholder: 'Enter their paternal last name',
    defaultValue: state.paternalLastName,
    onChange: getInputOnChangeHandler('paternalLastName'),
  };

  const dobInputProps: InputProps = {
    type: 'text',
    name: 'dob',
    label: 'date of birth',
    placeholder: 'Enter their date of birth',
    defaultValue: state.dob,
    onChange: getInputOnChangeHandler('dob'),
  };

  const relationshipProps: DropdownProps = {
    label: 'RELATIONSHIP',
    placeholder: 'Select their relationship to you',
    options: props.relationshipOptions,
    onChange: (option: { value: string; label: string }) => {
      setState((prevState) => ({
        ...prevState,
        relationship: option,
      }));
    },
  };

  const header: PageTitleSubtitleProps = {
    title: 'Set up your beneficiary.',
    subtitle: 'We just need to know who is your beneficiary.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <InputWrapper
        isRequired={!state.firstName}
        inputProps={firstNameInputProps}
      />
      <InputWrapper inputProps={secondNameInputProps} />
      <InputWrapper
        isRequired={!state.paternalLastName}
        inputProps={paternalLastNameInputProps}
      />
      <InputWrapper inputProps={maternalLastNameInputProps} />
      <InputWrapper isRequired={!state.dob} inputProps={dobInputProps} />
      <InputWrapper
        isRequired={!state.relationship}
        dropdownProps={relationshipProps}
        inputType="dropdown"
      />
    </PageTemplateBottomDockedButtons>
  );
};
