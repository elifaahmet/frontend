/**@format */
import React, { useState } from 'react';

import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteResultsType,
  InputWrapper,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import { InputProps } from '@tend/shared/design/ui-kit';

interface ProfileState {
  firstName: string;
  lastName: string;
  address: string;
}

export interface ProfileProps {
  onUserType: (userInput: string) => Promise<AutocompleteResultsType>;
}

export const Profile: React.FC<ProfileProps> = (props) => {
  const [state, setState] = useState<ProfileState>({
    firstName: '',
    lastName: '',
    address: '',
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'create profile',
        disabled: !state.firstName || !state.lastName || !state.address,
      },
    ],
  };

  const firstNameInputProps: InputProps = {
    type: 'text',
    name: 'first-name',
    label: 'first name',
    placeholder: 'Enter your first name',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        firstName: value,
      }));
    },
  };

  const lastNameInputProps: InputProps = {
    type: 'text',
    name: 'last-name',
    label: 'last name',
    placeholder: 'Enter your last name',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        lastName: value,
      }));
    },
  };

  const autocompleteAddressProps: AutocompleteProps = {
    onUserType: props.onUserType,
    placeholder: 'Enter your address',
    autocompleteLabel: 'residential address',
    required: !state.address,
    noOptionsMessage: () => null,
    onChange: (option: { value: string; label: string }) => {
      const { value } = option;
      setState((prevState) => ({
        ...prevState,
        address: value,
      }));
    },
  };

  const header: PageTitleSubtitleProps = {
    title: 'Fill in the blanks.',
    subtitle:
      'What’s your name? Where do you live? What time should we come over? Just kidding...',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <InputWrapper
        isRequired={!state.firstName}
        inputProps={firstNameInputProps}
      />
      <InputWrapper
        isRequired={!state.lastName}
        inputProps={lastNameInputProps}
      />
      <Autocomplete {...autocompleteAddressProps} />
    </PageTemplateBottomDockedButtons>
  );
};
