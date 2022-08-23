/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

const StyledH2 = styled.h2<TypographyProps>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  ${(props) => typographicStylesToCssString(props.theme, 'placeholder-large')};
`;

const H2 = (props: TypographyProps) => (
  <StyledH2
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
  >
    {props.children}
  </StyledH2>
);

H2.defaultProps = {
  color: 'neutral-off-white',
};

export default H2;
