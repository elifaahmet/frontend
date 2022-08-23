/**@format*/

import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { ColorName } from '@tend/shared/design/tokens';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color: ColorName;
  underline?: boolean;
  uppercase?: boolean;
  children: ReactNode | string;
}

/**
 * @tech-debt
 *
 * Add a visited color?
 * Is there a need to add some props for font weight, font family?
 * Should hover, active or focus states be underlined?  Or any change of colors for those states?
 *
 */
const StyledAnchor = styled.a<AnchorProps>`
  color: ${(props) => props.theme.color[props.color]};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  outline: none;
  cursor: pointer;
  &:visited {
  }
  &:hover {
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
    text-decoration: underline;
  }
  &:active {
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
    text-decoration: underline;
  }
  &:focus {
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
    text-decoration: underline;
  }
`;

export function Anchor(props: AnchorProps) {
  return <StyledAnchor {...props}>{props.children}</StyledAnchor>;
}

export default Anchor;
