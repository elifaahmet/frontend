/**@format */

import { Meta, Story } from '@storybook/react';
import { InvexProfileSetup } from './profile-setup';
import { ProfileSetupProps } from './profile-setup.types';

export default {
  component: InvexProfileSetup,
  title: 'Flows/Views/Onboarding/Invex/Step 1 - Profile Setup',
} as Meta;

const Template: Story<ProfileSetupProps> = (args) => (
  <InvexProfileSetup {...args} />
);

export const baseView = Template.bind({});
baseView.args = {
  onContinue: (state) => null,
};
