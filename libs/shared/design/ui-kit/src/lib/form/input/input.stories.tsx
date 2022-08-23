/** @format */
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SECONDARY, TERTIARY } from '../../../constants';
import { UIKitContext } from '../../../utils/transformations';
import { passwordValidations } from './helpers';
import Input from './input';
import { InputProps, InputVariant } from './input.types';

const Wrapper = styled.div<{ variant: InputVariant }>`
  background-color: ${(props) =>
    props.theme.kitContext === UIKitContext.marketing
      ? props.theme.color['neutral-white']
      : props.theme.color['secondary-green']};
  padding: 16px;
  ${(props) => (props.variant === 'single-digit' ? 'width: 376px;' : '')}
  max-width: ${(props) => props.theme.breakpoint.small}px;
`;

export default {
  component: Input,
  title: 'Form/Elements/Input',
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Wrapper variant={args.variant}>
    <Input {...args} />
  </Wrapper>
);

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
export const text = Template.bind({});
text.args = {
  type: 'text',
  name: 'text',
  placeholder: 'First Name',
  error: false,
  required: true,
  // @ts-ignore
  onChange: () => {},
};

export const email = Template.bind({});
email.args = {
  type: 'email',
  name: 'email',
  placeholder: 'Enter your email',
  error: false,
  errorOrValidationSubtext: 'Please enter a valid email.',
  // @ts-ignore
  onChange: () => {},
};

export const passwordNoLabel = Template.bind({});
passwordNoLabel.args = {
  type: 'password',
  name: 'password',
  placeholder: 'Enter your password',
  error: false,
  // @ts-ignore
  onChange: () => {},
};

export const passwordWithLabel = Template.bind({});
passwordWithLabel.args = {
  type: 'password',
  name: 'password',
  label: 'password',
  placeholder: 'Enter your password',
  error: false,
  // @ts-ignore
  onChange: () => {},
};

export const passwordCreateWithLabel = Template.bind({});
passwordCreateWithLabel.args = {
  type: 'password',
  name: 'password',
  label: 'password',
  placeholder: 'Enter your password',
  error: false,
  hintValidations: passwordValidations,
  // @ts-ignore
  onChange: () => {},
};

export const emailInvite = Template.bind({});
emailInvite.args = {
  type: 'email',
  name: 'email',
  variant: 'email-invite',
  placeholder: 'Enter email',
  error: false,
  errorOrValidationSubtext: 'Already a member of Tend',
  // @ts-ignore
  onChange: () => {},
  // eslint-disable-next-line no-console
  captureEmailInvites: (emails) => console.log(emails),
};

export const singleDigitInput = Template.bind({});
singleDigitInput.args = {
  type: 'number',
  name: 'digit',
  placeholder: '0',
  error: false,
  variant: 'single-digit',
  // @ts-ignore
  onChange: () => {},
};

export const singleDigitInputSecondaryBorder = Template.bind({});
singleDigitInputSecondaryBorder.args = {
  type: 'number',
  name: 'digit',
  placeholder: '0',
  variant: 'single-digit',
  error: false,
  border: SECONDARY,
  // @ts-ignore
  onChange: () => {},
};

export const large = Template.bind({});
large.args = {
  type: 'text',
  name: 'money',
  placeholder: '$0.00',
  error: false,
  variant: 'large',
  // @ts-ignore
  onChange: () => {},
};

export const largeWithSecondaryCursor = Template.bind({});
largeWithSecondaryCursor.args = {
  type: 'text',
  name: 'money',
  placeholder: '$0.00',
  error: false,
  variant: 'large',
  cursor: SECONDARY,
  // @ts-ignore
  onChange: () => {},
};

export const largeWithTertiaryCursor = Template.bind({});
largeWithTertiaryCursor.args = {
  type: 'text',
  name: 'money',
  placeholder: '$0.00',
  error: false,
  variant: 'large',
  cursor: TERTIARY,
  // @ts-ignore
  onChange: () => {},
};

export const boxedWithLabel = Template.bind({});
boxedWithLabel.args = {
  type: 'text',
  name: 'boxed-text',
  placeholder: 'TendID, email, or mobile',
  error: false,
  variant: 'boxed',
  label: 'send money to',
  // @ts-ignore
  onChange: () => {},
};

export const boxedNoLabel = Template.bind({});
boxedNoLabel.args = {
  type: 'text',
  name: 'boxed-text',
  placeholder: 'Search',
  error: false,
  variant: 'boxed',
  // @ts-ignore
  onChange: () => {},
};
