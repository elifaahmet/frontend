/**@format */

import React from 'react';
import { ButtonProps } from '@tend/shared/design/ui-kit';
import {
  PageTemplateBottomDockedButtons,
  CheckboxNotification,
} from '@tend/lego/product-ui-kit';

export const ExternalBankTransferPostConfirmation: React.FC = (props) => {
  // TODO: pass click handlers for button props
  const buttonsProps: ButtonProps[] = [
    {
      children: 'set up direct deposit',
      overrideColor: 'primary-orange',
    },
    {
      children: 'next',
    },
  ];

  const pageTemplateProps = {
    buttonsProps,
    verticalAlignContentCenter: true,
    paddingTop: 52,
  };

  const title = (
    <>
      Want to get paid
      <br /> instantly?
    </>
  );
  const confirmationText = (
    <span>
      Direct Deposit allows your employer
      <br />
      to pay you instantly, 2-4 days faster
      <br />
      than with a check.
      <br />
      <br />
      Have a pre-filled form emailed back to
      <br />
      you. The paperwork’s all done.
    </span>
  );

  const checkboxNotificationProps = {
    title,
    text: confirmationText,
    centerAlignText: false,
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <CheckboxNotification {...checkboxNotificationProps} />
    </PageTemplateBottomDockedButtons>
  );
};

export default ExternalBankTransferPostConfirmation;
