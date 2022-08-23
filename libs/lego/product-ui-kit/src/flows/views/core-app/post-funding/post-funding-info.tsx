/**@format */

import React, { useEffect, useState } from 'react';
import { Layout, Spacer } from '@tend/lego/product-ui-kit';
import {
  NavigationDots,
  ButtonProduct,
  useCarouselCalculationsAndHandlers,
} from '@tend/shared/design/ui-kit';
import { PostFundingInfoProps } from './post-funding-info.types';
import { PostFundingInfoSlideOne } from './post-funding-info-slide-one';
import { PostFundingInfoSlideTwo } from './post-funding-info-slide-two';
import { PostFundingInfoSlideThree } from './post-funding-info-slide-three';
import {
  ViewWrapper,
  CarouselItemInnerWrapper,
} from './post-funding-info.styled';
import {
  CarouselOuterContainer,
  CarouselInnerContainer,
  CarouselWrapper,
  CarouselItem,
} from '../../../../lib/carousel/carousel.styled';

export const PostFundingInfo: React.FC<PostFundingInfoProps> = (props) => {
  const [buttonText, setButtonText] = useState('show me more');

  const {
    activeItemIndex,
    setActiveItemIndex,
    isUserInteracting,
    displacement,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
  } = useCarouselCalculationsAndHandlers(3);

  useEffect(() => {
    if (activeItemIndex === 2) setButtonText('invite friends');
    else setButtonText('show me more');
  }, [activeItemIndex]);

  const navigationProps = {
    activeItemIndex,
    onClickHandlers: [
      () => setActiveItemIndex(0),
      () => setActiveItemIndex(1),
      () => setActiveItemIndex(2),
    ],
  };

  const innerContainerProps = {
    numChildren: 3,
    activeItemIndex,
    isUserInteracting,
    displacement,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
  };

  return (
    <Layout>
      <ViewWrapper>
        <CarouselOuterContainer>
          <CarouselWrapper>
            <CarouselInnerContainer {...innerContainerProps}>
              <CarouselItem>
                <CarouselItemInnerWrapper>
                  <PostFundingInfoSlideOne
                    {...props}
                    onClickAdvance={() => setActiveItemIndex(1)}
                  />
                </CarouselItemInnerWrapper>
              </CarouselItem>
              <CarouselItem>
                <CarouselItemInnerWrapper>
                  <PostFundingInfoSlideTwo
                    {...props}
                    onClickAdvance={() => setActiveItemIndex(2)}
                  />
                </CarouselItemInnerWrapper>
              </CarouselItem>
              <CarouselItem>
                <CarouselItemInnerWrapper>
                  <PostFundingInfoSlideThree {...props} />
                </CarouselItemInnerWrapper>
              </CarouselItem>
            </CarouselInnerContainer>
          </CarouselWrapper>
        </CarouselOuterContainer>
        <div>
          <NavigationDots {...navigationProps} />
          <Spacer top={16} />
          <ButtonProduct>{buttonText}</ButtonProduct>
        </div>
      </ViewWrapper>
    </Layout>
  );
};

export default PostFundingInfo;
