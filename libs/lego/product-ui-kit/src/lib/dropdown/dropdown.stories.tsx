/**@format */

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import { Dropdown, DropdownProps } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

const Wrapper = styled.div`
  padding: 16px;
  width: 100%;

  & {
    p {
      color: ${(props) => props.theme.colorScheme.primary.text};

      span.selected {
        color: ${(props) => props.theme.colorScheme.secondary.text};
      }
    }
  }
`;

const Template: Story<DropdownProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Wrapper>
      <Dropdown {...args} onChange={(option) => setSelectedOption(option)} />
      {selectedOption && (
        <p>
          You selected <span className="selected">{selectedOption.label}</span>{' '}
          ({selectedOption.value}).
        </p>
      )}
    </Wrapper>
  );
};

export const minimal = Template.bind({});
minimal.args = {
  options: [
    {
      value: 'usa',
      label: 'USA',
    },
    {
      value: 'mx',
      label: 'Mexico',
    },
    {
      value: 'ca',
      label: 'Canada',
    },
  ],
  placeholder: 'Select Country...',
};

export const withLabel = Template.bind({});
withLabel.args = {
  label: 'Country',
  options: [
    {
      value: 'usa',
      label: 'USA',
    },
    {
      value: 'mx',
      label: 'Mexico',
    },
    {
      value: 'ca',
      label: 'Canada',
    },
  ],
  placeholder: 'Select Country...',
};
