/**@format */

import React from 'react';
import { Input } from '@tend/shared/design/ui-kit';
import { H1, B1, Spacer } from '@tend/lego/product-ui-kit';
import { PostFundingInfoSlideProps } from './post-funding-info.types';

export const PostFundingInfoSlideThree: React.FC<PostFundingInfoSlideProps> = (
  props
) => {
  return (
    <div>
      <H1>SHARE THE WEALTH.</H1>
      <Spacer top={16} />
      <B1>
        As a Tend member, you’ll get access to Tend Shares, our shared revenue
        program. You’ll earn cash bonuses for referring members, plus monthly
        payouts for helping grow our community.
      </B1>
      <Spacer top={20} bottom={20} />
      <Input
        type="text"
        name="emails"
        variant="email-invite"
        onChange={() => null}
        captureEmailInvites={props.captureEmailInvites}
      />
    </div>
  );
};

export default PostFundingInfoSlideThree;
