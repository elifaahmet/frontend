/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { PageTemplateBottomDockedButtonsProps } from '@tend/lego/product-ui-kit';

export const FlexWrapper = styled.div<
  Pick<PageTemplateBottomDockedButtonsProps, 'verticalAlignContentCenter'>
>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  & {
    .main-content,
    .buttons {
      width: 100%;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: ${(props) =>
        props.verticalAlignContentCenter ? 'center' : 'start'};
    }

    .buttons {
      flex: none;

      & {
        button {
          margin-block-end: ${(props) =>
            calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
        }
      }
    }
  }
`;
