/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { B1, B2, B3 } from './index';

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    padding-bottom: 35px;
  }
`;

export default {
  component: Paragraphs,
  title: 'Typography/Paragraph',
};

export const allParagraphs = () => {
  const text = 'Tend product body styles';

  return (
    <Paragraphs>
      <B1>{text}</B1>
      <B2>{text}</B2>
      <B3>{text}</B3>
    </Paragraphs>
  );
};
