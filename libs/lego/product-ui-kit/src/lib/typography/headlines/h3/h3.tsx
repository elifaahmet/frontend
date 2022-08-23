/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

const StyledH3 = styled.h3<TypographyProps>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  ${(props) => typographicStylesToCssString(props.theme, 'list-item-headline')};
`;

const H3 = (props: TypographyProps) => (
  <StyledH3
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
  >
    {props.children}
  </StyledH3>
);

H3.defaultProps = {
  color: 'neutral-off-white',
};

export default H3;
