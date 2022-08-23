/**@format */

import { Meta, Story } from '@storybook/react';
import { TendIdView } from './tend-id-view';

export default {
  component: TendIdView,
  title: 'Flows/Views/Onboarding/TendOnboarding/TendIdView',
} as Meta;

const Template: Story = () => <TendIdView />;

export const primary = Template.bind({});
