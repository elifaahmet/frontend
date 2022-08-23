/**@format */

import React from 'react';
import { ButtonProps } from '@tend/shared/design/ui-kit';

import {
  ApplicationProgressEnum,
  ApplicationStatusEnum,
  B1,
  DynamicNotification,
  H1,
  H3,
  PageTemplateBottomDockedButtons,
  Spacer,
} from '@tend/lego/product-ui-kit';

export interface BankApplicationStatusProps {
  status: ApplicationStatusEnum;
  progress: ApplicationProgressEnum;
}

export const BankApplicationStatus: React.FC<BankApplicationStatusProps> = (
  props
) => {
  const isVerified = props.status === ApplicationStatusEnum.VERIFIED;
  const isDenied = props.status === ApplicationStatusEnum.DENIED;
  const isPending =
    [
      ApplicationStatusEnum.DOB_MANUAL,
      ApplicationStatusEnum.AUTOMATED,
    ].includes(props.status) ||
    props.progress === ApplicationProgressEnum.SecondaryDocumentUploaded;
  const currentStatus =
    (isVerified && 'verified') ||
    (isDenied && 'denied') ||
    (isPending && 'pending');
  const statusText = {
    verified: [
      'Congratulations!',
      'You’re Approved!!!',
      'Last Step. Time to fund your new account.',
    ],
    denied: [
      'Unfortunately...',
      "Your application can't be approved by the bank at this time.",
      'For further details, please contact Tend at (833)Tend-Hey',
    ],
    pending: [
      'A bit of a delay...',
      'Your application is being reviewed by our team and we will let you know when a decision has been made.',
      'For further details, please contact Tend at (833)Tend-Hey',
    ],
  };
  const buttonsProps: ButtonProps[] = [
    {
      children: isPending ? 'ok' : 'continue',
    },
  ];

  const pageTemplateProps = {
    buttonsProps,
  };

  const spacerComponent = { component: Spacer, top: 16, bottom: 16 };
  const statusComponents = [
    spacerComponent,
    {
      component: isVerified ? H3 : B1,
      children: statusText[currentStatus][0],
      ...(!isVerified && { bold: true }),
    },
    spacerComponent,
    {
      component: isVerified ? H3 : B1,
      children: statusText[currentStatus][1],
      ...(!isVerified && { bold: true }),
    },
    spacerComponent,
    {
      component: B1,
      children: statusText[currentStatus][2],
      bold: !isVerified,
    },
  ];

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <H1>
        APPLICATION
        <br />
        STATUS.
      </H1>
      <DynamicNotification
        paddingTop={52}
        marginLeft={52}
        marginRight={52}
        checkIcon={isVerified}
        componentList={statusComponents}
      />
    </PageTemplateBottomDockedButtons>
  );
};

export default BankApplicationStatus;
