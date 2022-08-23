/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { B3 } from '@tend/lego/product-ui-kit';

/**@tech-debt: since B3 typography is product specific, and this should really be an enhancement of the base input
 * component in shared-ui-kit, making a note here for now as a @todo reminder for later */

const AdornmentWrapper = styled.div`
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(2), 'rem', props.theme)};
  display: flex;
  flex-direction: row-reverse;
`;

export interface InputAdornmentProps {
  text: string;
  error?: boolean;
}

export const InputAdornment: React.FC<InputAdornmentProps> = ({
  text,
  error,
}) => {
  const { colorSchemeConfig } = useTheme();
  const textColor = error
    ? colorSchemeConfig.state.error
    : colorSchemeConfig.secondary.text;

  return (
    <AdornmentWrapper>
      <B3 color={textColor}>{(text || '').toUpperCase()}</B3>
    </AdornmentWrapper>
  );
};

InputAdornment.defaultProps = {
  error: false,
};

export default InputAdornment;
