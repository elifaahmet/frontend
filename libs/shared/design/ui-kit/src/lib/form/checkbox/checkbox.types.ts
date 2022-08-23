/**@format */

import React, { InputHTMLAttributes, ReactNode } from 'react';
import { ColorName } from '@tend/shared/design/tokens';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  defaultChecked?: boolean;
  alternateLabelStyle?: boolean;
  disabled?: boolean;
  checkboxColor?: ColorName;
  labelColor?: ColorName;
  uppercase?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxLabelProps
  extends Pick<
    CheckboxProps,
    'checkboxColor' | 'labelColor' | 'uppercase' | 'alternateLabelStyle'
  > {}
