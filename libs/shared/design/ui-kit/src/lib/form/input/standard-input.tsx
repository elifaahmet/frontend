/** @format */
import React, { ChangeEvent, useEffect, useState } from 'react';

import { validationFunctionFromRegEx } from './helpers';
import {
  Adornment,
  HintsAndValidations,
  InputLabel,
  InputLabelPairContainer,
  InputWrapper,
  SingleMessageErrorOrValidation,
  StyledInput,
} from './input.styled';
import { HintsState, InputProps } from './input.types';

const StandardInput: React.FC<InputProps> = (props) => {
  const [typeState, setTypeState] = useState(props.type);
  const [hints, setHints] = useState<HintsState[]>([]);
  const [showHints, setShowHints] = useState(false);
  const [toggleErrorState, setToggleErrorState] = useState(props.error);

  const {
    type: typeProp,
    hintValidations,
    hintBackground,
    border,
    cursor,
    error,
    validated,
    errorOrValidationSubtext,
    name,
    label,
    variant,
    onChange,
    ...restProps
  } = props;

  useEffect(() => {
    setToggleErrorState(props.error);
  }, [props.error]);

  const allValidationsPassed =
    hints.reduce((acc, v, i) => {
      if (i === 0) acc = true;
      return acc && v.isValid;
    }, false) || validated;

  useEffect(() => {
    if (allValidationsPassed) setToggleErrorState(false);
  }, [allValidationsPassed]);

  const showHideClickHandler = () => {
    if (typeState === 'password') setTypeState('text');
    else setTypeState('password');
  };

  const standardInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedHints: HintsState[] = hintValidations.map(
      ({ validation, hint }): HintsState => ({
        isValid:
          typeof validation === 'function'
            ? validation(e)
            : validationFunctionFromRegEx(validation)(e),
        hint,
      })
    );
    setHints(updatedHints);
    setToggleErrorState(!!updatedHints.find((hint) => !hint.isValid));
    if (!showHints && hintValidations.length) setShowHints(true);
    onChange(e);
  };

  const standardInputProps = {
    type: typeState,
    typeProp,
    cursor,
    variant,
    validated: allValidationsPassed,
    error: error || toggleErrorState,
    name,
    onChange: standardInputOnChange,
    ...restProps,
  };

  return (
    <InputLabelPairContainer>
      {label && (
        <InputLabel error={error || toggleErrorState}>{label}</InputLabel>
      )}
      <InputWrapper>
        <StyledInput {...standardInputProps} />
        {(typeProp === 'password' ||
          name === 'amount-sending-usd' ||
          name === 'amount-received-mxn') && (
          <Adornment
            onClick={
              typeProp === 'password' ? showHideClickHandler : () => null
            }
            error={error || toggleErrorState}
            validated={allValidationsPassed}
            type={typeProp}
            name={name}
          >
            {/**@tech-debt: don't do this hacky #$%^, figure out a clean scalable way to do adornments*/}
            {typeProp === 'password'
              ? typeState === 'password'
                ? 'Show'
                : ' Hide'
              : ''}
            {name === 'amount-sending-usd' ? 'USD' : ''}
            {name === 'amount-received-mxn' ? 'MXN' : ''}
          </Adornment>
        )}
      </InputWrapper>
      {(error || validated) && errorOrValidationSubtext && (
        <SingleMessageErrorOrValidation error={error}>
          {errorOrValidationSubtext}
        </SingleMessageErrorOrValidation>
      )}
      {showHints && (
        <HintsAndValidations hintBackground={hintBackground}>
          {hints.map((obj: HintsState) => (
            <p
              key={obj.hint}
              className={obj.isValid ? 'hint-text' : 'hint-text error'}
            >
              <span
                className={
                  obj.isValid ? 'hint-checkbox' : 'hint-checkbox error'
                }
              />
              {obj.hint}
            </p>
          ))}
        </HintsAndValidations>
      )}
    </InputLabelPairContainer>
  );
};

export default StandardInput;
