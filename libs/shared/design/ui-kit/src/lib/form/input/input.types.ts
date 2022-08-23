/** @format */
import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import { ColorName } from '@tend/shared/design/tokens';

import { PRIMARY, SECONDARY, TERTIARY } from '../../../constants';
import { ExtendedTheme } from '../../../theme/extended-theme';

export type InputVariant =
  | 'default'
  | 'large'
  | 'single-digit'
  | 'email-invite'
  | 'boxed';

export interface HintValidation {
  hint: string;
  validation: RegExp | ((e: ChangeEvent<HTMLInputElement>) => boolean);
}

export interface CreateHintValidationArgs {
  hint: string;
  regEx: RegExp;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  validated?: boolean;
  errorOrValidationSubtext?: string;
  hintValidations?: HintValidation[];
  hintBackground?: 'transparent' | ColorName;
  label?: string;
  variant?: InputVariant;
  captureSingleDigitInputValue?: (value: number) => void;
  captureEmailInvites?: (email: string[]) => void;
  border?: typeof PRIMARY | typeof SECONDARY | 'none';
  cursor?: typeof PRIMARY | typeof SECONDARY | typeof TERTIARY;
}

export interface StyledInputProps
  extends Pick<
    InputProps,
    'type' | 'variant' | 'validated' | 'error' | 'border' | 'cursor'
  > {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => void);
}

export interface SingleDigitInputProps extends InputProps {
  key: string;
  id: string;
}

export interface AdornmentProps
  extends Pick<InputProps, 'border' | 'error' | 'validated' | 'type'> {
  onClick: () => void;
  name?: string;
}

export interface HintContainerProps {
  hintBackground: 'transparent' | ColorName;
  theme?: ExtendedTheme;
}

export interface HintsState {
  isValid: boolean;
  hint: string;
}

export interface SingleMessageErrorOrValidationProps {
  error: boolean;
}
