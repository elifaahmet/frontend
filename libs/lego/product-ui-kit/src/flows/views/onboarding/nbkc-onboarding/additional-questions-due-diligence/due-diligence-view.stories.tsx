/**@format */

import { Meta, Story } from '@storybook/react';
import { DueDiligencePageView, DueDiligenceProps } from './due-diligence-view';

export default {
  component: DueDiligencePageView,
  title: 'Flows/Views/Onboarding/nbkc/AdditionalQuestionsDueDiligencePageView',
} as Meta;

const Template: Story<DueDiligenceProps> = (args) => (
  <DueDiligencePageView {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  questions: [
    {
      questionName: 'Source of Funds',
      questionDescription: 'What is the source of funds?',
      choices: [
        {
          value: '123',
          label: 'Employment income',
        },
        {
          value: '234',
          label: 'Bank Draft',
        },
        {
          value: '345',
          label: 'Trust',
        },
        {
          value: '456',
          label: 'Inheritance',
        },
      ],
    },
    {
      questionName: 'Employment Status',
      questionDescription: 'What is your employment status?',
      choices: [
        {
          value: '221',
          label: 'Employed',
        },
        {
          value: '332',
          label: 'Student',
        },
        {
          value: '223',
          label: 'Minor',
        },
      ],
    },
    {
      questionName: 'SOC Code',
      questionDescription: 'What is your occupation?',
      choices: [
        {
          value: '111',
          label: 'Marketing Managers',
        },
        {
          value: '222',
          label: 'PR',
        },
        {
          value: '333',
          label: 'HR',
        },
        {
          value: '444',
          label: 'Industrial Production Managers',
        },
      ],
    },
  ],
};
