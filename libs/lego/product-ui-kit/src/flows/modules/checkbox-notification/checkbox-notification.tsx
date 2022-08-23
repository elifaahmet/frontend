/**@format */

import React, { ReactNode } from 'react';
import { CheckIcon } from '@tend/shared/design/ui-kit';
import { B1, H3, Spacer } from '@tend/lego/product-ui-kit';
import { CheckIconWrapper, FlexWrapper } from './checkbox-notification.styled';

export interface CheckboxNotificationProps {
  title: ReactNode | string;
  text: ReactNode | string;
  paddingTop?: number;
  paddingBottom?: number;
  centerAlignText?: boolean;
}

export const CheckboxNotification: React.FC<CheckboxNotificationProps> = (
  props
) => {
  const { paddingTop, paddingBottom, centerAlignText } = props;

  const flexWrapperProps = { paddingTop, paddingBottom, centerAlignText };
  return (
    <FlexWrapper {...flexWrapperProps}>
      <CheckIconWrapper>
        <CheckIcon />
      </CheckIconWrapper>
      <Spacer top={16} bottom={16} />
      <H3>{props.title}</H3>
      <Spacer top={16} bottom={16} />
      <B1>{props.text}</B1>
    </FlexWrapper>
  );
};
CheckboxNotification.defaultProps = {
  paddingTop: 0,
  paddingBottom: 0,
  centerAlignText: true,
};

export default CheckboxNotification;
