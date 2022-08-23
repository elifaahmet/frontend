/** @format */
import styled from '@emotion/styled';

import { ColorName } from '@tend/shared/design/tokens';

import { PRIMARY } from '../../../constants';
import {
  UIKitContext,
  calculateWithUnit,
} from '../../../utils/transformations';
import {
  getBorderColor,
  getCursorColor,
  getDefaultTextColor,
  getHintBackgroundColor,
  getHintColor,
  getInputWidth,
  themeStylesToCssString,
} from './helpers';
import {
  AdornmentProps,
  SingleMessageErrorOrValidationProps,
  StyledInputProps,
} from './input.types';

/**
 * Supporting internal components.
 */
export const InputLabelPairContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: inline-flex;
`;

/**@tech-debt: don't do this hacky #$%^, clean up styles for type !== password*/
export const Adornment = styled.span<AdornmentProps>`
  border-block-end: ${(props) =>
      calculateWithUnit(props.theme.__rule(2), 'rem', props.theme)}
    solid ${(props) => getBorderColor(props)};
  font-weight: ${(props) =>
    props.type === 'password'
      ? props.theme.fontWeight['bold']
      : props.theme.fontWeight['regular']};
  width: ${(props) =>
    ['amount-sending-usd', 'amount-received-mxn'].find((t) => t === props.name)
      ? ''
      : calculateWithUnit(42, 'rem', props.theme)};
  text-align: end;
  user-select: none;
  color: ${(props) => getDefaultTextColor(props)};

  ${(props) =>
    props.type !== 'password'
      ? `padding-block-start: ${calculateWithUnit(20, 'rem', props.theme)};`
      : ''}
`;

Adornment.defaultProps = {
  border: PRIMARY,
};

export const HintsAndValidations = styled.div<{
  hintBackground: 'transparent' | ColorName;
}>`
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
  margin: 0;
  background-color: ${(props) =>
    props.hintBackground && props.hintBackground !== 'transparent'
      ? props.theme.color[props.hintBackground]
      : getHintBackgroundColor(props)};
  width: ${(props) =>
    props.theme.kitContext === UIKitContext.marketing
      ? calculateWithUnit(343, 'rem', props.theme)
      : '100%'};

  & {
    .hint-checkbox {
      display: inline-block;
      width: ${(props) =>
        calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
      height: ${(props) =>
        calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
      border: ${(props) => calculateWithUnit(1, 'rem', props.theme)} solid
        ${(props) => getHintColor(props)};
      margin-inline-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
      background-color: ${(props) => getHintColor(props)};

      &.error {
        border: ${(props) => calculateWithUnit(1, 'rem', props.theme)} solid
          ${(props) => props.theme.color['primary-red']};
        background-color: transparent;
      }
    }

    .hint-text {
      font-family: ${(props) => props.theme.fontFamily['body']};
      font-weight: ${(props) => props.theme.fontWeight['regular']};
      font-size: ${(props) =>
        calculateWithUnit(props.theme.__fontSize(12), 'rem', props.theme)};
      letter-spacing: ${(props) =>
        calculateWithUnit(
          props.theme.__letterSpacing(-0.01),
          'rem',
          props.theme
        )};
      line-height: ${(props) =>
        calculateWithUnit(props.theme.__lineHeight(0.71), 'rem', props.theme)};
      color: ${(props) => getHintColor(props)};

      &.error {
        color: ${(props) => props.theme.color['primary-red']};
      }
    }
  }
`;

export const InputLabel = styled.label<{ error: boolean }>`
  font-family: ${(props) => props.theme.fontFamily['headline']};
  font-size: ${(props) =>
    calculateWithUnit(props.theme.__fontSize(18), 'rem', props.theme)};
  font-weight: ${(props) => props.theme.fontWeight['bold']};
  letter-spacing: ${(props) => props.theme.__letterSpacing(-0.01)};
  line-height: ${(props) => props.theme.__lineHeight(0.94)};
  text-transform: uppercase;
  padding-bottom: ${(props) =>
    calculateWithUnit(props.theme.__spacer(12), 'rem', props.theme)};
  color: ${(props) =>
    props.error
      ? props.theme.color['primary-red']
      : getDefaultTextColor(props)};
`;

export const StyledInput = styled.input<StyledInputProps>`
  outline: none;
  border-color: ${(props) => getBorderColor(props)};
  background-color: inherit;

  ${(props) =>
    themeStylesToCssString(
      props.theme,
      props.border === 'none' ? 'no-border' : props.variant
    )}
  width: ${(props) =>
    props.theme.kitContext === UIKitContext.marketing ||
    props.variant === 'single-digit'
      ? calculateWithUnit(getInputWidth(props), 'rem', props.theme)
      : `calc(100% - ${calculateWithUnit(
          props.type === 'password' ? 42 : 0,
          'rem',
          props.theme
        )})`};

  ${(props) =>
    props.variant === 'single-digit'
      ? `margin-right: ${calculateWithUnit(16, 'rem', props.theme)};`
      : ''}
  text-align: ${(props) =>
    props.variant === 'single-digit' ? 'center' : 'start'};

  color: ${(props) => getDefaultTextColor(props)};
  caret-color: ${(props) => getCursorColor(props)};

  &::placeholder {
    color: ${(props) => `${props.theme.colorScheme.primary.text}80`};
  }
`;

export const SingleMessageErrorOrValidation = styled.p<SingleMessageErrorOrValidationProps>`
  font-family: ${(props) => props.theme.fontFamily['body']};
  font-size: ${(props) =>
    calculateWithUnit(props.theme.__fontSize(12), 'rem', props.theme)};
  font-weight: ${(props) => props.theme.fontWeight['regular']};
  letter-spacing: ${(props) => props.theme.__letterSpacing(-0.01)};
  line-height: ${(props) => props.theme.__lineHeight(1.42)};
  max-width: ${(props) =>
    props.theme.kitContext === UIKitContext.product
      ? '%100'
      : calculateWithUnit(343, 'rem', props.theme)};
  padding-block-start: 0;
  margin: 0;
  color: ${(props) =>
    props.error
      ? props.theme.color['primary-red']
      : props.theme.color['secondary-neon-green']};
  text-align: justify;
`;

/**@tech-debt: figure out why this just doesn't work with out a max-width */
export const EmailInputWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    max-width: ${(props) =>
      props.theme.kitContext === UIKitContext.product
        ? '%100'
        : calculateWithUnit(350, 'rem', props.theme)};

    & > div {
      padding-block-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(20), 'rem', props.theme)};
    }

    button {
      border: none;
      background: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;

      span {
        font-family: Pilat;
        font-style: normal;
        font-weight: normal;
        font-size: ${(props) =>
          calculateWithUnit(props.theme.__fontSize(12), 'rem', props.theme)};
        line-height: ${(props) => props.theme.__lineHeight(1.42)};
        text-align: right;
        letter-spacing: ${(props) => props.theme.__letterSpacing(-0.01)};
        text-transform: uppercase;
        color: ${(props) =>
          props.theme.kitContext === UIKitContext.product
            ? props.theme.color['neutral-off-white']
            : props.theme.color['neutral-black']};
        margin-inline-start: ${(props) =>
          calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
      }
    }
  }
`;
