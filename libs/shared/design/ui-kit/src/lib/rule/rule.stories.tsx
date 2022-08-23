/** @format */

import React from 'react';
import styled from '@emotion/styled';
import VerticalRule from './vertical-rule/vertical-rule';
import HorizontalRule from './horizontal-rule/horizontal-rule';

const Rules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 14rem;
  height: 14rem;
`;

export default {
  component: Rules,
  title: 'Rules/All Rules',
};

export const allRules = () => {
  return (
    <Rules>
      <HorizontalRule size={12} color="primary-red" />
      <VerticalRule size={16} color="primary-yellow" />
    </Rules>
  );
};
