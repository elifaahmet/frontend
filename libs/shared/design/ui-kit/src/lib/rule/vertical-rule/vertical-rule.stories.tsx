/** @format */

import React from 'react';
import { VerticalRule } from './vertical-rule';
import styled from '@emotion/styled';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 200px;
`;

export default {
  component: VerticalRule,
  title: 'Rules/VerticalRule',
};

export const primary = () => {
  return (
    <Div>
      <VerticalRule size={2} color="primary-magenta" />
      <VerticalRule size={4} color="neutral-black" />
      <VerticalRule size={8} color="primary-orange" />
      <VerticalRule size={12} color="primary-red" />
      <VerticalRule size={16} color="primary-yellow" />
      <VerticalRule size={24} color="secondary-neon-green" />
    </Div>
  );
};
