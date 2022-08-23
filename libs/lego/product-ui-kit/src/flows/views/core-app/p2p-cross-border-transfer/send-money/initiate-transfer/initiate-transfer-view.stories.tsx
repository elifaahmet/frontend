/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InitiateTransferView } from './initiate-transfer-view';
import {
  InitiateTransferSendToSectionRateInfoProps,
  InitiateTransferViewProps,
} from './initiate-transfer-view.types';
import * as users from '../../../../../mocks/users.json';

export default {
  component: InitiateTransferView,
  title:
    'Flows/Views/Banking/P2PCrossBorderTransfer/SendMoney/InitiateTransfer',
} as Meta;

const Template: Story<InitiateTransferViewProps> = (args) => (
  <InitiateTransferView {...args} />
);

const userUS = users.users[0];
const userMX = users.users[8];

const rateInfo: InitiateTransferSendToSectionRateInfoProps = {
  conversionRate: 19.178,
  explainerText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua.',
  modalExplainerText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. empor incididunt ut labore et dolore magna aliqua.',
};

export const WithinUS = Template.bind({});
WithinUS.args = {
  sendToUser: userUS,
  transferType: 'us-to-us',
  accountInfo: {
    type: 'checking',
    lastFour: 3578,
    balance: 41500.89,
    phoneNumberLastFour: 3458,
  },
  rateInfo,
};

export const WithinUSWithServerError = Template.bind({});
WithinUSWithServerError.args = {
  sendToUser: userUS,
  transferType: 'us-to-us',
  accountInfo: {
    type: 'checking',
    lastFour: 3578,
    balance: 41500.89,
    phoneNumberLastFour: 3458,
  },
  rateInfo,
  errorMessage:
    'Some custom error message coming from the api. who knows what?',
};

export const FromUSToMexico = Template.bind({});
FromUSToMexico.args = {
  sendToUser: userMX,
  transferType: 'us-to-mx',
  accountInfo: {
    type: 'checking',
    lastFour: 3578,
    balance: 52375,
    phoneNumberLastFour: 3458,
  },
  rateInfo,
};

export const FromUSToMexicoWithDefaultError = Template.bind({});
FromUSToMexicoWithDefaultError.args = {
  sendToUser: userMX,
  transferType: 'us-to-mx',
  accountInfo: {
    type: 'checking',
    lastFour: 3578,
    balance: 52375,
    phoneNumberLastFour: 3458,
  },
  rateInfo,
  errorMessage: ' ',
};
