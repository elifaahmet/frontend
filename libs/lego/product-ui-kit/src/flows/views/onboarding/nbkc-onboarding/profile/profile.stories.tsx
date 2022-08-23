/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Profile, ProfileProps } from './profile';

export default {
  component: Profile,
  title: 'Flows/Views/Onboarding/nbkc/Step 1 - Set up Profile',
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const defaultView = Template.bind({});
defaultView.args = {
  onUserType: (userInput: string) => {
    if (!userInput) return Promise.resolve([]);

    return Promise.resolve(
      [
        {
          value: '5100 Congress Ave, Austin, TX. 78705',
          label: '5100 Congress Ave, Austin, TX. 78705 ',
        },
        {
          value: '4532 Newark Blvd, Newark, CA. 94560',
          label: '4532 Newark Blvd, Newark, CA. 94560',
        },
        {
          value: '300 Imaginary Bro Street, Atlanta, GA. 12345',
          label: '300 Imaginary Bro Street, Atlanta, GA. 30301',
        },
      ].filter((option) => {
        const normalizeInput = userInput.toLocaleLowerCase();
        const normalizedValue = option.value.toLocaleLowerCase();
        const normalizedLabel = option.label.toLocaleLowerCase();
        return (
          normalizedLabel.match(normalizeInput) ||
          normalizedValue.match(normalizeInput)
        );
      })
    );
  },
};
