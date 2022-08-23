/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Carousel from './carousel';
import { CarouselItem } from './carousel.styled';
import { H1, H3 } from '../typography/headlines/index';
import { B1 } from '../typography/paragraph/index';

export default {
  component: Carousel,
  title: 'Carousel',
} as Meta;

const RedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['primary-red']};
  width: 100%;
  height: 200px;
`;
const MagentaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['primary-magenta']};
  width: 100%;
  height: 200px;
`;
const YellowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['primary-yellow']};
  width: 100%;
  height: 200px;
`;

const NeonGreenDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['primary-neon-green']};
  width: 100%;
  height: 200px;
`;

const Container = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.offset}px;
  color: white;

  h2 {
    color: black;
  }
`;

const HowToUse = () => (
  <>
    <H1>How should the carousel be used?</H1>
    <br />
    <B1>
      After importing a Carousel component from the appropriate UI library, wrap
      each item in a CarouselItem from the same library. For the product
      Carousel, set the offset to the padding for the layout so the component
      can position itself such that it stretches across the full width of the
      viewport.
    </B1>
    <br />
  </>
);

const Considerations = () => (
  <>
    <H1>Are the any other considerations that should be accounted for?</H1>
    <br />
    <B1>
      Just make sure the content with a CarouselItem is styled such that it does
      not expand beyond the container for any given item.
    </B1>
    <br />
  </>
);

const MarkupTemplate: Story = () => (
  <Container>
    <HowToUse />
    <Carousel>
      <CarouselItem>
        <RedDiv>
          <H3>What I see when there's scope creep</H3>
        </RedDiv>
      </CarouselItem>
      <CarouselItem>
        <MagentaDiv>
          <H3>What I see when I love my job</H3>
        </MagentaDiv>
      </CarouselItem>
      <CarouselItem>
        <YellowDiv>
          <H3>What I see during bio breaks</H3>
        </YellowDiv>
      </CarouselItem>
      <CarouselItem>
        <NeonGreenDiv>
          <H3>What I see when we make bank</H3>
        </NeonGreenDiv>
      </CarouselItem>
    </Carousel>
    <Considerations />
  </Container>
);

export const StandardMarkupAsContent = MarkupTemplate.bind({});

const imageStyles = { width: '100%' };

const ImagesTemplate: Story = () => (
  <Container>
    <HowToUse />
    <Carousel>
      <CarouselItem>
        <img
          src={
            'https://images.unsplash.com/photo-1584853817833-aab3e985a261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
          alt="Bridges"
          style={imageStyles}
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src={
            'https://images.unsplash.com/photo-1638500551033-a0f60c8e768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
          alt="Taxis at night"
          style={imageStyles}
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src={
            'https://images.unsplash.com/photo-1477520353136-d75b998f342f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'
          }
          alt="Chicago Night"
          style={imageStyles}
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src={
            'https://images.unsplash.com/photo-1611323340350-bdcc0e6cfae5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'
          }
          alt="NYC"
          style={imageStyles}
        />
      </CarouselItem>
    </Carousel>
    <Considerations />
  </Container>
);

export const ImagesAsContent = ImagesTemplate.bind({});
