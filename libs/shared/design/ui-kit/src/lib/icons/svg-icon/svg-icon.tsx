/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { ColorName } from '@tend/shared/design/tokens';
import AccountDetails from './icons/account-details';
import AccountLeft from './icons/account-left';
import AccountRight from './icons/account-right';
import Airplane from './icons/airplane';
import ArrowDown from './icons/arrow-down';
import ArrowHeadRight from './icons/arrow-head-right';
import ArrowHeadLeft from './icons/arrow-head-left';
import ATMFinder from './icons/atm-finder';
import Bidirectional from './icons/bidirectional';
import Book from './icons/book';
import Briefcase from './icons/briefcase';
import Buildings from './icons/buildings';
import Calendar from './icons/calendar';
import CalendarAlt from './icons/calendar-alt';
import Car from './icons/car';
import Caret from './icons/caret';
import Chat from './icons/chat';
import Check from './icons/check';
import Checking from './icons/checking';
import CheckingAndSavings from './icons/checking-and-savings';
import CheckingCompact from './icons/checking-compact';
import Clock from './icons/clock';
import Close from './icons/close';
import ContactUs from './icons/contact-us';
import Cookie from './icons/cookie';
import Credit from './icons/credit';
import DebitCard from './icons/debit-card';
import Deposit from './icons/deposit';
import DocumentIcon from './icons/document-icon';
import Domino from './icons/domino';
import Door from './icons/door';
import ExportDocument from './icons/export-document';
import FaceID from './icons/face-id';
import Facebook from './icons/facebook';
import Filter from './icons/filter';
import Globe from './icons/globe';
import Hamburger from './icons/hamburger';
import HamburgerCompact from './icons/hamburger-compact';
import Home from './icons/home';
import HomeCompact from './icons/home-compact';
import Info from './icons/info';
import Instagram from './icons/instagram';
import Key from './icons/key';
import LogOut from './icons/log-out';
import Luggage from './icons/luggage';
import Magazine from './icons/magazine';
import MagnifyingGlass from './icons/magnifying-glass';
import MessageCenter from './icons/message-center';
import MessageCenterCompact from './icons/message-center-compact';
import MinusCircleFill from './icons/minus-circle-fill';
import Money from './icons/money';
import MoneyCompact from './icons/money-compact';
import Network from './icons/network';
import NetworkCompact from './icons/network-compact';
import Note from './icons/note';
import Padlock from './icons/padlock';
import PersonalDetails from './icons/personal-details';
import PersonalDetailsCompact from './icons/personal-details-compact';
import Photo from './icons/photo';
import Plus from './icons/plus';
import PlusCompact from './icons/plus-compact';
import Power from './icons/power';
import RightArrow from './icons/right-arrow';
import RightArrowCTA from './icons/right-arrow-cta';
import Savings from './icons/savings';
import SavingsCompact from './icons/savings-compact';
import Scale from './icons/scale';
import Scan from './icons/scan';
import Script from './icons/script';
import Settings from './icons/settings';
import SettingsAlt from './icons/settings-alt';
import Ship from './icons/ship';
import Shopping from './icons/shopping';
import Snorkeling from './icons/snorkeling';
import Snowflake from './icons/snowflake';
import SquareSerpent from './icons/square-serpent';
import Statements from './icons/statements';
import TendPlus from './icons/tend-plus';
import Trash from './icons/trash';
import Travel from './icons/travel';
import Twitter from './icons/twitter';
import UserFlag from './icons/user-flag';
import UserLeft from './icons/user-left';
import UserRight from './icons/user-right';
import Warning from './icons/warning';
import { calculateWithUnit } from '../../../utils/transformations';

// NOTE: Similar icons in Figma that have thicker stroke lines and generally smaller are
//       differentiated with the postfix "compact." Compact ones are typically used on the
//       mobile app.

/** TODO: calculate dimensions within existing svg ratios for better element containment in dom */

export const iconNames = [
  'account-details',
  'account-left',
  'account-right',
  'airplane',
  'arrow-down',
  'arrow-head-left',
  'arrow-head-right',
  'atm-finder',
  'bidirectional',
  'book',
  'briefcase',
  'buildings',
  'calendar',
  'calendar-alt',
  'car',
  'caret',
  'chat',
  'check',
  'checking',
  'checking-and-savings',
  'checking-compact',
  'clock',
  'close',
  'contact-us',
  'cookie',
  'credit',
  'cta-link',
  'debit-card',
  'deposit',
  'document-icon',
  'domino',
  'door',
  'export-document',
  'face-id',
  'facebook',
  'filter',
  'hamburger',
  'globe',
  'hamburger-compact',
  'home',
  'home-compact',
  'info',
  'instagram',
  'key',
  'log-out',
  'luggage',
  'magazine',
  'magnifying-glass',
  'message-center',
  'message-center-compact',
  'minus-circle-fill',
  'money',
  'money-compact',
  'network',
  'network-compact',
  'note',
  'padlock',
  'personal-details',
  'personal-details-compact',
  'photo',
  'plus',
  'plus-compact',
  'power',
  'right-arrow',
  'savings',
  'savings-compact',
  'scale',
  'scan',
  'script',
  'settings',
  'settings-alt',
  'ship',
  'shopping',
  'snorkeling',
  'snowflake',
  'square-serpent',
  'statements',
  'tend-plus',
  'trash',
  'travel',
  'twitter',
  'user-flag',
  'user-left',
  'user-right',
  'warning',
] as const;

export type IconName = typeof iconNames[number];

export interface SVGIconProps {
  iconName: IconName;
  color?: ColorName;
  boxSize?: number;
}

export const XMLNS = 'http://www.w3.org/2000/svg';

