/**@format */

import { Meta, Story } from '@storybook/react';
import { PageTitleSubtitleProps } from '@tend/lego/product-ui-kit';
import WelcomeView from './welcome-view';

export default {
  component: WelcomeView,
  title: 'Flows/Views/Onboarding/TendOnboarding/WelcomeView',
} as Meta;

const Template: Story = () => <WelcomeView />;

const header: PageTitleSubtitleProps = {
  title: 'Welcome to Tend.',
  subtitle: 'Let us know your email, phone and location\nto get started.',
};

export const baseView = Template.bind({});
baseView.args = {
  header,
};
