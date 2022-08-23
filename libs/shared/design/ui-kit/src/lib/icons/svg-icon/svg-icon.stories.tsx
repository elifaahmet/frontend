/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import SVGIcon, { SVGIconProps } from './svg-icon';
import styled from '@emotion/styled';
import { iconNames, IconName } from './svg-icon';

export default {
  component: SVGIcon,
  title: 'Icons/SVGIcon/IndividualIcons',
  decorators: [(story) => <IconContainer>{story()}</IconContainer>],
  argTypes: {
    iconName: {
      options: iconNames,
      control: { type: 'select' },
    },
  },
} as Meta;

const boxSize = 100;

const IconContainer = styled.div`
  display: inline-flex;
  height: ${boxSize + 20}px;
  width: ${boxSize + 20}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['neutral-off-white']};
`;

function getArgs(iconName: IconName) {
  return {
    iconName,
    boxSize,
    color: 'primary-green',
  };
}

const Template: Story<SVGIconProps> = (args) => <SVGIcon {...args} />;

export const accountDetails = Template.bind({});
accountDetails.args = getArgs('account-details');

export const accountLeft = Template.bind({});
accountLeft.args = getArgs('account-left');

export const accountRight = Template.bind({});
accountRight.args = getArgs('account-right');

export const airplane = Template.bind({});
airplane.args = getArgs('airplane');

export const arrowDown = Template.bind({});
arrowDown.args = getArgs('arrow-down');

export const arrowHeadRight = Template.bind({});
arrowHeadRight.args = getArgs('arrow-head-right');

export const ATMFinder = Template.bind({});
ATMFinder.args = getArgs('atm-finder');

export const bidirectional = Template.bind({});
bidirectional.args = getArgs('bidirectional');

export const book = Template.bind({});
book.args = getArgs('book');

export const briefcase = Template.bind({});
briefcase.args = getArgs('briefcase');

export const buildings = Template.bind({});
buildings.args = getArgs('buildings');

export const calendar = Template.bind({});
calendar.args = getArgs('calendar');

export const calendarAlt = Template.bind({});
calendarAlt.args = getArgs('calendar-alt');

export const car = Template.bind({});
car.args = getArgs('car');

export const caret = Template.bind({});
caret.args = getArgs('caret');

export const chat = Template.bind({});
chat.args = getArgs('chat');

export const check = Template.bind({});
check.args = getArgs('check');

export const checking = Template.bind({});
checking.args = getArgs('checking');

export const checkingAndSavings = Template.bind({});
checkingAndSavings.args = getArgs('checking-and-savings');

export const checkingCompact = Template.bind({});
checkingCompact.args = getArgs('checking-compact');

export const clock = Template.bind({});
clock.args = getArgs('clock');

export const close = Template.bind({});
close.args = getArgs('close');

export const contactUs = Template.bind({});
contactUs.args = getArgs('contact-us');

export const cookie = Template.bind({});
cookie.args = getArgs('cookie');

export const credit = Template.bind({});
credit.args = getArgs('credit');

export const CTALink = Template.bind({});
CTALink.args = getArgs('cta-link');

export const debitCard = Template.bind({});
debitCard.args = getArgs('debit-card');

export const deposit = Template.bind({});
deposit.args = getArgs('deposit');

export const documentIcon = Template.bind({});
documentIcon.args = getArgs('document-icon');

export const domino = Template.bind({});
domino.args = getArgs('domino');

export const door = Template.bind({});
door.args = getArgs('door');

export const exportDocument = Template.bind({});
exportDocument.args = getArgs('export-document');

export const faceID = Template.bind({});
faceID.args = getArgs('face-id');

export const facebook = Template.bind({});
facebook.args = getArgs('facebook');

export const filter = Template.bind({});
filter.args = getArgs('filter');

export const globe = Template.bind({});
globe.args = getArgs('globe');

export const hamburger = Template.bind({});
hamburger.args = getArgs('hamburger');

export const hamburgerCompact = Template.bind({});
hamburgerCompact.args = getArgs('hamburger-compact');

export const home = Template.bind({});
home.args = getArgs('home');

export const homeCompact = Template.bind({});
homeCompact.args = getArgs('home-compact');

export const info = Template.bind({});
info.args = getArgs('info');

export const instagram = Template.bind({});
instagram.args = getArgs('instagram');

export const key = Template.bind({});
key.args = getArgs('key');

export const logOut = Template.bind({});
logOut.args = getArgs('log-out');

export const luggage = Template.bind({});
luggage.args = getArgs('luggage');

export const magazine = Template.bind({});
magazine.args = getArgs('magazine');

export const magnifyingGlass = Template.bind({});
magnifyingGlass.args = getArgs('magnifying-glass');

export const messageCenter = Template.bind({});
messageCenter.args = getArgs('message-center');

export const messageCenterCompact = Template.bind({});
messageCenterCompact.args = getArgs('message-center-compact');

export const minusCircleFill = Template.bind({});
minusCircleFill.args = getArgs('minus-circle-fill');

export const money = Template.bind({});
money.args = getArgs('money');

export const moneyCompact = Template.bind({});
moneyCompact.args = getArgs('money-compact');

export const network = Template.bind({});
network.args = getArgs('network');

export const networkCompact = Template.bind({});
networkCompact.args = getArgs('network-compact');

export const note = Template.bind({});
note.args = getArgs('note');

export const padlock = Template.bind({});
padlock.args = getArgs('padlock');

export const personalDetails = Template.bind({});
personalDetails.args = getArgs('personal-details');

export const personalDetailsCompact = Template.bind({});
personalDetailsCompact.args = getArgs('personal-details-compact');

export const photo = Template.bind({});
photo.args = getArgs('photo');

export const plus = Template.bind({});
plus.args = getArgs('plus');

export const plusCompact = Template.bind({});
plusCompact.args = getArgs('plus-compact');

export const power = Template.bind({});
power.args = getArgs('power');

export const rightArrow = Template.bind({});
rightArrow.args = getArgs('right-arrow');

export const savings = Template.bind({});
savings.args = getArgs('savings');

export const savingsCompact = Template.bind({});
savingsCompact.args = getArgs('savings-compact');

export const scale = Template.bind({});
scale.args = getArgs('scale');

export const scan = Template.bind({});
scan.args = getArgs('scan');

export const script = Template.bind({});
script.args = getArgs('script');

export const settings = Template.bind({});
settings.args = getArgs('settings');

export const settingsAlt = Template.bind({});
settingsAlt.args = getArgs('settings-alt');

export const ship = Template.bind({});
ship.args = getArgs('ship');

export const shopping = Template.bind({});
shopping.args = getArgs('shopping');

export const snorkeling = Template.bind({});
snorkeling.args = getArgs('snorkeling');

export const snowflake = Template.bind({});
snowflake.args = getArgs('snowflake');

export const squareSerpent = Template.bind({});
squareSerpent.args = getArgs('square-serpent');

export const statements = Template.bind({});
statements.args = getArgs('statements');

export const tendPlus = Template.bind({});
tendPlus.args = getArgs('tend-plus');

export const trash = Template.bind({});
trash.args = getArgs('trash');

export const travel = Template.bind({});
travel.args = getArgs('travel');

export const twitter = Template.bind({});
twitter.args = getArgs('twitter');

export const userFlag = Template.bind({});
userFlag.args = getArgs('user-flag');

export const userLeft = Template.bind({});
userLeft.args = getArgs('user-left');

export const userRight = Template.bind({});
userRight.args = getArgs('user-right');

export const warning = Template.bind({});
warning.args = getArgs('warning');
