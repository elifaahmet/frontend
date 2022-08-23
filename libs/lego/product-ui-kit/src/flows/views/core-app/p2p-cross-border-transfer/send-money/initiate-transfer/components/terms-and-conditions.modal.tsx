/** @format **/
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { B1, H1, Modal, Spacer, SpacerValue } from '@tend/lego/product-ui-kit';
import { ButtonProduct, Checkbox } from '@tend/shared/design/ui-kit';

import { ESignAgreement } from './e-sign-agreement';
import { CheckBoxWrapper } from './initiate-transfer.styled';

const modalStyleForAndroid = {
  top: 16 as SpacerValue,
  bottom: 16 as SpacerValue,
};

const modalStyleForIOS = {
  top: 16 as SpacerValue,
  bottom: 32 as SpacerValue,
  marginBottom: 32 as SpacerValue,
};

export function TermsAndConditionsModal(props) {
  const {
    showModalTC,
    onClickCloseErrorModal,
    onClickAgreeModalTC,
    devicePlatform,
  } = props;
  const [showESignAgreement, setShowESignAgreement] = useState(false);
  const [isTCChecked, setIsTCChecked] = useState(false);
  const { t } = useTranslation(['mf-p2p', 'error-message-module']);

  return (
    <Modal
      show={showModalTC}
      onClose={onClickCloseErrorModal}
      key={`${Boolean(showModalTC).toString()}-right-quick`}
    >
      <H1>Right</H1>
      <H1>Quick</H1>
      <Spacer top={16}>
        <B1>{t('mf-p2p.initiate-transfer.acceptTCSummary')}</B1>
      </Spacer>
      <Spacer top={16} bottom={16}>
        <CheckBoxWrapper>
          <Checkbox
            defaultChecked={false}
            onChange={() => setIsTCChecked(!isTCChecked)}
          />
          <B1>
            By continuing with this transaction you agree to our{' '}
            <a
              style={{ textDecoration: 'underline' }}
              onClick={(e) => setShowESignAgreement(!showESignAgreement)}
            >
              E-Sign Agreement
            </a>
            ,{' '}
            <a
              href="https://s3.amazonaws.com/static.tend.money/legal/us/en/TERMS_CONDITIONS_AR.pdf"
              target="_blank"
            >
              Terms and Conditions
            </a>
            , and{' '}
            <a
              href="https://s3.amazonaws.com/static.tend.money/legal/us/en/Tend_Privacy_Policy_AR.pdf"
              target="_blank"
            >
              Privacy Policy
            </a>
          </B1>
        </CheckBoxWrapper>
      </Spacer>
      {showESignAgreement && <ESignAgreement />}
      <Spacer
        {...(devicePlatform === 'android'
          ? modalStyleForAndroid
          : modalStyleForIOS)}
      >
        <ButtonProduct
          onClick={() => onClickAgreeModalTC(isTCChecked)}
          disabled={!isTCChecked}
        >
          {t('mf-p2p:initiate-transfer:acceptTCSummaryButton')}
        </ButtonProduct>
      </Spacer>
    </Modal>
  );
}
