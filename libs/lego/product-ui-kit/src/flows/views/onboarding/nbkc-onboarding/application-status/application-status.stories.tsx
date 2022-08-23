/**@format */

import { Meta, Story } from '@storybook/react';
import {
  BankApplicationStatus,
  BankApplicationStatusProps,
} from './application-status';

import {
  ApplicationProgressEnum,
  ApplicationStatusEnum,
} from '@tend/lego/product-ui-kit';

export default {
  component: BankApplicationStatus,
  title: 'Flows/Views/Onboarding/nbkc/BankApplicationStatus',
} as Meta;

const Template: Story<BankApplicationStatusProps> = (args) => (
  <BankApplicationStatus {...args} />
);

export const verifiedView = Template.bind({});
verifiedView.args = {
  status: ApplicationStatusEnum.VERIFIED,
  progress: ApplicationProgressEnum.BankApplicationSubmitted,
};

export const deniedView = Template.bind({});
deniedView.args = {
  status: ApplicationStatusEnum.DENIED,
  progress: ApplicationProgressEnum.BankApplicationSubmitted,
};

export const pendingView = Template.bind({});
pendingView.args = {
  status: ApplicationStatusEnum.DOB_MANUAL,
  progress: ApplicationProgressEnum.BankApplicationSubmitted,
};
