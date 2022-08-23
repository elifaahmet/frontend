/** @format */

import React, { ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  resizeMode?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const StyledImage = styled.img`
  object-fit: ${(props: ImageProps) => props.resizeMode};
  width: 100%;
  height: 100%;
`;

export function Image(props: ImageProps) {
  return <StyledImage src={props.src} resizeMode={props.resizeMode} />;
}

Image.defaultProps = {
  resizeMode: 'cover',
};

export default Image;
