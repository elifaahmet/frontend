/**@format */

import React, { useState } from 'react';
import { Checkbox, CheckboxProps } from '@tend/shared/design/ui-kit';
import {
  PageTitleSubtitle,
  PageTemplateBottomDockedButtons,
  Spacer,
  B1,
} from '@tend/lego/product-ui-kit';
import { ContentWrapper, CopyWrapper, CheckboxWrapper } from './e-sign.styled';

export interface ESignProps {
  copyMarkup: string;
}

export const ESign: React.FC<ESignProps> = (props) => {
  const [providedConsent, setProvidedConsent] = useState(false);
  const pageTemplateBottomDockedButtonProps = {
    buttonsProps: [
      {
        children: 'continue',
        disabled: !providedConsent,
      },
    ],
    verticalAlignContentCenter: false,
  };

  const pageTitleSubtitleProps = {
    title: (
      <>
        AGREE TO
        <br />
        E-SIGN.
      </>
    ),
    subtitle: 'Please review and agree to the e-Sign disclosure.',
  };

  const checkboxProps: CheckboxProps = {
    name: 'e-sign-consent',
    onChange: (e) => setProvidedConsent(e.target.checked),
    label: 'I agree to the E-sign Agreement',
    alternateLabelStyle: true,
    labelColor: 'neutral-off-white',
  };

  return (
    <PageTemplateBottomDockedButtons {...pageTemplateBottomDockedButtonProps}>
      <PageTitleSubtitle {...pageTitleSubtitleProps} />
      <ContentWrapper>
        <CopyWrapper dangerouslySetInnerHTML={{ __html: props.copyMarkup }} />
        <Spacer bottom={16}>
          <CheckboxWrapper>
            <Checkbox {...checkboxProps} />
          </CheckboxWrapper>
        </Spacer>
      </ContentWrapper>
    </PageTemplateBottomDockedButtons>
  );
};
