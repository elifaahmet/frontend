/** @format */

import React from 'react';
import Grid from '../grid/grid';
import GridItem from '../grid/grid-item/grid-item';
import { Image } from './image';
import styled from '@emotion/styled';

const H6 = styled.h6`
  font-size: ${(props) => props.theme.fontSize[24]}px;
`;

export default {
  component: Image,
  title: 'Image',
};

export const primary = (args) => {
  const resizeModes = ['contain', 'cover', 'fill', 'none', 'scale-down'];
  return (
    <Grid>
      {resizeModes.map(
        (
          resizeMode: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down',
          key
        ) => (
          <GridItem
            xs="one-sixth"
            offset={[key + 1, key + 1, key + 1, key * 2 + 1]}
          >
            <H6>{resizeMode}</H6>
          </GridItem>
        )
      )}
      {resizeModes.map(
        (
          resizeMode: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down',
          key
        ) => (
          <GridItem
            xs="one-sixth"
            offset={[key + 1, key + 1, key + 1, key * 2 + 1]}
            rowStart={[2, 2, 2, 2]}
            rowEnd={[3, 3, 3, 3]}
          >
            <Image
              src={`https://picsum.photos/100/100?key=1`}
              resizeMode={resizeMode}
            />
          </GridItem>
        )
      )}
      {resizeModes.map(
        (
          resizeMode: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down',
          key
        ) => (
          <GridItem
            xs="one-sixth"
            offset={[key + 1, key + 1, key + 1, key * 2 + 1]}
            rowStart={[3, 3, 3, 3]}
            rowEnd={[5, 5, 5, 5]}
          >
            <Image
              src={`https://picsum.photos/id/237/200/300`}
              resizeMode={resizeMode}
            />
          </GridItem>
        )
      )}
    </Grid>
  );
};
