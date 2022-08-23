/**@format */

import React from 'react';
import { Input, Checkbox, ButtonProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  H1,
  B1,
  L1,
  Spacer,
} from '@tend/lego/product-ui-kit';
import { StyledOL, CheckboxWrapper } from './nbkc-direct-deposit.styled';

export const NBKCDirectDeposit: React.FC = () => {
  const checkboxText =
    "I agree to receive via email a Direct Deposit form which includes my Employer's Name, my Bank Account Number and Routing Number";
  const buttonsProps: ButtonProps[] = [
    {
      children: 'get form',
    },
  ];

  return (
    <PageTemplateBottomDockedButtons buttonsProps={buttonsProps}>
      <H1>
        DIRECT
        <br /> DEPOSIT.
      </H1>
      <Spacer top={16} />
      <B1>
        Get a Tend Share, plus a cash bonus and
        <br /> your paycheck 2 - 4 days faster. We email
        <br /> you a simple form to signup.
      </B1>
      <Spacer top={16} bottom={16} />
      <L1>HERE'S HOW IT WORKS:</L1>
      <B1>
        <StyledOL>
          <li>
            Enter your employer and agree to receive information via email.
          </li>
          <li>We email you a pre-filled form</li>
          <li>Give the form to your HR people.</li>
          <li>Sit back and wait for your first paycheck.</li>
        </StyledOL>
      </B1>
      <Spacer top={16} bottom={16} />
      <Input
        name="employer-name"
        onChange={() => null}
        type="text"
        label="EMPLOYER NAME"
        placeholder="Enter your employer name"
      />
      <Spacer top={16} bottom={16}>
        <CheckboxWrapper>
          <Checkbox name="agreement" />
          <Spacer left={8}>
            <B1>{checkboxText}</B1>
          </Spacer>
        </CheckboxWrapper>
      </Spacer>
    </PageTemplateBottomDockedButtons>
  );
};
