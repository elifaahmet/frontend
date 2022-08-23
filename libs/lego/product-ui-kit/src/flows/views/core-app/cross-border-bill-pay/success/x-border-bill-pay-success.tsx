/**@format */
import React from 'react';

import {
  B1,
  InputStyleText,
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  Spacer,
  formatNumberToMoneyString,
} from '@tend/lego/product-ui-kit';
import { CheckIcon } from '@tend/shared/design/ui-kit';

import { TransactionSummary } from './x-border-bill-pay-success.styled';
import { XBorderBillPaySuccessProps } from './x-border-bill-pay-success.types';

export const XBorderBillPaySuccess: React.FC<XBorderBillPaySuccessProps> = (
  props
) => {
  const {
    amountDue,
    amountSending,
    recipient,
    referenceNumber,
    date,
    disclaimer,
    status = 'pending',
    onClickDone,
  } = props;

  const pageTemplateProps: PageTemplateBottomDockedButtonsProps = {
    buttonsProps: [
      {
        children: 'done',
        onClick: onClickDone,
      },
    ],
  };

  const Title: React.FC<Pick<XBorderBillPaySuccessProps, 'status'>> = ({
    status,
  }) => {
    if (status === 'success') {
      return (
        <InputStyleText variant="large">
          You've sent {formatNumberToMoneyString(amountSending)}
          <br />({formatNumberToMoneyString(amountDue)}
          <span className="currency">MXN</span>) to
          <br />
          {recipient}
          <br />
        </InputStyleText>
      );
    } else if (status === 'pending') {
      return (
        <InputStyleText variant="large">
          Your {formatNumberToMoneyString(amountSending)} (
          {formatNumberToMoneyString(amountDue)}
          <span className="currency">MXN</span>)
          <br />
          payment to {recipient} is pending.
          <br />
        </InputStyleText>
      );
    }
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateProps}>
      <Spacer top={16} bottom={16} />
      <TransactionSummary>
        <CheckIcon />
        <Spacer top={16} bottom={16} />
        <Title status={status} />
        <Spacer top={16} bottom={16} />
        <B1 bold>{date}</B1>
        <Spacer top={16} />
        <B1>Ref # {referenceNumber}</B1>
      </TransactionSummary>
      <Spacer top={16} bottom={8} />
      <B1 useOpacity>
        <span dangerouslySetInnerHTML={{ __html: disclaimer }} />
      </B1>
      <Spacer top={16} />
    </PageTemplateBottomDockedButtons>
  );
};

export default XBorderBillPaySuccess;
