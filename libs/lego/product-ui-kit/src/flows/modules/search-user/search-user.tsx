/**@format */
import React from 'react';

import {
  B1,
  ListContainer,
  ListItem,
  ListItemDataUser,
  Spacer,
} from '@tend/lego/product-ui-kit';
import { Input } from '@tend/shared/design/ui-kit';

import { IUser } from '../../types';
import { OptionInternationTransferText } from '../../views/core-app/p2p-cross-border-transfer/send-money/initiate-transfer/components/initiate-transfer.styled';
import {
  SearchUserContainer,
  SearchUserFieldWrapper,
} from './search-user.styled';

export interface SearchUserProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchResults?: Array<{ data: IUser }>;
  bankText: string;
  withNavigate: (user: IUser) => () => void;
  noUserFoundMessage: String;
}

export const SearchUser: React.FC<SearchUserProps> = (props) => {
  const inputProps = {
    type: 'text',
    name: 'search-user',
    placeholder: 'TendID, email, or mobile',
    error: false,
    variant: 'boxed' as const,
    label: 'send money to',
    onChange: props.onChange,
  };

  const { searchResults, bankText, withNavigate, noUserFoundMessage } = props;

  return (
    <SearchUserContainer className="module-search-user">
      <Spacer left={16} right={16}>
        <SearchUserFieldWrapper>
          <Input {...inputProps} />
        </SearchUserFieldWrapper>
        <Spacer bottom={20}>
          <OptionInternationTransferText>
            <B1>{bankText}</B1>
          </OptionInternationTransferText>
        </Spacer>
      </Spacer>
      {searchResults && !!searchResults.length && (
        <ListContainer
          isListScrollable={true}
          headerProps={{ left: 16, right: 16 }}
          itemsProps={{ left: 16, right: 16 }}
        >
          {searchResults.map((user) => (
            <ListItem
              key={user.data.tendId}
              {...user}
              onClick={withNavigate(user.data)}
            >
              <ListItemDataUser {...user} key={user.data.tendId} />
            </ListItem>
          ))}
        </ListContainer>
      )}
      <Spacer bottom={20}>
        <OptionInternationTransferText>
          <B1>{noUserFoundMessage}</B1>
        </OptionInternationTransferText>
      </Spacer>
    </SearchUserContainer>
  );
};

export default SearchUser;
