/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  TermsAndConditions,
  TermsAndConditionsProps,
} from './terms-and-conditions';

export default {
  component: TermsAndConditions,
  title: 'Flows/Views/Onboarding/nbkc/TermsAndConditions',
} as Meta;

const Template: Story<TermsAndConditionsProps> = (args) => (
  <TermsAndConditions {...args} />
);

export const defaultView = Template.bind({});
defaultView.args = {
  nbkcLinks: [
    {
      text:
        'nokc bank - CONSUMER DEPOSIT ACCOUNT AGREEMENT - Tend - NEW CUSTOMERS Effective October 1',
      link: 'https://www.google.com',
    },
    {
      text: 'nbkc bank Privacy Policy',
      link: 'https://www.google.com',
    },
  ],
  tendLinks: [
    {
      text: 'Tend CCPA Privacy Supplement',
      link: 'https://www.google.com',
    },
    {
      text: 'Tend Privacy Notice',
      link: 'https://www.google.com',
    },
    {
      text: 'Tend Privacy Policy',
      link: 'https://www.google.com',
    },
    {
      text: 'Tend Terms & Conditions',
      link: 'https://www.google.com',
    },
    {
      text: 'Tend Rate & Fee Schedule',
      link: 'https://www.google.com',
    },
  ],
  currencyCloudLinks: [
    {
      text: 'Currency Cloud Terms of Use (UK-Ltd)',
      link: 'https://www.google.com',
    },
    {
      text: 'Currency Cloud Terms of Use (CFSB-Inc)',
      link: 'https://www.google.com',
    },
    {
      text: 'Currency Cloud Terms of Use (US-Inc)',
      link: 'https://www.google.com',
    },
  ],
  agreementOnClick: () => null,
  additionalCheckBoxLinks: {
    tendTerms: 'https://www.google.com',
    tendPrivacyPolicy: 'https://www.google.com',
    dwollaTerms: 'https://www.google.com',
    dwollaPrivacyPolicy: 'https://www.google.com',
  },
};
