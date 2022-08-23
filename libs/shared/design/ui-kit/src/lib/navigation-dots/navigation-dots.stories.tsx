/** @format */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import NavigationDots, { NavigationDotsProps } from './navigation-dots';

export default {
  component: NavigationDots,
  title: 'Navigation Dots',
} as Meta;

const Template: Story<NavigationDotsProps> = (args) => (
  <NavigationDots {...args} />
);

export const defaultConfigWOHandlers = Template.bind({});

export const ClickedDotIsActive = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(2);
  const onClickHandlers = [
    () => setActiveItemIndex(0),
    () => setActiveItemIndex(1),
    () => setActiveItemIndex(2),
    () => setActiveItemIndex(3),
    () => setActiveItemIndex(4),
  ];

  const props = { activeItemIndex, onClickHandlers };

  return <NavigationDots {...props} />;
};
