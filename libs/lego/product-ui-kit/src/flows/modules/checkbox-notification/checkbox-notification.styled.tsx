/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { CheckboxNotificationProps } from '@tend/lego/product-ui-kit';

export const FlexWrapper = styled.div<
  Pick<
    CheckboxNotificationProps,
    'paddingTop' | 'paddingBottom' | 'centerAlignText'
  >
>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block-start: ${(props) =>
    calculateWithUnit(props.paddingTop, 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.paddingBottom, 'rem', props.theme)};

  & {
    h2 {
      text-align: center;
    }
    ,
    p {
      display: flex;
      align-items: center;
      text-align: ${(props) => (props.centerAlignText ? 'center' : 'start')};
    }
  }
`;

export const CheckIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
