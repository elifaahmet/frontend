/**@format */
import React, { ChangeEvent, useState } from 'react';

import {
  B1,
  DropdownProps,
  InputWrapper,
  L2,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
  Spacer,
} from '@tend/lego/product-ui-kit';
import {
  InputProps,
  RadioButton,
  RadioButtonProps,
} from '@tend/shared/design/ui-kit';

import {
  BankValidationProps,
  BankValidationState,
} from './bank-validation.types';

export const BankValidationView: React.FC<BankValidationProps> = (props) => {
  const [state, setState] = useState<BankValidationState>({
    member: {
      dob: '',
      ssn: '',
      idType: null,
      issuer: null,
      idNumber: '',
      memberType: '',
    },
    dependent: {
      firstName: '',
      lastName: '',
      ssn: '',
      dob: '',
    },
  });
  const [isIssuerNeeded, setIssuerNeeded] = useState(false);
  const [isDependent, setIsDependent] = useState(false);

  const checkIfDisabled = () => {
    const minimumReq =
      !state.member ||
      (isIssuerNeeded && !state.member.issuer) ||
      [
        state.member.ssn,
        state.member.idNumber,
        state.member.idType,
        state.member.memberType,
      ].some((x) => !x);

    let dependentReq = true;
    if (isDependent) {
      dependentReq =
        !state.dependent ||
        [
          state.dependent.firstName,
          state.dependent.lastName,
          state.dependent.ssn,
          state.dependent.dob,
        ].some((x) => !x);
    }
    return minimumReq && dependentReq;
  };

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled: checkIfDisabled(),
      },
    ],
  };

  const getInputOnChangeHandler = (
    user: 'member' | 'dependent',
    key:
      | keyof BankValidationState['member']
      | keyof BankValidationState['dependent']
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [user]: {
        ...prevState[user],
        [key]: value,
      },
    }));
  };

  const dobInputProps: InputProps = {
    type: 'text',
    name: 'dob',
    label: 'Date of Birth',
    placeholder: 'MM/DD/YYYY',
    defaultValue: state.member.dob,
    onChange: getInputOnChangeHandler('member', 'dob'),
  };

  const ssnInputProps: InputProps = {
    type: 'text',
    name: 'ssn',
    label: 'Social Security Number',
    placeholder: 'Enter your SSN',
    defaultValue: state.member.ssn,
    onChange: getInputOnChangeHandler('member', 'ssn'),
  };

  const identificationProps: DropdownProps = {
    label: 'IDENTIFICATION TYPE',
    placeholder: 'Choose your identification',
    options: props.idTypeOptions,
    onChange: (option: { value: string; label: string }) => {
      setState((prevState) => ({
        ...prevState,
        member: {
          ...prevState.member,
          idType: option,
        },
      }));
      if (option.value === 'dl' || option.value === 'sid') {
        setIssuerNeeded(true);
      }
    },
  };

  const issuerProps: DropdownProps = {
    label: 'ISSUER',
    placeholder: 'Select the issuer',
    options: props.issuerOptions,
    onChange: (option: { value: string; label: string }) => {
      setState((prevState) => ({
        ...prevState,
        member: {
          ...prevState.member,
          issuer: option,
        },
      }));
    },
  };

  const idNumberInputProps: InputProps = {
    type: 'text',
    name: 'idNumber',
    label: 'Identification number',
    placeholder: 'Enter your identification number',
    defaultValue: state.member.idNumber,
    onChange: getInputOnChangeHandler('member', 'ssn'),
  };

  const dependentDobInputProps: InputProps = {
    type: 'text',
    name: 'depDob',
    label: 'Date of Birth',
    placeholder: 'MM/DD/YYYY',
    defaultValue: state.dependent.dob,
    onChange: getInputOnChangeHandler('dependent', 'dob'),
  };

  const dependentSsnInputProps: InputProps = {
    type: 'text',
    name: 'depSsn',
    label: 'Social Security Number',
    placeholder: 'Enter their Social Security Number',
    defaultValue: state.dependent.ssn,
    onChange: getInputOnChangeHandler('dependent', 'ssn'),
  };

  const dependentFirstNameInputProps: InputProps = {
    type: 'text',
    name: 'depFirstName',
    label: 'First Name',
    placeholder: 'Enter their first name',
    defaultValue: state.dependent.firstName,
    onChange: getInputOnChangeHandler('dependent', 'firstName'),
  };

  const dependentLastNameInputProps: InputProps = {
    type: 'text',
    name: 'depLastName',
    label: 'Last Name',
    placeholder: 'Enter their last name',
    defaultValue: state.dependent.lastName,
    onChange: getInputOnChangeHandler('dependent', 'lastName'),
  };

  const dependentSelectionProps: RadioButtonProps = {
    labels: ['Member', 'Dependant', 'Neither'],
    radioGroupName: 'dependent-source',
    selectedColor: 'primary-yellow',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        member: {
          ...prevState.member,
          memberType: value,
        },
      }));
      if (value === 'Dependant') {
        setIsDependent(true);
      }
    },
  };

  const header: PageTitleSubtitleProps = {
    title: 'Give us your deets.',
    subtitle: 'We just need to make sure you are who you say you are.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <InputWrapper
        isRequired={!state.member || !state.member.dob}
        inputProps={dobInputProps}
      />
      <InputWrapper
        isRequired={!state.member || !state.member.ssn}
        inputProps={ssnInputProps}
      />
      <InputWrapper
        isRequired={!state.member || !state.member.idType}
        dropdownProps={identificationProps}
        inputType="dropdown"
      />
      <InputWrapper
        isRequired={!state.member || !state.member.idNumber}
        inputProps={idNumberInputProps}
      />
      {isIssuerNeeded && (
        <InputWrapper
          isRequired={!state.member || !state.member.issuer}
          dropdownProps={issuerProps}
          inputType="dropdown"
        />
      )}
      <B1 bold>
        Are you a member, or dependent, of a member of the U.S. Armed forces?
      </B1>
      <Spacer top={9}>
        <L2>
          Army, Navy, Marine Corps, Air Force, or Coast guard, serving on active
          duty under a call or order that does not specify a period of 30 days
          or fewer or on active Guard and Reserve duty (generally for a period
          of 180 consecutive days or more).
        </L2>
      </Spacer>
      <Spacer top={16} />
      <RadioButton {...dependentSelectionProps} />
      <Spacer top={16} bottom={16} />
      {isDependent && (
        <>
          <InputWrapper
            isRequired={!state.dependent || !state.dependent.firstName}
            inputProps={dependentFirstNameInputProps}
          />
          <InputWrapper
            isRequired={!state.dependent || !state.dependent.lastName}
            inputProps={dependentLastNameInputProps}
          />
          <InputWrapper
            isRequired={!state.dependent || !state.dependent.ssn}
            inputProps={dependentSsnInputProps}
          />
          <InputWrapper
            isRequired={!state.dependent || !state.dependent.dob}
            inputProps={dependentDobInputProps}
          />
        </>
      )}
    </PageTemplateBottomDockedButtons>
  );
};
