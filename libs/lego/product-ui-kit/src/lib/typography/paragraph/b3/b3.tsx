/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

const StyledB3 = styled.p<TypographyProps>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  ${(props) => typographicStylesToCssString(props.theme, 'legal')};
`;

const B3 = (props: TypographyProps) => (
  <StyledB3
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
  >
    {props.children}
  </StyledB3>
);

B3.defaultProps = {
  color: 'neutral-off-white',
};

export default B3;
