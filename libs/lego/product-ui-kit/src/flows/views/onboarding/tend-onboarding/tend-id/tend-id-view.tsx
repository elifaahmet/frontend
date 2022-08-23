/**@format */

import React, { useState } from 'react';
import { ButtonProduct, Input } from '@tend/shared/design/ui-kit';
import {
  L2,
  Layout,
  Spacer,
  PageTitleSubtitle,
  PageTitleSubtitleProps,
} from '@tend/lego/product-ui-kit';
import {
  ButtonWrapper,
  FlexContainer,
  TendIdInputWrapper,
} from './tend-id-view.styled';

/**@tech-debt: no design link in ticket, leaving it here for now */

export const TendIdView: React.FC = () => {
  const [tendId, setTendId] = useState('');
  const header: PageTitleSubtitleProps = {
    title: 'Choose your tendid.',
    subtitle:
      'Your TendID is a unique-to-you code to be used on Tend, like inviting friends to join, sending and receiving money, and within The Green community.',
  };
  return (
    <Layout>
      <FlexContainer>
        <PageTitleSubtitle {...header} />
        <TendIdInputWrapper>
          <Input
            type="text"
            name="tendid"
            placeholder="Enter your TendID"
            label="TendID"
            error={false}
            onChange={(e) => setTendId(e.target.value)}
          ></Input>
          <L2 color={'opacity-white-medium'}>
            This TendID can be anything you want. Make it memoriable, make it
            unique. Some users pick FirstLastName with a number behind it
            (ExampleJones6). If you want 100% anonymity in places like the Green
            community and money transfers, you can pick a TendID that does not
            reflect any details about you.
          </L2>
        </TendIdInputWrapper>
        <ButtonWrapper>
          <ButtonProduct>Create My TendID</ButtonProduct>
          <Spacer top={20}>
            <ButtonProduct variant="secondary">
              Skip Creating My Tend ID
            </ButtonProduct>
          </Spacer>
        </ButtonWrapper>
      </FlexContainer>
    </Layout>
  );
};
