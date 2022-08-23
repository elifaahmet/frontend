/** @format */
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import { copyTextFromClipboard } from '../../../utils/input-capture';
import { InputWrapper, StyledInput } from './input.styled';
import { InputProps, SingleDigitInputProps } from './input.types';

const SingleDigitInput: React.FC<InputProps> = (props) => {
  const [singleDigitInputValue, setSingleDigitInputValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [autoFocusDigitIndex, setAutoFocusDigitIndex] = useState(null);

  const {
    border,
    cursor,
    error,
    name,
    variant,
    captureSingleDigitInputValue,
    type,
    inputMode,
  } = props;

  useEffect(() => {
    if (autoFocusDigitIndex !== null) {
      const e = document.getElementById(`${name}-digit-${autoFocusDigitIndex}`);
      e.focus();
    }
  }, [autoFocusDigitIndex, name]);

  const allValidationsPassed = singleDigitInputValue.reduce((acc, v, i) => {
    if (i === 0) acc = true;
    return typeof v === 'number' && acc;
  }, false);

  const singleDigitOnChange = (index: number) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let newValue: null | number = null;

    if (!e.target?.value.length) newValue = null;
    else if (e.target?.value.length === 1)
      newValue = parseInt(e.target.value, 10);
    else newValue = singleDigitInputValue[index];

    if (!isNaN(newValue) && newValue !== null) {
      const updatedValues = [...singleDigitInputValue];
      updatedValues[index] = newValue;
      setSingleDigitInputValue(updatedValues);

      if (index < 5 && newValue !== null) setAutoFocusDigitIndex(index + 1);
      else setAutoFocusDigitIndex(null);

      captureSingleDigitInputValue(parseInt(updatedValues.join(''), 10));
    }
  };

  const singleDigitOnKeyPressUp = (index: number) => (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    const isInputBackspace = !!e.key.match(/backspace/i);
    const isCurrentDigitStateNull = singleDigitInputValue[index] === null;

    if (isInputBackspace && !isCurrentDigitStateNull) {
      const updatedValues = [...singleDigitInputValue];
      updatedValues[index] = null;
      setSingleDigitInputValue(updatedValues);
    } else if (isInputBackspace && index !== 0 && isCurrentDigitStateNull) {
      setAutoFocusDigitIndex(index - 1);
    }
  };

  const onPaste = async () => {
    const text = await copyTextFromClipboard();
    if (text) {
      const sanitizedText = text.replace(/\s/, '');
      if (sanitizedText.match(/^\d{6}$/)) {
        setSingleDigitInputValue(sanitizedText.split(''));
        setAutoFocusDigitIndex(5);
      }
    }
  };

  const getSingleDigitInputProps = (index: number): SingleDigitInputProps => ({
    name: `${name}-digit-${index}`,
    type,
    inputMode,
    validated: allValidationsPassed,
    variant,
    border,
    error,
    cursor,
    onChange: singleDigitOnChange(index),
    onKeyUp: singleDigitOnKeyPressUp(index),
    onPaste: onPaste,
    value:
      singleDigitInputValue[index] === null ? '' : singleDigitInputValue[index],
    key: `${name}-digit-${index}`,
    id: `${name}-digit-${index}`,
  });

  return (
    <InputWrapper>
      {singleDigitInputValue.map((value, index) => {
        const currentProps = getSingleDigitInputProps(index);
        return <StyledInput {...currentProps} autoFocus={index === 0} />;
      })}
    </InputWrapper>
  );
};

export default SingleDigitInput;
