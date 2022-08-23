/**@format */
import React, { ChangeEvent, useState } from 'react';

import {
  InputWrapper,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import { InputProps } from '@tend/shared/design/ui-kit';

import { ProfileSetupProps, ProfileSetupState } from './profile-setup.types';

export const InvexProfileSetup: React.FC<ProfileSetupProps> = (props) => {
  const [state, setState] = useState<ProfileSetupState>({
    firstName: '',
    secondName: '',
    paternalLastName: '',
    maternalLastName: '',
    curp: '',
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
          state.curp,
        ].some((x) => !x),
      },
    ],
  };

  /**@tech-debt: move this function to utils file since its being used in all forms*/
  const getInputOnChangeHandler = (key: keyof ProfileSetupState) => (
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
    placeholder: 'Enter your first name',
    defaultValue: state.firstName,
    onChange: getInputOnChangeHandler('firstName'),
  };

  const secondNameInputProps: InputProps = {
    type: 'text',
    name: 'second-name',
    label: 'Second name',
    placeholder: 'Enter your second name',
    defaultValue: state.secondName,
    onChange: getInputOnChangeHandler('secondName'),
  };

  const maternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'maternal-last-name',
    label: 'maternal name',
    placeholder: 'Enter your maternal last name',
    defaultValue: state.maternalLastName,
    onChange: getInputOnChangeHandler('maternalLastName'),
  };

  const paternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'paternal-last-name',
    label: 'paternal name',
    placeholder: 'Enter your paternal last name',
    defaultValue: state.paternalLastName,
    onChange: getInputOnChangeHandler('paternalLastName'),
  };

  const curpInputProps: InputProps = {
    type: 'text',
    name: 'curp',
    label: 'curp',
    placeholder: 'Enter your CURP',
    defaultValue: state.curp,
    onChange: getInputOnChangeHandler('curp'),
  };

  const dobInputProps: InputProps = {
    type: 'text',
    name: 'dob',
    label: 'date of birth',
    placeholder: 'DD/MM/YYYY',
    defaultValue: state.dob,
    onChange: getInputOnChangeHandler('dob'),
  };

  const header: PageTitleSubtitleProps = {
    title: 'Set up your profile.',
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
      <InputWrapper isRequired={!state.curp} inputProps={curpInputProps} />
    </PageTemplateBottomDockedButtons>
  );
};
