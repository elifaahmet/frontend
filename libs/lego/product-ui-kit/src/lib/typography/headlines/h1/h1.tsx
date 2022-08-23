/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

const StyledH1 = styled.h1<TypographyProps>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  ${(props) => typographicStylesToCssString(props.theme, 'mobile-headline')};
`;

const H1 = (props: TypographyProps) => (
  <StyledH1
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
  >
    {props.children}
  </StyledH1>
);

H1.defaultProps = {
  color: 'neutral-off-white',
};

export default H1;
