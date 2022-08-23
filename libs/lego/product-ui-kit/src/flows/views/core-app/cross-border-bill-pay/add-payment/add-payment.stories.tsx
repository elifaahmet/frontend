/**@format */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddPayment, AddPaymentProps } from './add-payment';

export default {
  component: AddPayment,
  title: 'Flows/Views/Banking/CrossBorderBillPay/AddPayment',
} as Meta;

const Template: Story<AddPaymentProps> = (args) => <AddPayment {...args} />;

export const baseView = Template.bind({});
baseView.args = {
  confirmedChoice: (
    <>
      Comisión Federal de Electricidad (CFE)
      <br />
      Michoacan 04
    </>
  ),
  billerNickName: 'CFE–Michoacan 04',
  // accountNumberError: 'Wrong',
};

export const withError = Template.bind({});
withError.args = {
  confirmedChoice: (
    <>
      Comisión Federal de Electricidad (CFE)
      <br />
      Michoacan 04
    </>
  ),
  billerNickName: 'CFE–Michoacan 04',
  accountNumberError:
    'Incorrect account number. Ensure the account number is XX long and does not contain hyphens or spaces.',
};