const SVGWrapper = styled.span<SVGIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    calculateWithUnit(props.boxSize || 100, 'rem', props.theme)};
  height: ${(props) =>
    calculateWithUnit(props.boxSize || 100, 'rem', props.theme)};
`;

export const SVGIcon = (props: SVGIconProps) => {
  const getIcon = () => {
    switch (props.iconName) {
      case 'account-details':
        return <AccountDetails {...props} />;
      case 'account-left':
        return <AccountLeft {...props} />;
      case 'account-right':
        return <AccountRight {...props} />;
      case 'airplane':
        return <Airplane {...props} />;
      case 'arrow-down':
        return <ArrowDown {...props} />;
      case 'arrow-head-left':
        return <ArrowHeadLeft {...props} />;
      case 'arrow-head-right':
        return <ArrowHeadRight {...props} />;
      case 'atm-finder':
        return <ATMFinder {...props} />;
      case 'bidirectional':
        return <Bidirectional {...props} />;
      case 'book':
        return <Book {...props} />;
      case 'briefcase':
        return <Briefcase {...props} />;
      case 'buildings':
        return <Buildings {...props} />;
      case 'calendar':
        return <Calendar {...props} />;
      case 'calendar-alt':
        return <CalendarAlt {...props} />;
      case 'car':
        return <Car {...props} />;
      case 'caret':
        return <Caret {...props} />;
      case 'chat':
        return <Chat {...props} />;
      case 'check':
        return <Check {...props} />;
      case 'checking':
        return <Checking {...props} />;
      case 'checking-and-savings':
        return <CheckingAndSavings {...props} />;
      case 'checking-compact':
        return <CheckingCompact {...props} />;
      case 'clock':
        return <Clock {...props} />;
      case 'close':
        return <Close {...props} />;
      case 'contact-us':
        return <ContactUs {...props} />;
      case 'cookie':
        return <Cookie {...props} />;
      case 'credit':
        return <Credit {...props} />;
      case 'cta-link':
        return <RightArrowCTA {...props} />;
      case 'debit-card':
        return <DebitCard {...props} />;
      case 'deposit':
        return <Deposit {...props} />;
      case 'document-icon':
        return <DocumentIcon {...props} />;
      case 'domino':
        return <Domino {...props} />;
      case 'door':
        return <Door {...props} />;
      case 'export-document':
        return <ExportDocument {...props} />;
      case 'face-id':
        return <FaceID {...props} />;
      case 'facebook':
        return <Facebook {...props} />;
      case 'filter':
        return <Filter {...props} />;
      case 'globe':
        return <Globe {...props} />;
      case 'hamburger':
        return <Hamburger {...props} />;
      case 'hamburger-compact':
        return <HamburgerCompact {...props} />;
      case 'home':
        return <Home {...props} />;
      case 'home-compact':
        return <HomeCompact {...props} />;
      case 'info':
        return <Info {...props} />;
      case 'instagram':
        return <Instagram {...props} />;
      case 'key':
        return <Key {...props} />;
      case 'log-out':
        return <LogOut {...props} />;
      case 'luggage':
        return <Luggage {...props} />;
      case 'magazine':
        return <Magazine {...props} />;
      case 'magnifying-glass':
        return <MagnifyingGlass {...props} />;
      case 'message-center':
        return <MessageCenter {...props} />;
      case 'message-center-compact':
        return <MessageCenterCompact {...props} />;
      case 'minus-circle-fill':
        return <MinusCircleFill {...props} />;
      case 'money':
        return <Money {...props} />;
      case 'money-compact':
        return <MoneyCompact {...props} />;
      case 'network':
        return <Network {...props} />;
      case 'network-compact':
        return <NetworkCompact {...props} />;
      case 'note':
        return <Note {...props} />;
      case 'padlock':
        return <Padlock {...props} />;
      case 'personal-details':
        return <PersonalDetails {...props} />;
      case 'personal-details-compact':
        return <PersonalDetailsCompact {...props} />;
      case 'photo':
        return <Photo {...props} />;
      case 'plus':
        return <Plus {...props} />;
      case 'plus-compact':
        return <PlusCompact {...props} />;
      case 'power':
        return <Power {...props} />;
      case 'right-arrow':
        return <RightArrow {...props} />;
      case 'savings':
        return <Savings {...props} />;
      case 'savings-compact':
        return <SavingsCompact {...props} />;
      case 'scale':
        return <Scale {...props} />;
      case 'scan':
        return <Scan {...props} />;
      case 'script':
        return <Script {...props} />;
      case 'settings':
        return <Settings {...props} />;
      case 'settings-alt':
        return <SettingsAlt {...props} />;
      case 'ship':
        return <Ship {...props} />;
      case 'shopping':
        return <Shopping {...props} />;
      case 'snowflake':
        return <Snowflake {...props} />;
      case 'snorkeling':
        return <Snorkeling {...props} />;
      case 'square-serpent':
        return <SquareSerpent {...props} />;
      case 'statements':
        return <Statements {...props} />;
      case 'tend-plus':
        return <TendPlus {...props} />;
      case 'trash':
        return <Trash {...props} />;
      case 'travel':
        return <Travel {...props} />;
      case 'twitter':
        return <Twitter {...props} />;
      case 'user-flag':
        return <UserFlag {...props} />;
      case 'user-left':
        return <UserLeft {...props} />;
      case 'user-right':
        return <UserRight {...props} />;
      case 'warning':
        return <Warning {...props} />;
      default:
        return null;
    }
  };

  return (
    <SVGWrapper {...props} className="svg-wrapper">
      {getIcon()}
    </SVGWrapper>
  );
};

SVGIcon.defaultProps = {
  color: 'neutral-black',
};

export default SVGIcon;
