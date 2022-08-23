/** @format */

import React from 'react';
import { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Flag, { FlagName, flagNames, FlagProps } from './flag';

export default {
  component: Flag,
  title: 'Icons/Flag',
} as Meta;

const boxSize = 40;

const Flags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
`;

const FlagContainer = styled.div`
  display: inline-flex;
  height: ${boxSize + 40}px;
  width: ${boxSize + 40}px;
  justify-content: center;
  align-items: center;
`;

const FlagWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 20px;

  & {
    .icon-name {
      display: inline-flex;
      max-width: 50px;
      text-align: center;
    }
  }
`;

function getArgs(flagName: FlagName): FlagProps {
  return {
    flagName,
    boxSize,
  };
}

export const allIcons = () => (
  <Flags>
    {flagNames.map((iconName) => {
      const props = getArgs(iconName);
      return (
        <FlagWrapper key={iconName}>
          <FlagContainer>
            <Flag {...props} />
          </FlagContainer>
          <span className="icon-name">{iconName}</span>
        </FlagWrapper>
      );
    })}
  </Flags>
);
