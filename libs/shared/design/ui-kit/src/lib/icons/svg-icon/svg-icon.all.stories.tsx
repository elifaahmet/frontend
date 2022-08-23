/** @format */

import React from 'react';
import { Meta } from '@storybook/react';
import SVGIcon, { SVGIconProps } from './svg-icon';
import styled from '@emotion/styled';
import { iconNames, IconName } from './svg-icon';

export default {
  component: SVGIcon,
  title: 'Icons/SVGIcon',
} as Meta;

const boxSize = 40;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
`;

const IconContainer = styled.div`
  display: inline-flex;
  height: ${boxSize + 40}px;
  width: ${boxSize + 40}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color['neutral-off-white']};
`;

const Wrapper = styled.div`
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

function getArgs(iconName: IconName): SVGIconProps {
  return {
    iconName,
    boxSize,
    color: 'primary-green',
  };
}

export const allIcons = () => (
  <Icons>
    {iconNames.map((iconName) => {
      const props = getArgs(iconName);
      return (
        <Wrapper key={iconName}>
          <IconContainer>
            <SVGIcon {...props} />
          </IconContainer>
          <span className="icon-name">{iconName}</span>
        </Wrapper>
      );
    })}
  </Icons>
);
