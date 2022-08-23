/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

export interface B1Props extends TypographyProps {
  bold?: boolean;
}

const StyledB1 = styled.p<B1Props>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fontWeight['bold']
      : props.theme.fontWeight['regular']};
  ${(props) => typographicStylesToCssString(props.theme, 'mobile-sub')};
`;

const B1 = (props: B1Props) => (
  <StyledB1
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
    bold={props.bold}
  >
    {props.children}
  </StyledB1>
);

B1.defaultProps = {
  color: 'neutral-off-white',
};

export default B1;
