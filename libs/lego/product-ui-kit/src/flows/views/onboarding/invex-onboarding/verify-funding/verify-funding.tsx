/**@format */

import React, { useState, ChangeEvent } from 'react';
import {
  RadioButton,
  RadioButtonProps,
  InputProps,
} from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  PageTitleSubtitleProps,
  PageTitleSubtitle,
  InputWrapper,
} from '@tend/lego/product-ui-kit';
import { VerifyFundingState, VerifyFundingProps } from './verify-funding.types';

export const VerifyFunding: React.FC<VerifyFundingProps> = (props) => {
  const [state, setState] = useState<VerifyFundingState>({
    isSelfFunded: null,
    firstName: '',
    secondName: '',
    paternalLastName: '',
    maternalLastName: '',
    dateOfBirth: '',
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled:
          state.isSelfFunded === null ||
          (!state.isSelfFunded &&
            (!state.firstName ||
              !state.paternalLastName ||
              !state.dateOfBirth)),
      },
    ],
  };

  const getInputOnChangeHandler = (key: keyof VerifyFundingState) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const fundingSourceSelectionProps: RadioButtonProps = {
    labels: ['I am', 'Someone else'],
    radioGroupName: 'funding-source',
    selectedColor: 'primary-yellow',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        isSelfFunded: value === 'i-am',
      }));
    },
  };

  const firstNameInputProps: InputProps = {
    type: 'text',
    name: 'first-name',
    label: 'first name',
    placeholder: 'Enter their first name',
    defaultValue: state.firstName,
    onChange: getInputOnChangeHandler('firstName'),
  };

  const secondNameInputProps: InputProps = {
    type: 'text',
    name: 'second-name',
    label: 'second name',
    placeholder: 'Enter their second name',
    defaultValue: state.secondName,
    onChange: getInputOnChangeHandler('secondName'),
  };

  const paternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'paternal-last-name',
    label: 'paternal last name',
    placeholder: 'Enter their paternal last name',
    defaultValue: state.paternalLastName,
    onChange: getInputOnChangeHandler('paternalLastName'),
  };

  const maternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'maternal-last-name',
    label: 'maternal last name',
    placeholder: 'Enter their maternal last name',
    defaultValue: state.maternalLastName,
    onChange: getInputOnChangeHandler('maternalLastName'),
  };

  const dateOfBirthInputProps: InputProps = {
    type: 'text',
    name: 'date-of-birth',
    label: 'date of birth',
    placeholder: 'Enter their Date of Birth',
    defaultValue: state.dateOfBirth,
    onChange: getInputOnChangeHandler('dateOfBirth'),
  };

  const header: PageTitleSubtitleProps = {
    title: 'VERIFY\nYOUR FUNDING.',
    subtitle: 'We just need to know who will\nbe providing the funding.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <Spacer top={16} />

      <RadioButton {...fundingSourceSelectionProps} />
      <Spacer top={16} bottom={16} />
      {state.isSelfFunded === false && (
        <>
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
          <InputWrapper
            isRequired={!state.dateOfBirth}
            inputProps={dateOfBirthInputProps}
          />
        </>
      )}
    </PageTemplateBottomDockedButtons>
  );
};
