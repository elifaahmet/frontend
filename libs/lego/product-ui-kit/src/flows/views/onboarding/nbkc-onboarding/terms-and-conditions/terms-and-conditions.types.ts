/**@format */
import { MouseEventHandler } from 'react';

interface link {
  text: string;
  link: string;
}

export interface TermsAndConditionsProps {
  nbkcLinks: link[];
  tendLinks: link[];
  currencyCloudLinks: link[];
  agreementOnClick: MouseEventHandler<HTMLButtonElement> | (() => void);
  additionalCheckBoxLinks: {
    tendTerms: string;
    tendPrivacyPolicy: string;
    dwollaTerms: string;
    dwollaPrivacyPolicy: string;
  };
}

export interface TermsAndConditionsState {
  experianCreditScore: boolean;
  termsAndConditions: boolean;
}
