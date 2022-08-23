/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { L1, L2 } from './';

const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    padding-bottom: 35px;
  }
`;

export default {
  component: Label,
  title: 'Typography/Label',
};

export const allLabels = () => {
  const text = 'Tend Product Labels';

  return (
    <Label>
      <L1>{text}</L1>
      <L2>{text}</L2>
      <L2 bold>{text}</L2>
    </Label>
  );
};
