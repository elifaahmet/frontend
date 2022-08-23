/**@format */

import React from 'react';
import {
  H1,
  SelectList,
  SelectListItem,
  SelectListItemProps,
  Spacer,
} from '@tend/lego/product-ui-kit';
import { PostFundingInfoSlideProps } from './post-funding-info.types';
import { HeadingWrapper } from './post-funding-info.styled';

export const PostFundingInfoSlideTwo: React.FC<PostFundingInfoSlideProps> = (
  props
) => {
  const selectListItemsProps: SelectListItemProps[] = [
    {
      color: 'primary-orange',
      headline: "You're covered",
      body:
        'Every Tend member is automatically enrolled in a $10,000 accidental death insurance policy — and it won’t cost you a penny.',
      leftIconName: 'network',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    },
  ];

  if (props.country === 'us') {
    selectListItemsProps.push({
      color: 'primary-yellow',
      headline: 'Access thousands of no-fee ATMs',
      body:
        'Bank for free at over 37,000 MoneyPassⓇ \n' +
        'locations across the US.',
      leftIconName: 'atm-finder',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    });
    selectListItemsProps.push({
      color: 'primary-magenta',
      headline: 'Deposit Checks on Your Phone',
      body:
        'Simply take a photo of your check with your phone…no branch or ATM required. Available Spring 2021.',
      leftIconName: 'scan',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    });
  } else if (props.country === 'mx') {
    selectListItemsProps.push({
      color: 'primary-red',
      headline: 'Plan for the rainy days',
      body:
        'With your debit card, you’ll get access to a secured line of credit worth 75% of the amount in your savings.',
      leftIconName: 'snowflake',
      rightIconName: 'arrow-head-right',
      onClick: props.onClickAdvance,
    });
  }

  return (
    <div>
      <HeadingWrapper>
        <H1>
          THE STUFF MONEY
          <br />
          HAPPINESS IS
          <br />
          MADE OF.
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

export default PostFundingInfoSlideTwo;
