/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import Grid from './grid';
import GridItem from './grid-item/grid-item';
import { GridProps } from '../../types/grid';
import {
  appendValuesWithUnits,
  interpolateStyles,
} from '../../utils/transformations';

export default {
  component: Grid,
  title: 'Grid/Grid',
} as Meta;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  div {
    ${(props) =>
      interpolateStyles(
        appendValuesWithUnits({ marginBlockEnd: props.theme.spacer[4] }, [
          'marginBlockEnd',
        ])
      )}
  }
`;

const Template: Story<GridProps> = (args) => (
  <Container>
    <Grid>
      {Array.from(Array(6).keys()).map((key) => {
        return (
          <GridItem
            xs="one-sixth"
            bg="primary-yellow"
            offset={[key + 1, key + 1, key + 1, key * 2 + 1]}
          >
            <Div>
              <h6>1/6</h6>
            </Div>
          </GridItem>
        );
      })}
    </Grid>
    <Grid>
      {Array.from(Array(3).keys()).map((key) => {
        return (
          <GridItem
            xs="one-fourth"
            bg="primary-green"
            offset={[key * 2 + 1, key * 2 + 1, key * 2 + 1, (key + 1) * 3 - 2]}
          >
            <Div>
              <h6 color="neutral-white">1/4</h6>
            </Div>
          </GridItem>
        );
      })}
      <GridItem xs="one-fourth" bg="primary-green" offset={[5, 5, 5, 10]}>
        <Div>
          <p color="neutral-white">1/4 on mobile becomes 1/3</p>
        </Div>
      </GridItem>
    </Grid>
    <Grid>
      {Array.from(Array(3).keys()).map((key) => {
        return (
          <GridItem
            xs="one-third"
            bg="primary-red"
            offset={[key * 2 + 1, key * 2 + 1, key * 2 + 1, (key + 1) * 4 - 3]}
          >
            <Div>
              <h6 color="neutral-white">1/3</h6>
            </Div>
          </GridItem>
        );
      })}
    </Grid>
    <Grid>
      {Array.from(Array(2).keys()).map((key) => {
        return (
          <GridItem
            xs="half"
            bg="primary-orange"
            offset={[
              (key + 1) * 3 - 2,
              (key + 1) * 3 - 2,
              (key + 1) * 3 - 2,
              (key + 1) * 6 - 5,
            ]}
          >
            <Div>
              <h6 color="neutral-white">1/2</h6>
            </Div>
          </GridItem>
        );
      })}
    </Grid>
    <Grid>
      <GridItem xs="two-thirds" bg="primary-magenta" offset={[1, 1, 1, 1]}>
        <Div>
          <h6 color="neutral-white">2/3</h6>
        </Div>
      </GridItem>
      <GridItem xs="one-third" bg="primary-magenta" offset={[5, 5, 5, 9]}>
        <Div>
          <h6 color="neutral-white">1/3</h6>
        </Div>
      </GridItem>
    </Grid>
    <Grid>
      <GridItem xs="full-width" bg="neutral-black">
        <Div>
          <h6 color="neutral-white">1</h6>
        </Div>
      </GridItem>
    </Grid>
    <Grid>
      {Array.from(Array(6).keys()).map((key) => {
        return (
          <GridItem
            xs="one-sixth"
            bg="primary-yellow"
            offset={[key + 1, key + 1, key + 1, key * 2 + 1]}
            rowEnd={[key + 1, key + 1, key + 1, key + 1]}
          >
            <Div>
              <p>1/6 with different row span settings</p>
            </Div>
          </GridItem>
        );
      })}
    </Grid>
  </Container>
);

export const primary = Template.bind({});
primary.args = {
  children: "Let's make bank.",
};
