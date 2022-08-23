/**@format */

import { ButtonProduct, Input } from '@tend/shared/design/ui-kit';
import {
  L2,
  Layout,
  Spacer,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import React, { useState } from 'react';
import {
  MIN_EIGHT_NON_SPACE_CHARACTERS,
  ONE_LOWER_CASE,
  ONE_NUMBER,
  ONE_SPECIAL_CHARACTER,
  ONE_UPPER_CASE,
} from '../helper/helper';
import {
  ButtonWrapper,
  EmailInputWrapper,
  FlexContainer,
  PasswordInputWrapper,
  RepeatPasswordInputWrapper,
} from './secure-login-view.styled';

export const SecureLoginView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const isPasswordCorrect = () =>
    passwordValidations.every((value) => password.match(value.validation));
  const isErrorState = () => {
    return !(
      email !== '' &&
      isPasswordCorrect() &&
      password === repeatPassword &&
      password !== ''
    );
  };
  const header: PageTitleSubtitleProps = {
    title: 'Lock Things Up.',
    subtitle: 'Secure your account with your own super secret password.',
  };

  const passwordValidations = [
    { hint: 'Include one Upper Case', validation: ONE_UPPER_CASE },
    { hint: 'Include one Lower Case', validation: ONE_LOWER_CASE },
    { hint: 'Include one Number', validation: ONE_NUMBER },
    {
      hint: 'Include one Special Character',
      validation: ONE_SPECIAL_CHARACTER,
    },
    {
      hint: 'Include 8 or more characters',
      validation: MIN_EIGHT_NON_SPACE_CHARACTERS,
    },
  ];

  return (
    <Layout>
      <FlexContainer>
        <PageTitleSubtitle {...header} />
        <EmailInputWrapper>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            label="email"
            error={false}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            label="password"
            error={false}
            hintValidations={passwordValidations}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </PasswordInputWrapper>
        <RepeatPasswordInputWrapper>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            label="Repeat password"
            error={false}
            validated={password === repeatPassword && password !== ''}
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></Input>
        </RepeatPasswordInputWrapper>
        <ButtonWrapper>
          <L2 color={'opacity-white-medium'}>
            By creating an account, I agree to receive all disclosures and
            communications from Tend as described in the Electronic
            Communications section.
          </L2>
          <Spacer top={12}>
            <ButtonProduct disabled={isErrorState()}>
              Create My Account
            </ButtonProduct>
          </Spacer>
        </ButtonWrapper>
      </FlexContainer>
    </Layout>
  );
};
