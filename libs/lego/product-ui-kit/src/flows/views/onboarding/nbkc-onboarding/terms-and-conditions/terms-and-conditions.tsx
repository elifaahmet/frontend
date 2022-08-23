/**@format */
import { useTheme } from '@emotion/react';
import React, { useState } from 'react';

import {
  B1,
  H1,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Separator,
  Spacer,
} from '@tend/lego/product-ui-kit';
import { Anchor, Checkbox, CheckboxProps } from '@tend/shared/design/ui-kit';

import {
  TermsAndConditionsProps,
  TermsAndConditionsState,
} from './terms-and-conditions.types';

export type { TermsAndConditionsProps } from './terms-and-conditions.types';

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = (
  props
) => {
  const [state, setState] = useState<TermsAndConditionsState>({
    experianCreditScore: false,
    termsAndConditions: false,
  });
  const theme = useTheme();

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'I Agree',
        disabled: !state.experianCreditScore || !state.termsAndConditions,
        onClick: props.agreementOnClick,
      },
    ],
  };

  const experianCreditScoreCheckboxProps: CheckboxProps = {
    label: 'Get my credit score from Experian',
    labelColor: 'neutral-off-white',
    alternateLabelStyle: true,
    onChange: (e) => {
      const { checked } = e.target;

      setState((prevState) => ({
        ...prevState,
        experianCreditScore: checked,
      }));
    },
  };

  const termsAndConditionsCheckboxProps: CheckboxProps = {
    label: (
      <>
        By checking this box you agree to our{' '}
        <Anchor
          color={theme.colorSchemeConfig.secondary.text}
          href={props.additionalCheckBoxLinks.tendTerms}
        >
          Terms and Conditions
        </Anchor>
        , our{' '}
        <Anchor
          color={theme.colorSchemeConfig.secondary.text}
          href={props.additionalCheckBoxLinks.tendPrivacyPolicy}
        >
          Privacy Policy
        </Anchor>
        , and our partner{' '}
        <Anchor
          color={theme.colorSchemeConfig.secondary.text}
          href={props.additionalCheckBoxLinks.dwollaTerms}
        >
          Dwolla's Terms of Service
        </Anchor>{' '}
        and{' '}
        <Anchor
          color={theme.colorSchemeConfig.secondary.text}
          href={props.additionalCheckBoxLinks.dwollaPrivacyPolicy}
        >
          Privacy Policy
        </Anchor>
        .
      </>
    ),
    labelColor: 'neutral-off-white',
    alternateLabelStyle: true,
    onChange: (e) => {
      const { checked } = e.target;

      setState((prevState) => ({
        ...prevState,
        termsAndConditions: checked,
      }));
    },
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <H1>
        AGREE TO
        <br />
        THE TERMS.
      </H1>
      <Spacer top={16} />
      <B1>
        Before making things official, let's make sure you're up to speed on
        what creating a Tend account entails. By tapping 'I Agree,' you're
        acknowledging you've read and agreed to Tend's below terms and are ready
        to get your debit card.
      </B1>
      <Spacer top={16} bottom={16} />
      {props.nbkcLinks.map(({ text, link }) => (
        <Anchor color={theme.colorSchemeConfig.secondary.text} href={link}>
          {text}
        </Anchor>
      ))}
      <Spacer top={16} />
      <Separator color="primary-yellow" contained={true} />
      <Spacer top={16} bottom={16} />
      <B1>I have read and agree to these additional terms from Tend:</B1>
      <Spacer top={16} bottom={16} />
      {props.tendLinks.map(({ text, link }) => (
        <Anchor color={theme.colorSchemeConfig.secondary.text} href={link}>
          {text}
        </Anchor>
      ))}
      <Spacer top={16} bottom={16} />
      {props.currencyCloudLinks.map(({ text, link }) => (
        <Anchor color={theme.colorSchemeConfig.secondary.text} href={link}>
          {text}
        </Anchor>
      ))}
      <Spacer top={16} />
      <Separator color="primary-yellow" contained={true} />
      <Spacer top={16} bottom={16} />
      <B1>
        Tend charges a $9.95 monthly subscription fee that can be easily offset
        by taking advantage of available rewards.
      </B1>
      <Spacer top={16} bottom={16} />
      <Checkbox {...experianCreditScoreCheckboxProps} />
      <Spacer top={16} />
      <Checkbox {...termsAndConditionsCheckboxProps} />
      <Spacer top={16} />
    </PageTemplateBottomDockedButtons>
  );
};

export default TermsAndConditions;
