/** @format */

import React from 'react';
import { HorizontalRule } from './horizontal-rule';
import styled from '@emotion/styled';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
`;

export default {
  component: HorizontalRule,
  title: 'Rules/HorizontalRule',
};

export const primary = () => {
  return (
    <Div>
      <HorizontalRule size={2} color="primary-magenta" />
      <HorizontalRule size={4} color="neutral-black" />
      <HorizontalRule size={8} color="primary-orange" />
      <HorizontalRule size={12} color="primary-red" />
      <HorizontalRule size={16} color="primary-yellow" />
      <HorizontalRule size={24} color="secondary-neon-green" />
    </Div>
  );
};
