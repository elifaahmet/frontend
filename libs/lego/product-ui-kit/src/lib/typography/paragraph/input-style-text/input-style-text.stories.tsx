/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@tend/lego/product-ui-kit';
import { InputStyleText, InputStyleTextProps } from './input-style-text';

export default {
  component: InputStyleText,
  title: 'Typography/InputStyleText',
} as Meta;

interface Items {
  text: string;
}

const Template: Story<InputStyleTextProps & Items> = (args) => {
  const { text, variant } = args;

  return (
    <Layout>
      <InputStyleText variant={variant}>{text}</InputStyleText>
    </Layout>
  );
};

export const defaultSize = Template.bind({});
defaultSize.args = {
  text: 'Default font size: $9.99',
  variant: 'default' as const,
};

export const large = Template.bind({});
large.args = {
  text: 'Large font size: $9.99',
  variant: 'large' as const,
};
