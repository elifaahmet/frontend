/** @format */
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import H1 from './headlines/h1/h1';
import H2 from './headlines/h2/h2';
import H3 from './headlines/h3/h3';
import { typographicStylesToCssString } from './helpers';
import L1 from './labels/l1/l1';
import L2 from './labels/l2/l2';
import B1 from './paragraph/b1/b1';
import B2 from './paragraph/b2/b2';
import B3 from './paragraph/b3/b3';

/**@tech-debt: move caption out in to own typographic component once we know were it will fall */
const AllProductTypography = styled.div`
  display: grid;
  flex-direction: column;
  grid-row-gap: 4px;

  & {
    p.caption {
      color: ${(props) => props.theme.colorScheme.primary.text};
      ${(props) => typographicStylesToCssString(props.theme, 'caption')}
    }
  }
`;

export default {
  component: AllProductTypography,
  title: 'Typography',
} as Meta;

export const allProductTypography: Story = () => {
  return (
    <AllProductTypography>
      <H1>Mobile Headline Typography</H1>
      <B1>Mobile Sub</B1>
      <L1>Entry Header</L1>
      <B2>Placeholder</B2>
      <H2>Placeholder Large</H2>
      <B3>Legal</B3>
      <L2 bold>CTA Disabled</L2>
      <L2>Radio Button Unselected</L2>
      <L2 bold>Radio Button Selected</L2>
      <H3>List Item Headline</H3>
      <p className="caption">Caption</p>
    </AllProductTypography>
  );
};
