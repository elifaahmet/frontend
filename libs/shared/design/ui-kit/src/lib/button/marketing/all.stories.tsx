/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '../../../utils/transformations';
import ButtonMarketing from './button-marketing';
import {
  DEFAULT,
  INVERTED,
  LARGE,
  MEDIUM,
  SECONDARY,
  SMALL,
  TERTIARY,
} from '../../../constants';

const AllButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & {
    button,
    a {
      margin-block-start: ${(props) =>
        calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
      margin-block-end: ${(props) =>
        calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
      margin-inline-start: ${(props) =>
        calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
    }
  }
`;

const AllButtonsColored = styled.div`
  background: ${(props) => props.theme.color['primary-red']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & {
    button,
    a {
      margin-block-start: ${(props) =>
        calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
      margin-block-end: ${(props) =>
        calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
      margin-inline-start: ${(props) =>
        calculateWithUnit(props.theme.spacer[5], 'rem', props.theme)};
    }
  }
`;

export default {
  component: AllButtons,
  title: 'Buttons/Marketing',
};

const link = 'https://tend.money';
const target = '_blank';

export const allButtonsWhiteBackground = () => {
  return (
    <AllButtons>
      <ButtonMarketing fill={DEFAULT} size={LARGE} href={link} target={target}>
        Large Anchor
      </ButtonMarketing>
      <ButtonMarketing fill={DEFAULT} size={LARGE}>
        Button Large
      </ButtonMarketing>
      <ButtonMarketing fill={INVERTED} size={LARGE}>
        Button Large
      </ButtonMarketing>
      <ButtonMarketing fill={DEFAULT} size={MEDIUM}>
        Button Medium
      </ButtonMarketing>
      <ButtonMarketing fill={DEFAULT} color="neutral-black" size={SMALL}>
        Button Small
      </ButtonMarketing>
      <ButtonMarketing
        variant={TERTIARY}
        size={MEDIUM}
        href={link}
        target={target}
      >
        CTA Message
      </ButtonMarketing>
      <ButtonMarketing
        variant={TERTIARY}
        size={SMALL}
        href={link}
        target={target}
      >
        Learn More
      </ButtonMarketing>
    </AllButtons>
  );
};

export const allButtonsColoredBackground = () => {
  return (
    <AllButtonsColored>
      <ButtonMarketing
        variant={SECONDARY}
        fill={INVERTED}
        size={LARGE}
        href={link}
        target={target}
      >
        Large Anchor
      </ButtonMarketing>
      <ButtonMarketing variant={SECONDARY} fill={INVERTED} size={LARGE}>
        Button Large
      </ButtonMarketing>
      <ButtonMarketing variant={SECONDARY} fill={INVERTED} size={MEDIUM}>
        Button Medium
      </ButtonMarketing>
      <ButtonMarketing
        variant={SECONDARY}
        fill={INVERTED}
        color="neutral-black"
        size={SMALL}
        target={target}
      >
        Button Small
      </ButtonMarketing>
      <ButtonMarketing
        variant={TERTIARY}
        size={MEDIUM}
        href={link}
        target={target}
      >
        CTA Message
      </ButtonMarketing>
      <ButtonMarketing variant={TERTIARY} size={SMALL} href={link}>
        Learn More
      </ButtonMarketing>
    </AllButtonsColored>
  );
};
