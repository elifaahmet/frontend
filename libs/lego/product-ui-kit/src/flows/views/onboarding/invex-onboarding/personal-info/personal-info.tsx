/**@format */

import React, { useState, ChangeEvent } from 'react';
import { InputProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  DropdownProps,
  InputWrapper,
  PageTitleSubtitleProps,
  PageTitleSubtitle,
} from '@tend/lego/product-ui-kit';
import { PersonalInfoProps, PersonalInfoState } from './personal-info.types';

export const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
  const [state, setState] = useState<PersonalInfoState>({
    countryOfBirth: null,
    placeOfBirth: null,
    fmNumber: '',
    sex: null,
    maritalStatus: null,
    education: null,
    occupation: null,
    profession: null,
    economicActivity: null,
    banxicoActivity: null,
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
      },
    ],
  };

  const getInputOnChangeHandler = (key: keyof PersonalInfoState) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const fmNumberInputProps: InputProps = {
    type: 'text',
    name: 'fm-number',
    label: 'FM Number',
    placeholder: 'Enter your FM number',
    defaultValue: state.fmNumber,
    onChange: getInputOnChangeHandler('fmNumber'),
  };

  const countryOfBirthProps: DropdownProps = {
    label: 'COUNTRY OF BIRTH',
    placeholder: 'Select your country of birth',
    options: props.countryOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        countryOfBirth: option,
      })),
  };

  const placeOfBirthProps: DropdownProps = {
    label: 'PLACE OF BIRTH',
    placeholder: 'Select your place of birth',
    options: props.placeOfBirthOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        placeOfBirth: option,
      })),
  };

  const sexProps: DropdownProps = {
    label: 'SEX',
    placeholder: 'Select your Sex',
    options: props.sexOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        sex: option,
      })),
  };

  const martialStatusProps: DropdownProps = {
    label: 'MARITAL STATUS',
    placeholder: 'Select your marital status',
    options: props.maritalStatusOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        maritalStatus: option,
      })),
  };

  const educationProps: DropdownProps = {
    label: 'HIGHEST LEVEL OF EDUCATION',
    placeholder: 'Select your highest level of education',
    options: props.educationOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        education: option,
      })),
  };

  const occupationProps: DropdownProps = {
    label: 'OCCUPATION',
    placeholder: 'Select your occupation',
    options: props.occupationOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        occupation: option,
      })),
  };

  const professionProps: DropdownProps = {
    label: 'PROFESSION',
    placeholder: 'Select your profession',
    options: props.professionOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        profession: option,
      })),
  };

  const economicActivityProps: DropdownProps = {
    label: 'Economic activity',
    placeholder: 'Select your Economic activity',
    options: props.economicActivityOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        economicActivity: option,
      })),
  };

  const banxicoActivityProps: DropdownProps = {
    label: 'Banxico activity',
    placeholder: 'Select your Banxico activity',
    options: props.banxicoActivityOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        banxicoActivity: option,
      })),
  };

  const header: PageTitleSubtitleProps = {
    title: 'Give us\nyour info',
    subtitle: 'We just need to know some\ndetails about yourself.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <InputWrapper dropdownProps={countryOfBirthProps} inputType="dropdown" />
      {!state.countryOfBirth || state.countryOfBirth.value === 'mx' ? (
        <InputWrapper dropdownProps={placeOfBirthProps} inputType="dropdown" />
      ) : (
        <InputWrapper inputProps={fmNumberInputProps} />
      )}
      <InputWrapper dropdownProps={sexProps} inputType="dropdown" />
      <InputWrapper dropdownProps={martialStatusProps} inputType="dropdown" />
      <InputWrapper dropdownProps={educationProps} inputType="dropdown" />
      <InputWrapper dropdownProps={occupationProps} inputType="dropdown" />
      <InputWrapper dropdownProps={professionProps} inputType="dropdown" />
      <InputWrapper
        dropdownProps={economicActivityProps}
        inputType="dropdown"
      />
      <InputWrapper dropdownProps={banxicoActivityProps} inputType="dropdown" />
    </PageTemplateBottomDockedButtons>
  );
};
