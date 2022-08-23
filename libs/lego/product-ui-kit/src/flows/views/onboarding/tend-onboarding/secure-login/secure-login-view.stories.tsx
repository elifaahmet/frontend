/**@format */

import { Meta, Story } from '@storybook/react';
import { SecureLoginView } from './secure-login-view';

export default {
  component: SecureLoginView,
  title: 'Flows/Views/Onboarding/TendOnboarding/SecureLoginView',
} as Meta;

const Template: Story = () => <SecureLoginView />;

export const baseView = Template.bind({});
