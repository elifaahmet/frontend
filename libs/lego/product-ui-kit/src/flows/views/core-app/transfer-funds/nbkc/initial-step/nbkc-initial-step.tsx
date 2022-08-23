/**@format */

import React from 'react';
import {
  Layout,
  H1,
  B1,
  SelectList,
  SelectListItem,
  SelectListItemProps,
  Spacer,
} from '@tend/lego/product-ui-kit';

export const NBKCInitialStep: React.FC = (props) => {
  const selectListItemProps: SelectListItemProps[] = [
    {
      color: 'primary-neon-green',
      headline: 'Direct Deposit',
      body:
        'Earn a cash bonus and monthly payouts by having your next paycheck sent to your Tend account.',
      leftIconName: 'checking',
    },
    {
      color: 'primary-orange',
      headline: 'Transfer from another bank',
      body:
        'Send money from your other bank account - available in ~2 business days.',
      leftIconName: 'account-right',
    },
  ];

  return (
    <Layout>
      <H1>
        LET'S PUT
        <br /> SOME CASH IN
        <br /> YOUR ACCOUNT.
      </H1>
      <Spacer top={16} bottom={16}>
        <B1>
          Choose how you'd like to add
          <br /> money to your Tend account.
        </B1>
      </Spacer>
      <Spacer top={16}>
        <SelectList>
          {selectListItemProps.map((value, index) => (
            <SelectListItem {...value} key={index} />
          ))}
        </SelectList>
      </Spacer>
    </Layout>
  );
};

export default NBKCInitialStep;
