/**@format */

import React, { ReactNode } from 'react';
import { ButtonProduct, ButtonProps } from '@tend/shared/design/ui-kit';
import { Spacer } from '@tend/lego/product-ui-kit';
import { FlexWrapper } from './page-template-bottom-docked-buttons.styled';

export interface PageTemplateBottomDockedButtonsProps {
  children?: ReactNode | string;
  buttonsProps: ButtonProps[];
  verticalAlignContentCenter?: boolean;
}

export const PageTemplateBottomDockedButtons: React.FC<PageTemplateBottomDockedButtonsProps> = (
  props
) => {
  return (
    <Spacer
      top={16}
      left={16}
      right={16}
      style={{ overflowY: 'auto', width: '100%' }}
    >
      <FlexWrapper
        verticalAlignContentCenter={props.verticalAlignContentCenter}
      >
        <div className="main-content">{props.children}</div>
        <div className="buttons">
          {props.buttonsProps.map((buttonProps, index) => (
            <ButtonProduct key={`button-${index}`} {...buttonProps} />
          ))}
        </div>
      </FlexWrapper>
    </Spacer>
  );
};

PageTemplateBottomDockedButtons.defaultProps = {
  verticalAlignContentCenter: false,
};

export default PageTemplateBottomDockedButtons;
