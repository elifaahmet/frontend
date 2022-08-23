/** @format */

import React, { InputHTMLAttributes, ChangeEventHandler } from 'react';
import styled from '@emotion/styled';
import { ColorName } from '@tend/shared/design/tokens';
import { RadioButtonsWrapper } from './radio-button.styled';

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labels: [string, string] | [string, string, string];
  selectedColor?: ColorName;
  radioGroupName: string;
  defaultCheckedIndex?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const StyledRadioButton = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <RadioButtonsWrapper {...props}>
      {props.labels.map((label, index) => {
        const normalizedLabel = label
          .toLocaleLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-zA-Z\-\d:]/g, '');
        return (
          <React.Fragment key={`${index}-${normalizedLabel}`}>
            <StyledRadioButton
              type="radio"
              id={`${index}-${props.radioGroupName}-${normalizedLabel}`}
              name={props.radioGroupName}
              defaultChecked={index === props.defaultCheckedIndex}
              value={normalizedLabel}
              onChange={props.onChange}
            />
            <label
              htmlFor={`${index}-${props.radioGroupName}-${normalizedLabel}`}
            >
              {label}
            </label>
          </React.Fragment>
        );
      })}
    </RadioButtonsWrapper>
  );
};

RadioButton.defaultProps = {
  selectedColor: null,
};

export default RadioButton;
