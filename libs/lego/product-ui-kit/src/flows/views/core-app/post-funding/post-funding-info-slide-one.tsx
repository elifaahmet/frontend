/**@format */

import React from 'react';
import {
  H1,
  Spacer,
  SelectList,
  SelectListItem,
  SelectListItemProps,
} from '@tend/lego/product-ui-kit';
import { PostFundingInfoSlideProps } from './post-funding-info.types';
import { HeadingWrapper } from './post-funding-info.styled';

export const PostFundingInfoSlideOne: React.FC<PostFundingInfoSlideProps> = (
  props
) => {
  const selectListItemsProps: SelectListItemProps[] = [
    {
      color: 'primary-neon-green',
      headline: 'Earn Cashback',
      body:
        'Get up to 15% cashback when you buy things with your Tend debit card at places like CVS and Buffalo Wild Wings.',
      leftIconName: 'checking',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    },
    {
      color: 'primary-magenta',
      headline: 'Make more from your PTO',
      body:
        'Get up to 15% back when you use your Tend card to book trips through our travel platform.',
      leftIconName: 'airplane',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    },
  ];

  if (props.country === 'us') {
    selectListItemsProps.push({
      color: 'primary-red',
      headline: 'Find Deep discounts everywhere',
      body:
        'Get the best deals on over 200,000 items, curated daily from top retailers.',
      leftIconName: 'arrow-down',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    });
  }

  return (
    <div>
      <HeadingWrapper>
        <H1>
          EARN
          <br />
          MORE GREEN.
        </H1>
      </HeadingWrapper>
      <SelectList>
        {selectListItemsProps.map((selectListItemProps) => (
          <SelectListItem {...selectListItemProps} />
        ))}
      </SelectList>
    </div>
  );
};

export default PostFundingInfoSlideOne;
