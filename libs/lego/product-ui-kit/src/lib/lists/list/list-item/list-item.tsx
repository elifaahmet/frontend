/**@format */
import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import { SVGIcon } from '@tend/shared/design/ui-kit';

import { ITransaction, IUser } from '../../../../flows/types';
import {
  ListItemDataWrapper,
  ListItemDeleteIconWrapper,
  ListItemWrapper,
} from './list-item.styled';

export interface ListItemProps {
  clickableIcon?: boolean;
  isDeleted?: boolean;
  isBeingEdited?: boolean;
  data: ITransaction | IUser;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDelete?: () => void;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const { isBeingEdited, onClick, isDeleted, onDelete } = props;
  const [hidden, setHidden] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        setHidden(true);
      }, theme.duration.fast);
    }
  }, [isDeleted, theme.duration.fast]);

  return (
    <ListItemWrapper
      className={`${isDeleted ? 'deleted' : ''} ${hidden ? 'hidden' : ''}`}
    >
      <ListItemDeleteIconWrapper
        onClick={onDelete}
        className={isBeingEdited ? 'show' : 'hide'}
      >
        <SVGIcon
          boxSize={22}
          iconName="minus-circle-fill"
          color="primary-yellow"
        />
      </ListItemDeleteIconWrapper>
      <ListItemDataWrapper onClick={onClick}>
        {props.children}
      </ListItemDataWrapper>
    </ListItemWrapper>
  );
};

ListItem.defaultProps = {
  isDeleted: false,
  clickableIcon: false,
};

export default ListItem;
