/**@format */

import React, { ReactNode, ComponentType } from 'react';
import { CheckIcon } from '@tend/shared/design/ui-kit';
import { CheckIconWrapper, FlexWrapper } from './dynamic-notification.styled';

export interface DynamicNotificationProps {
  componentList: Component[];
  checkIcon?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  centerAlignText?: boolean;
}

export interface Component {
  component: ComponentType | string;
  children?: ReactNode | string;
}

export const DynamicNotification: React.FC<DynamicNotificationProps> = (
  props
) => {
  const { componentList, checkIcon, ...flexWrapperProps } = props;
  return (
    <FlexWrapper {...flexWrapperProps}>
      {checkIcon && (
        <CheckIconWrapper>
          <CheckIcon />
        </CheckIconWrapper>
      )}
      {componentList.map((comp, i) => {
        const { component, ...compProps } = comp;
        return React.createElement(component, {
          key: `dynamic-${i}`,
          ...compProps,
        });
      })}
    </FlexWrapper>
  );
};

DynamicNotification.defaultProps = {
  paddingTop: 0,
  paddingBottom: 0,
  centerAlignText: true,
  marginLeft: 0,
  marginRight: 0,
};

export default DynamicNotification;
