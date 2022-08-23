/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { H1, H2, H3 } from './';

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1,
  h2,
  h3 {
    padding-bottom: 35px;
  }
`;

export default {
  component: Headline,
  title: 'Typography/Headlines',
};

export const allHeadlines = () => {
  const text = 'Tend Product';

  return (
    <Headline>
      <H1>{text}</H1>
      <H2>{text}</H2>
      <H3>{text}</H3>
    </Headline>
  );
};
