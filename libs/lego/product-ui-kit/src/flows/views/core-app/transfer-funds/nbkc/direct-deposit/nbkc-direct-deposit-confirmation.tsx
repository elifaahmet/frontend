/**@format */

import React from 'react';
import { ButtonProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  CheckboxNotification,
} from '@tend/lego/product-ui-kit';

export interface NBKCDirectDepositConfirmationProps {
  source?: 'default' | 'complete' | 'hr' | 'plaid';
}

export const NBKCDirectDepositConfirmation: React.FC<NBKCDirectDepositConfirmationProps> = (
  props
) => {
  // TODO: pass click handlers for button props
  const buttonsProps: ButtonProps[] = [
    {
      children: 'next',
    },
  ];
  if (props.source === 'plaid' || props.source === 'complete')
    buttonsProps.unshift({
      children: "let's fund!",
      overrideColor: 'primary-orange',
    });

  let confirmationText;

  switch (props.source) {
    case 'complete':
      confirmationText = 'Your direct deposit is all set up!';
      break;
    case 'hr':
      confirmationText =
        'Your company HR was emailed a direct deposit form.   They’ll get you set up!.';
      break;
    case 'plaid':
    default:
      confirmationText =
        'Please check your email for the direct deposit form.  Once you’ve checked all the information is correct, hand it to your employer – they’ll do the rest.';
  }

  const pageTemplateProps = {
    buttonsProps,
    verticalAlignContentCenter: true,
  };

  let paddingTop;
  switch (props.source) {
    case 'plaid':
      paddingTop = 54;
      break;
    case 'complete':
      paddingTop = 2;
      break;
    default:
      paddingTop = 0;
  }

  const checkboxNotificationProps = {
    title: 'Thank You!',
    text: confirmationText,
    paddingTop,
    paddingBottom: props.source === 'hr' ? 34 : 0,
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <CheckboxNotification {...checkboxNotificationProps} />
    </PageTemplateBottomDockedButtons>
  );
};

NBKCDirectDepositConfirmation.defaultProps = {
  source: 'default',
};

export default NBKCDirectDepositConfirmation;
