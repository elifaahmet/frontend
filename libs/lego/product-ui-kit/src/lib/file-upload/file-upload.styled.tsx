/**@format */
import styled from '@emotion/styled';
import React, { LabelHTMLAttributes } from 'react';

import { typographicStylesToCssString } from '@tend/lego/product-ui-kit';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const FileUploadWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & {
    p {
      color: ${(props) => props.theme.colorScheme.primary.text};
      ${(props) => typographicStylesToCssString(props.theme, 'caption')}
    }
  }
`;

export const FileUploadInput = styled.input`
  height: 0;
  width: 0;
`;

export const FileUploadLabelButton = styled.label<
  LabelHTMLAttributes<HTMLLabelElement>
>`
  display: flex;
  height: ${(props) => calculateWithUnit(65, 'rem', props.theme)};
  width: ${(props) => calculateWithUnit(65, 'rem', props.theme)};
  justify-content: center;
  align-items: center;
  border: ${(props) => calculateWithUnit(1, 'rem', props.theme)} dashed
    ${(props) => props.theme.color['neutral-off-white']};
`;
