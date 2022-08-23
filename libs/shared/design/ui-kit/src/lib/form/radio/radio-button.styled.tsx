/**@format */
import styled from '@emotion/styled';
import {
  calculateWithUnit,
  RadioButtonProps,
  UIKitContext,
} from '@tend/shared/design/ui-kit';
import { getMainColor, getSelectedColor, getWidth } from './helpers';

export const RadioButtonsWrapper = styled.div<RadioButtonProps>`
  & {
    label {
      width: ${(props) => getWidth(props)};
      height: ${(props) => calculateWithUnit(32, 'rem', props.theme)};
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      background-color: inherit;
      padding: ${(props) =>
        calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
      font-size: ${(props) =>
        calculateWithUnit(props.theme.__fontSize(14), 'rem', props.theme)};
      line-height: ${(props) => props.theme.__lineHeight(0.85)};
      letter-spacing: ${(props) =>
        calculateWithUnit(
          props.theme.__letterSpacing(0.01),
          'rem',
          props.theme
        )};
      color: ${(props) => props.theme.colorScheme.primary.text};
      border: ${(props) => calculateWithUnit(1, 'rem', props.theme)} solid
        ${(props) => getMainColor(props)};
      text-transform: ${(props) =>
        props.theme.kitContext === UIKitContext.product
          ? 'none'
          : 'capitalize'};
    }

    label:hover {
      // TODO: get more specs from design and remove if we don't need these
    }

    input[type='radio']:checked + label {
      color: ${(props) => getSelectedColor(props)};
      background-color: ${(props) => getMainColor(props)};
      font-weight: ${(props) => props.theme.fontWeight['bold']};
    }

    input[type='radio']:focus + label {
      // TODO: get more specs from design and remove if we don't need these
    }
  }
`;
