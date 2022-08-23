
import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import {
  ColorName
} from '@tend/shared/design/tokens';

export interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  toggleColor?: ColorName;
  labelColor?: ColorName;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface ToggleSwitchLabelProps {
  toggleColor?: ColorName;
  labelColor?: ColorName;
}


const StyledToggleSwitch = styled.label<ToggleSwitchLabelProps>`
  display: inline-block;
  position: relative;
  padding-inline-start: 55px;
  height: ${props => `${props.theme.__fontSize(24)}px`};
  color: ${(props) => props.theme.color[props.labelColor]};
  font-size: ${props => `${props.theme.__fontSize(14)}px`};
  font-weight: ${props => props.theme.fontWeight['bold']};
  line-height: ${props => `${props.theme.__fontSize(18)}px`};
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  & > input ~ span {
    background-color: ${(props) => props.theme.color['neutral-gray']};
  }
  & > input:checked ~ span {
    background-color: ${(props) => props.theme.color[props.toggleColor]};
    &:before {
      transform: translateX(19px);
    }
  }
  & > input:focus-visible ~ span {
    outline: 0.5px auto -webkit-focus-ring-color;
  }
  & > input:disabled ~ span {
    cursor: not-allowed;
  }
`;

const StyledToggleSwitchInput = styled.input<ToggleSwitchProps>`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: auto;
`;

const StyledToggleSwitchSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 44px;
  border-radius: ${props => `${props.theme.__spacer(16)}px`};
  transition: .4s;
  pointer-events: auto;
  cursor: pointer;
  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 1px;
    bottom: 1px;
    background-color: ${(props) => props.theme.color['neutral-off-white']};
    transition: .4s;
    border-radius: 50%;
  }
 `
;

export function ToggleSwitch(props: ToggleSwitchProps) {
  return (
    <StyledToggleSwitch toggleColor={props.toggleColor} labelColor={props.labelColor}>
      {props.label}
      <StyledToggleSwitchInput type="checkbox" {...props} />
      <StyledToggleSwitchSpan></StyledToggleSwitchSpan>
    </StyledToggleSwitch>
  );
}

ToggleSwitch.defaultProps = {
  toggleColor: 'primary-yellow',
  labelColor: 'neutral-black',
  defaultChecked: false,
};

export default ToggleSwitch;
