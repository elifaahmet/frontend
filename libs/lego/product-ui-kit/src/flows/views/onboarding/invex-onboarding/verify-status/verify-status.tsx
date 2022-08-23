/**@format */

import React, { ChangeEvent, useState } from 'react';
import {
  RadioButton,
  RadioButtonProps,
  Input,
  InputProps,
} from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  H1,
  B1,
  L1,
  Dropdown,
  InputAdornment,
  DropdownProps,
  PageTitleSubtitleProps,
  PageTitleSubtitle,
  InputWrapper,
} from '@tend/lego/product-ui-kit';
import { VerifyStatusProps, VerifyStatusState } from './verify-status.types';
import { isContinueDisabled } from './helpers';

export const VerifyStatus: React.FC<VerifyStatusProps> = (props) => {
  const [state, setState] = useState<VerifyStatusState>({
    applicantHoldsGovernmentPosition: null,
    relativeHoldsGovernmentPosition: null,
    applicant: {
      position: null,
      association: '',
    },
  });

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled: isContinueDisabled(state),
      },
    ],
  };

  const applicantHoldsGovernmentPositionRadioProps: RadioButtonProps = {
    labels: ['Yes, I do', "No, I don't"],
    radioGroupName: 'applicant-holds-government-position',
    selectedColor: 'primary-yellow',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        applicantHoldsGovernmentPosition: value === 'yes-i-do',
      }));
    },
  };

  const getInputOnChangeHandler = (
    user: 'applicant' | 'relative',
    key:
      | keyof VerifyStatusState['applicant']
      | keyof VerifyStatusState['relative']
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

  const applicantPositionProps: DropdownProps = {
    label: 'GOVERNMENT POSITION',
    placeholder: 'Select your position',
    options: props.governmentPositions,
    defaultValue: state.applicant.position,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        applicant: {
          ...prevState.applicant,
          position: option,
        },
      })),
  };

  const applicantAssociationProps: InputProps = {
    type: 'text',
    name: 'association',
    label: 'association',
    placeholder: 'Enter you association',
    defaultValue: state.applicant.association,
    onChange: getInputOnChangeHandler('applicant', 'association'),
  };

  const relativeHoldsGovernmentPositionRadioProps: RadioButtonProps = {
    labels: ['Yes, I do', "No, I don't"],
    radioGroupName: 'relative-holds-government-position',
    selectedColor: 'primary-yellow',
    onChange: (e) => {
      const { value } = e.target;
      setState((prevState) => ({
        ...prevState,
        relativeHoldsGovernmentPosition: value === 'yes-i-do',
      }));
    },
  };

  const firstNameInputProps: InputProps = {
    type: 'text',
    name: 'first-name',
    label: 'first name',
    placeholder: 'Enter their first name',
    defaultValue: state.relative?.firstName || '',
    onChange: getInputOnChangeHandler('relative', 'firstName'),
  };

  const secondNameInputProps: InputProps = {
    type: 'text',
    name: 'second-name',
    label: 'second name',
    placeholder: 'Enter their second name',
    defaultValue: state.relative?.secondName || '',
    onChange: getInputOnChangeHandler('relative', 'secondName'),
  };

  const paternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'paternal-last-name',
    label: 'paternal last name',
    placeholder: 'Enter their paternal last name',
    defaultValue: state.relative?.paternalLastName || '',
    onChange: getInputOnChangeHandler('relative', 'paternalLastName'),
  };

  const maternalLastNameInputProps: InputProps = {
    type: 'text',
    name: 'maternal-last-name',
    label: 'maternal last name',
    placeholder: 'Enter their maternal last name',
    defaultValue: state.relative?.maternalLastName || '',
    onChange: getInputOnChangeHandler('relative', 'maternalLastName'),
  };

  const relativePositionProps: DropdownProps = {
    label: 'POSITION',
    placeholder: 'Select your position',
    options: props.governmentPositions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        relative: {
          ...prevState.relative,
          position: option,
        },
      })),
  };

  const addressInputProps: InputProps = {
    type: 'text',
    name: 'address',
    label: 'home address',
    placeholder: 'Enter their home address',
    defaultValue: state.relative?.address || '',
    onChange: getInputOnChangeHandler('relative', 'address'),
  };

  const phoneInputProps: InputProps = {
    type: 'text',
    name: 'phone',
    label: 'phone number',
    placeholder: 'Enter their phone number',
    defaultValue: state.relative?.phone || '',
    onChange: getInputOnChangeHandler('relative', 'phone'),
  };

  const relativeContributionProps: DropdownProps = {
    label: 'PARTICIPATION %',
    placeholder: 'Select the % they contribute',
    options: props.relativeContributionOptions,
    onChange: (option: { label: string; value: string }) =>
      setState((prevState) => ({
        ...prevState,
        relative: {
          ...prevState.relative,
          participationPercent: option,
        },
      })),
  };

  const header: PageTitleSubtitleProps = {
    title: 'VERIFY\nYOUR STATUS.',
    subtitle: 'We just need to know if you hold a\nposition in the government.',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <PageTitleSubtitle {...header} />
      <B1>Do you hold a position in the government?</B1>
      <Spacer top={16} />
      <RadioButton {...applicantHoldsGovernmentPositionRadioProps} />
      <Spacer top={16} bottom={16} />
      {state.applicantHoldsGovernmentPosition && (
        <>
          <InputWrapper
            isRequired={!state.applicant || !state.applicant.position}
            dropdownProps={applicantPositionProps}
            inputType="dropdown"
          />
          <InputWrapper
            isRequired={!state.applicant || !state.applicant.association}
            inputProps={applicantAssociationProps}
          />
          <B1>
            Do you have a relative who holds a<br />
            position in the government?
          </B1>
          <Spacer top={16} bottom={16} />
          <RadioButton {...relativeHoldsGovernmentPositionRadioProps} />
          <Spacer top={16} bottom={16} />
          {state.relativeHoldsGovernmentPosition && (
            <>
              <InputWrapper
                isRequired={!state.relative || !state.relative.firstName}
                inputProps={firstNameInputProps}
              />
              <InputWrapper inputProps={secondNameInputProps} />
              <InputWrapper
                isRequired={!state.relative || !state.relative.paternalLastName}
                inputProps={paternalLastNameInputProps}
              />
              <InputWrapper inputProps={maternalLastNameInputProps} />
              <InputWrapper
                isRequired={!state.relative || !state.relative.position}
                dropdownProps={relativePositionProps}
                inputType="dropdown"
              />
              <InputWrapper
                isRequired={!state.relative || !state.relative.address}
                inputProps={addressInputProps}
              />
              <InputWrapper
                isRequired={!state.relative || !state.relative.phone}
                inputProps={phoneInputProps}
              />
              <InputWrapper
                isRequired={
                  !state.relative || !state.relative.participationPercent
                }
                dropdownProps={relativeContributionProps}
                inputType="dropdown"
              />
            </>
          )}
        </>
      )}
    </PageTemplateBottomDockedButtons>
  );
};

export default VerifyStatus;
