/** @format */

import React from 'react';
import { Layout } from '@tend/lego/product-ui-kit';
import { SelectList } from './select-list';
import { SelectListItem, SelectListItemProps } from './select-list-item';

export default {
  component: SelectList,
  title: 'List',
  argTypes: { onClick: { action: 'clicked' } },
};

/* eslint-disable @typescript-eslint/no-empty-function */
const defaultSelectListItem: SelectListItemProps = {
  color: 'primary-red',
  headline: 'Default select list item',
  body: 'This one is with default right and left icons',
  onClick: () => {},
};

const selectListItemMagenta: SelectListItemProps = {
  color: 'primary-magenta',
  headline: 'Magenta Example',
  body: 'This left icon is not a default one',
  leftIconName: 'face-id',
  onClick: () => {},
};

const selectListItemYellow: SelectListItemProps = {
  color: 'primary-yellow',
  headline: 'Yellow Example',
  body: 'This time both left and right icon are not the defaults',
  leftIconName: 'luggage',
  rightIconName: 'key',
  onClick: () => {},
};

const selectListItemNeonGreen: SelectListItemProps = {
  color: 'primary-neon-green',
  headline: 'Neon Green Example',
  body: 'This time both left and right icon are not the defaults',
  leftIconName: 'airplane',
  rightIconName: 'settings',
  onClick: () => {},
};

export const selectList = () => {
  return (
    <Layout>
      <SelectList>
        <SelectListItem {...defaultSelectListItem} />
        <SelectListItem {...selectListItemMagenta} />
        <SelectListItem {...selectListItemYellow} />
        <SelectListItem {...selectListItemNeonGreen} />
      </SelectList>
    </Layout>
  );
};
