/** @format */
import styled from '@emotion/styled';
import React from 'react';

import { typographicStylesToCssString } from '../../helpers';
import { TypographyProps } from '../../typography.types';

const StyledL2 = styled.label<TypographyProps>`
  color: ${(props) =>
    `${props.theme.color[props.color]}${props.useOpacity ? '80' : ''}`};
  ${(props) =>
    props.bold
      ? typographicStylesToCssString(props.theme, 'radio-button-selected')
      : typographicStylesToCssString(props.theme, 'radio-button-unselected')};
`;

const L2 = (props: TypographyProps) => (
  <StyledL2
    color={props.color}
    className={props.className}
    useOpacity={props.useOpacity}
    bold={props.bold}
  >
    {props.children}
  </StyledL2>
);

L2.defaultProps = {
  color: 'neutral-off-white',
  bold: false,
};

export default L2;
