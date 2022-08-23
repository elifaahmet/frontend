/**@format */

import React, { useState } from 'react';
import { ButtonProduct, Input, RadioButton } from '@tend/shared/design/ui-kit';
import {
  L2,
  Layout,
  ModalProps,
  Modal,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import {
  ButtonWrapper,
  EmailInputWrapper,
  FlexContainer,
  PhoneTendIdInputWrapper,
  RadioButtonWrapper,
} from './welcome-view.styled';
import {
  WelcomePageMxModalComponent,
  WelcomePageUSModalComponent,
} from '../components/welcome-page-modals.component';
import { formatPhone } from '../helper/helper';

export const WelcomeView: React.FC = () => {
  const header: PageTitleSubtitleProps = {
    title: 'Welcome to Tend.',
    subtitle: 'Let us know your email, phone and location\nto get started.',
  };
  const [country, setCountry] = useState('USA');
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [friendTid, setFriendTid] = useState('');
  const usModalProps: ModalProps = {
    show: showModal,
    onClose: () => setShowModal(false),
    children: WelcomePageUSModalComponent,
  };
  const mxModalProps: ModalProps = {
    show: showModal,
    onClose: () => setShowModal(false),
    children: WelcomePageMxModalComponent,
  };
  return (
    <Layout>
      <FlexContainer>
        <PageTitleSubtitle {...header} />
        <RadioButtonWrapper>
          <RadioButton
            labels={['USA', 'Mexico']}
            radioGroupName="country-select"
            selectedColor="primary-yellow"
            onChange={(e) => {
              setCountry(e.target.value);
              setShowModal(true);
              setPhone('');
            }}
          />
        </RadioButtonWrapper>
        <Modal
          {...(country === 'USA' ? { ...usModalProps } : { ...mxModalProps })}
        ></Modal>
        <EmailInputWrapper>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            label="Your email"
            error={false}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </EmailInputWrapper>
        <PhoneTendIdInputWrapper>
          <Input
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            label="Mobile Number"
            value={phone}
            onChange={formatPhone(setPhone)(country)}
          ></Input>
          <L2 color={'opacity-white-medium'}>
            By entering your telephone number and clicking ‘Next’, you are
            giving us permission to contact you about this application and send
            you a security code for verification.
          </L2>
        </PhoneTendIdInputWrapper>
        <PhoneTendIdInputWrapper>
          <Input
            type="text"
            name="tendid"
            placeholder="If a Tend member referred you, enter their TendId here"
            label="Tend Friend"
            onChange={(e) => setFriendTid(e.target.value)}
          ></Input>
        </PhoneTendIdInputWrapper>
        <ButtonWrapper>
          <ButtonProduct>NEXT</ButtonProduct>
        </ButtonWrapper>
      </FlexContainer>
    </Layout>
  );
};

export default WelcomeView;
