/**@format */

/**@tech-debt: no design link in ticket, leaving it here for now */

import {
  B1,
  Layout,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import { ButtonProduct } from '@tend/shared/design/ui-kit';
import React from 'react';
import {
  ButtonWrapper,
  FlexContainer,
  IdTextWrapper,
} from './scan-id-view.styled';

export const MxScanIdPageView: React.FC = () => {
  const header: PageTitleSubtitleProps = {
    title: 'Scan your\nID',
  };
  return (
    <Layout>
      <FlexContainer>
        <PageTitleSubtitle {...header} />
        <IdTextWrapper>
          <p>
            <B1>
              Important Information About Procedures for Opening a New Account.
            </B1>
          </p>
          <p>
            <B1>
              To help the government fight the funding of terrorism and money
              laundering activities, Federal law requires all financial
              institutions to obtain, verify, and record information that
              identifies each person who opens an account.
            </B1>
          </p>
          <p>
            <B1>
              This means that when you open an account, we’ll ask for your name,
              address, date of birth, and other information that will allow us
              to identify you. Next step is to scan your driver's license,
              passport or State I.D., then take a selfie.
            </B1>
          </p>
        </IdTextWrapper>
        <ButtonWrapper>
          <ButtonProduct>I'm good to go</ButtonProduct>
        </ButtonWrapper>
      </FlexContainer>
    </Layout>
  );
};
