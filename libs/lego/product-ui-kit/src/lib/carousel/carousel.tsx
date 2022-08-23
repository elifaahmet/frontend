/**@format */

import React, { ReactChild } from 'react';
import {
  CarouselOuterContainer,
  CarouselWrapper,
  CarouselInnerContainer,
} from './carousel.styled';
import {
  NavigationDots,
  useCarouselCalculationsAndHandlers,
} from '@tend/shared/design/ui-kit';

export interface CarouselProps {
  children: ReactChild[];
}

export interface CarouselInnerContainerProps {
  numChildren: number;
  activeItemIndex: number;
  isUserInteracting: boolean;
  displacement: number;
}

export const Carousel: React.FC<CarouselProps> = (props) => {
  const {
    activeItemIndex,
    setActiveItemIndex,
    isUserInteracting,
    displacement,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
  } = useCarouselCalculationsAndHandlers(props.children.length);

  const navigationProps = {
    activeItemIndex,
    onClickHandlers: React.Children.map(props.children, (child, index) => () =>
      setActiveItemIndex(index)
    ),
  };

  const innerContainerProps = {
    numChildren: props.children.length,
    activeItemIndex,
    isUserInteracting,
    displacement,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
  };

  return (
    <CarouselOuterContainer>
      <CarouselWrapper>
        <CarouselInnerContainer {...innerContainerProps}>
          {React.Children.map(props.children, (child, index) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            React.cloneElement(child)
          )}
        </CarouselInnerContainer>
      </CarouselWrapper>
      <NavigationDots {...navigationProps} />
    </CarouselOuterContainer>
  );
};

export default Carousel;
