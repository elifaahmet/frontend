/**@format */

import React, { ReactNode } from 'react';
import { B1, H1, Spacer } from '@tend/lego/product-ui-kit';
import {
  PageTitleSubtitleContainer,
  SubtitleWrapper,
  TitleWrapper,
} from './page-title-subtitle.styled';

export interface PageTitleSubtitleProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
}

/**@tech-debt: add this component as an option to PageTemplateBottomDockedButtons */
export const PageTitleSubtitle: React.FC<PageTitleSubtitleProps> = (props) => {
  return (
    <PageTitleSubtitleContainer>
      <TitleWrapper>
        <H1>{props.title}</H1>
      </TitleWrapper>
      {props.subtitle && (
        <SubtitleWrapper>
          <B1>{props.subtitle}</B1>
        </SubtitleWrapper>
      )}
      <Spacer top={16} bottom={16} />
    </PageTitleSubtitleContainer>
  );
};

export default PageTitleSubtitle;
