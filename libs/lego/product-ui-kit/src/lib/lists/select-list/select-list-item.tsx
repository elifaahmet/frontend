/** @format */

import React from 'react';
import { SVGIcon, IconName } from '@tend/shared/design/ui-kit';
import { B3, B1 } from '@tend/lego/product-ui-kit';
import {
  SelectListItemWrapper,
  SelectListItemTextWrapper,
  SelectListItemLeftIconWrapper,
  SelectListItemRightIconWrapper,
} from './select-list.styled';

type PrimaryColors =
  | 'primary-yellow'
  | 'primary-orange'
  | 'primary-magenta'
  | 'primary-red'
  | 'primary-green'
  | 'primary-neon-green';

export interface SelectListItemProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  color: PrimaryColors;
  leftIconName?: IconName;
  rightIconName?: IconName;
  headline: string;
  body: string;
}

export function SelectListItem(props: SelectListItemProps) {
  return (
    <SelectListItemWrapper onClick={props.onClick} color={props.color}>
      <SelectListItemLeftIconWrapper>
        <SVGIcon
          boxSize={32}
          iconName={props.leftIconName}
          color={props.color}
        />
      </SelectListItemLeftIconWrapper>
      <SelectListItemTextWrapper>
        <B1 bold color="neutral-off-white">
          {props.headline}
        </B1>
        <B3 color="neutral-off-white">{props.body}</B3>
      </SelectListItemTextWrapper>
      <SelectListItemRightIconWrapper>
        <SVGIcon
          boxSize={14}
          iconName={props.rightIconName}
          color={props.color}
        />
      </SelectListItemRightIconWrapper>
    </SelectListItemWrapper>
  );
}

SelectListItem.defaultProps = {
  rightIconName: 'arrow-head-right',
  leftIconName: 'home',
};

export default SelectListItem;
