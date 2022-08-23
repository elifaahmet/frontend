/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '../../../utils/transformations';
import { AnchorButtonProps } from '../button.types';
import { themeStylesToCssString } from '../helpers';
import { MEDIUM } from '../../../constants';
import SVGIcon from '../../icons/svg-icon/svg-icon';

const StyledCta = styled.a<AnchorButtonProps>`
  display: inline-flex;
  ${(props) =>
    props.size === MEDIUM
      ? themeStylesToCssString(props.theme, 'cta-medium')
      : themeStylesToCssString(props.theme, 'cta-small')};
  .svg-wrapper {
    margin-inline-start: ${(props) =>
      calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
  }
  &:hover {
    .svg-wrapper {
      margin-inline-start: ${(props) =>
        calculateWithUnit(props.theme.__spacer(20), 'rem', props.theme)};
    }
  }
`;

const ButtonMarketingCTA = (props: AnchorButtonProps) => {
  const { children, ...rest } = props;
  return (
    <StyledCta {...rest}>
      {children}
      <SVGIcon
        iconName="cta-link"
        color="neutral-black"
        boxSize={props.size === MEDIUM ? 20 : 15}
      />
    </StyledCta>
  );
};

ButtonMarketingCTA.defaultProps = {
  size: MEDIUM,
};

export default ButtonMarketingCTA;
