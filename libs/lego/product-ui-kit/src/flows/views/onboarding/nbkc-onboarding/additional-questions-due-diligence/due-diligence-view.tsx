/**@format */
import React, { useState } from 'react';

import { compose } from '@tend/frontend/shared/utils';
import { Dropdown, L1, Layout } from '@tend/lego/product-ui-kit';
import { ButtonProduct } from '@tend/shared/design/ui-kit';

import PageTitleSubtitle, {
  PageTitleSubtitleProps,
} from '../../../../modules/view-templates/page-title-subtitle/page-title-subtitle';
import {
  ButtonWrapper,
  FlexContainer,
  InputWrapper,
} from './due-diligence-view.styled';

export interface DueDiligenceChoiceProps {
  choiceId: string;
  choiceDescription: string;
}

export interface DueDiligenceQuestionProps {
  questionName: string;
  questionDescription: string;
  choices: DueDiligenceChoiceProps[];
}

export interface DueDiligenceProps {
  questions: DueDiligenceQuestionProps[];
}

export const DueDiligencePageView = (props: DueDiligenceProps) => {
  const initialQAs = props.questions.map((t) => {
    return {
      ...t,
      answer: null,
    };
  });
  const [selectedQAs, setSelectedQAs] = useState(initialQAs);
  const isValidState = selectedQAs.every((value) => value.answer !== null);
  const header: PageTitleSubtitleProps = {
    title: '3 Easy Questions...',
    subtitle: 'Almost done! Promise!',
  };
  const mapAnswerToQuestion = (question) => (option) => {
    return selectedQAs.map((t) => {
      if (t.questionName === question) {
        return {
          ...t,
          answer: option,
        };
      } else {
        return {
          ...t,
        };
      }
    });
  };

  return (
    <Layout>
      <FlexContainer>
        <PageTitleSubtitle {...header} />
        {selectedQAs.map((question) => {
          const setSelectedAnswers = compose(
            setSelectedQAs,
            mapAnswerToQuestion(question.questionName)
          );
          const args = {
            options: question.choices,
            placeholder: question.questionDescription,
          };
          return (
            <InputWrapper key={question.questionName}>
              <Dropdown
                {...args}
                label={question.questionName}
                onChange={setSelectedAnswers}
              />
            </InputWrapper>
          );
        })}
        <ButtonWrapper>
          <ButtonProduct disabled={!isValidState}>Boom</ButtonProduct>
        </ButtonWrapper>
      </FlexContainer>
    </Layout>
  );
};
