/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@tend/lego/product-ui-kit';
import { Autocomplete, AutocompleteProps } from './autocomplete';

export default {
  component: Autocomplete,
  title: 'Autocomplete',
} as Meta;

const Template: Story<AutocompleteProps> = (args) => (
  <Layout>
    <Autocomplete {...args} />
  </Layout>
);

export const genericSearch = Template.bind({});
genericSearch.args = {
  onUserType: (userInput: string) => {
    if (!userInput) return Promise.resolve([]);

    return Promise.resolve(
      [
        { value: 'about', label: 'about ' },
        { value: 'banish', label: 'banish' },
        { value: 'care', label: 'care' },
        { value: 'determined', label: 'determined' },
        { value: 'elephant', label: 'elephant' },
      ].filter(
        (option) =>
          option.label.match(userInput) || option.value.match(userInput)
      )
    );
  },
  placeholder: 'Type something...',
  autocompleteLabel: 'generic search',
  noOptionsMessage: () => 'Try typing something...',
};

export const addressAutocomplete = Template.bind({});
addressAutocomplete.args = {
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
  placeholder: 'Enter your address',
  autocompleteLabel: 'residential address',
  required: true,
  noOptionsMessage: () => null,
};
