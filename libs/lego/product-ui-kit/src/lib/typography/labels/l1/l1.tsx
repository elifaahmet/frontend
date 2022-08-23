/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

const StyledL1 = styled.label<TypographyProps>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  ${(props) => typographicStylesToCssString(props.theme, 'entry-header')};
`;

const L1 = (props: TypographyProps) => (
  <StyledL1
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
  >
    {props.children}
  </StyledL1>
);

L1.defaultProps = {
  color: 'neutral-off-white',
};

export default L1;
