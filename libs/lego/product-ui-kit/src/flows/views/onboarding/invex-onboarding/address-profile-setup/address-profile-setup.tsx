/**@format */

import React, { useState, ChangeEvent } from 'react';
import { InputProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  B2,
  DropdownProps,
  L1,
  InputWrapper,
  PageTitleSubtitleProps,
  PageTitleSubtitle,
} from '@tend/lego/product-ui-kit';
import {
  AddressProfileSetupProps,
  AddressProfileSetupState,
} from './address-profile-setup.types';

const StaticInput = ({ label, value }) => (
  <>
    <L1>{label.toUpperCase()}</L1>
    <Spacer bottom={8} />
    <B2>{value && value.toLocaleUpperCase()}</B2>
    <Spacer top={value ? 12 : 20} bottom={value ? 12 : 20} />
  </>
);

export const AddressProfileSetup: React.FC<AddressProfileSetupProps> = (
  props
) => {
  const [state, setState] = useState<AddressProfileSetupState>({
    addressType: null,
    propertyType: null,
    streetName: '',
    outdoorNumber: '',
    interiorNumber: '',
    postalCode: '',
    suburb: null,
    dateOfResidence: null,
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled: [
          state.streetName,
          state.outdoorNumber,
          state.postalCode,
          state.dateOfResidence,
          props.state,
          props.city,
          props.municipality,
        ].some((x) => !x),
      },
    ],
  };

  const getInputOnChangeHandler = (key: keyof AddressProfileSetupState) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const streetNameInputProps: InputProps = {
    type: 'text',
    name: 'street-name',
    label: 'street name',
    placeholder: 'Enter your street name',
    defaultValue: state.streetName,
    onChange: getInputOnChangeHandler('streetName'),
  };

  const outdoorNumberInputProps: InputProps = {
    type: 'text',
    name: 'outdoor-number',
    label: 'outdoor number',
    placeholder: 'Enter your outdoor number',
    defaultValue: state.outdoorNumber,
    onChange: getInputOnChangeHandler('outdoorNumber'),
  };

  const interiorNumberInputProps: InputProps = {
    type: 'text',
    name: 'interior-number',
    label: 'interior number',
    placeholder: 'Enter your interior number',
    defaultValue: state.interiorNumber,
    onChange: getInputOnChangeHandler('interiorNumber'),
  };

  const postalCodeInputProps: InputProps = {
    type: 'text',
    name: 'postal-code',
    label: 'postal code',
    placeholder: 'Enter your postal code',
    defaultValue: state.postalCode,
    onChange: getInputOnChangeHandler('postalCode'),
  };

  const dateOfResidenceInputProps: InputProps = {
    type: 'text',
    name: 'date-of-residence',
    label: 'date of residence',
    placeholder: 'DD/MM/YYYY',
    defaultValue: state.dateOfResidence,
    onChange: getInputOnChangeHandler('dateOfResidence'),
  };

  const addressTypeProps: DropdownProps = {
    label: 'ADDRESS TYPE',
    placeholder: 'Select your address type',
    options: props.addressTypeOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        addressType: option,
      })),
  };

  const propertyTypeProps: DropdownProps = {
    label: 'PROPERTY TYPE',
    placeholder: 'Select your property type',
    options: props.propertyTypeOptions,
    onChange: (option: { value: string; label: string }) => {
      setState((prevState) => ({
        ...prevState,
        propertyType: option,
      }));
    },
  };

  const suburbProps: DropdownProps = {
    label: 'SUBURB',
    placeholder: 'Select your suburb',
    options: props.suburbOptions,
    onChange: (option: { value: string; label: string }) => {
      setState((prevState) => ({
        ...prevState,
        suburb: option,
      }));
    },
  };

  const header: PageTitleSubtitleProps = {
    title: 'Set up your profile.',
    subtitle: 'We just need to check where you live.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <InputWrapper dropdownProps={addressTypeProps} inputType="dropdown" />
      <InputWrapper dropdownProps={propertyTypeProps} inputType="dropdown" />
      <InputWrapper
        isRequired={!state.streetName}
        inputProps={streetNameInputProps}
      />
      <InputWrapper
        isRequired={!state.outdoorNumber}
        inputProps={outdoorNumberInputProps}
      />
      <InputWrapper inputProps={interiorNumberInputProps} />
      <InputWrapper
        isRequired={!state.postalCode}
        inputProps={postalCodeInputProps}
      />
      <StaticInput label="state" value={props.state} />
      <StaticInput label="municipality" value={props.municipality} />
      <StaticInput label="city" value={props.city} />
      <InputWrapper dropdownProps={suburbProps} inputType="dropdown" />
      <InputWrapper
        isRequired={!state.dateOfResidence}
        inputProps={dateOfResidenceInputProps}
      />
    </PageTemplateBottomDockedButtons>
  );
};
