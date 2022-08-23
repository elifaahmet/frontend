/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  PageTemplateBottomDockedButtons,
  PageTemplateBottomDockedButtonsProps,
  H1,
  B1,
  Spacer,
} from '@tend/lego/product-ui-kit';

export default {
  component: PageTemplateBottomDockedButtons,
  title: 'Flows/Modules/PageTemplates/BottomDockedButtons',
} as Meta;

const Template: Story<PageTemplateBottomDockedButtonsProps> = (args) => (
  <PageTemplateBottomDockedButtons {...args} />
);

export const basicSingleButton = Template.bind({});
basicSingleButton.args = {
  children: <H1>LET'S MAKE BANK!</H1>,
  buttonsProps: [
    {
      children: 'next',
    },
  ],
};

export const basicMultiButton = Template.bind({});
basicMultiButton.args = {
  children: <H1>LET'S MAKE BANK!</H1>,
  buttonsProps: [
    {
      children: 'loose money',
    },
    {
      children: 'stagnate',
    },
    {
      children: 'next',
    },
  ],
};

export const contentCentered = Template.bind({});
contentCentered.args = {
  children: (
    <div>
      <H1>WE MADE BANK!</H1>
      <Spacer top={16} />
      <B1>
        A long long time ago,
        <br /> in a start up far away,
        <br /> after the great IPO...
      </B1>
    </div>
  ),
  verticalAlignContentCenter: true,
  buttonsProps: [
    {
      children: 'next',
    },
  ],
};
