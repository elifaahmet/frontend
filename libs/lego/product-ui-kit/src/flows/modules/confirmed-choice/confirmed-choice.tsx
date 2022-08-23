/**@format */
import { useTheme } from '@emotion/react';
import React from 'react';

import { Separator, SeparatorProps } from '@tend/lego/product-ui-kit';

import {
  ConfirmedChoiceInnerWrapper,
  ConfirmedChoiceOuterWrapper,
} from './confirmed-choice.styled';

export const ConfirmedChoice: React.FC = (props) => {
  const theme = useTheme();

  const separatorProps: SeparatorProps = {
    contained: true,
    color: theme.colorSchemeConfig.secondary.text,
    flush: true,
  };

  return (
    <ConfirmedChoiceOuterWrapper>
      <ConfirmedChoiceInnerWrapper>
        {props.children}
      </ConfirmedChoiceInnerWrapper>
      <Separator {...separatorProps} />
    </ConfirmedChoiceOuterWrapper>
  );
};

export default ConfirmedChoice;
