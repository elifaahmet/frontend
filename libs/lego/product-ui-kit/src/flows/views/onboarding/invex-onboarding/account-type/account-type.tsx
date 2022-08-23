/**@format */

import React from 'react';
import {
  Layout,
  SelectList,
  SelectListItem,
  SelectListItemProps,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';

export const AccountType: React.FC = () => {
  const selectListItemProps: SelectListItemProps[] = [
    {
      color: 'primary-neon-green',
      headline: 'Full (Recommended)',
      body:
        'I am applying for a full account with no deposit or transaction restrictions.',
      leftIconName: 'money-compact',
    },
    {
      color: 'primary-magenta',
      headline: 'Express',
      body:
        'I am applying for an Express Account and understand that I will have monthly deposit or transaction restrictions.',
      leftIconName: 'padlock',
    },
  ];

  const header: PageTitleSubtitleProps = {
    title: 'SELECT YOUR\nDESIRED ACCOUNT\nLEVEL',
  };

  return (
    <Layout>
      <PageTitleSubtitle {...header} />
      <SelectList>
        {selectListItemProps.map((itemProps: SelectListItemProps) => (
          <SelectListItem {...itemProps} key={itemProps.headline} />
        ))}
      </SelectList>
    </Layout>
  );
};
