import React from 'react';
import { Anchor } from './anchor';
import { Story, Meta } from "@storybook/react";
import { AnchorProps } from './anchor';

export default {
  component: Anchor,
  title: 'Anchor',
} as Meta;

const Template: Story<AnchorProps> = (args) => (
    <Anchor {...args}> {args.children} </Anchor>
);

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const simpleAnchor = Template.bind({});
simpleAnchor.args = {
  color: 'neutral-black',
  href: 'www.example.com',
  children: 'www.example.com',
};

export const underlineAnchor = Template.bind({});
underlineAnchor.args = {
  color: 'neutral-gray',
  href: 'www.example.com',
  underline: true,
  children: 'www.example.com',
};

export const uppercaseAnchor = Template.bind({});
uppercaseAnchor.args = {
  color: 'primary-green',
  href: 'www.example.com',
  uppercase: true,
  children: 'example',
};
