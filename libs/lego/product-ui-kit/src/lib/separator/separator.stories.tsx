/**@format */

import React, { ReactNode } from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout, B1 } from '@tend/lego/product-ui-kit';
import { Separator, SeparatorProps } from './separator';

export default {
  component: Separator,
  title: 'Separator',
} as Meta;

interface Items {
  items: ReactNode[];
}

const Template: Story<SeparatorProps & Items> = (args) => {
  const { items, ...rest } = args;
  const separatorProps = { ...rest };

  return (
    <Layout>
      {items.map((item) => (
        <>
          {item}
          <Separator {...separatorProps} />
        </>
      ))}
    </Layout>
  );
};

export const defaultRender = Template.bind({});
defaultRender.args = {
  items: [
    <B1>A full view width rule</B1>,
    <B1>is the default rendering</B1>,
    <B1>for a separator</B1>,
  ],
};

export const containedRender = Template.bind({});
containedRender.args = {
  items: [
    <B1>A contained width rule</B1>,
    <B1>is rendered when</B1>,
    <B1>the "contained" property is set to true</B1>,
  ],
  contained: true,
};

export const containedSmallCustomColorRender = Template.bind({});
containedSmallCustomColorRender.args = {
  items: [
    <B1>A contained width rule</B1>,
    <B1>with a custom color and smaller height is rendered when</B1>,
    <B1>
      the "contained" and "small" properties are set to true with a "color"
      specified
    </B1>,
  ],
  contained: true,
  small: true,
  color: 'primary-yellow',
};
