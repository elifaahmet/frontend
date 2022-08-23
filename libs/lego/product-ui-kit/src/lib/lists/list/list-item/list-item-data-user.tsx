/** @format */
import React from 'react';

import { B1, B2, IUser, ListItemProps } from '@tend/lego/product-ui-kit';
import { Flag, SVGIcon } from '@tend/shared/design/ui-kit';

import {
  ListItemDataSectionEndUser,
  ListItemDataSectionStart,
} from './list-item.styled';

export interface ListItemDataUserProps extends Omit<ListItemProps, 'onDelete'> {
  sendAgain?: boolean;
  data: IUser;
  onDelete?: any; // ((cb: () => void) => void) | (() => void);
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const getFlagName = (flagName) => {
  return `${flagName.charAt(0).toUpperCase()}${flagName
    .slice(1)
    .toLowerCase()}Icon`;
};

export function ListItemDataUser(props: ListItemDataUserProps) {
  const { nickname, tendId, country } = props.data;
  return (
    <>
      <ListItemDataSectionStart>
        <B1 bold color="neutral-off-white">
          {nickname}
        </B1>
        <B2 color="neutral-off-white">{tendId}</B2>
      </ListItemDataSectionStart>
      <ListItemDataSectionEndUser>
        <div>
          <Flag boxSize={28} flagName={getFlagName(country)} />
        </div>
        {props.sendAgain && (
          <div className="right-arrow">
            <SVGIcon
              boxSize={10}
              iconName="arrow-head-right"
              color="neutral-off-white"
            />
          </div>
        )}
      </ListItemDataSectionEndUser>
    </>
  );
}

export default ListItemDataUser;
