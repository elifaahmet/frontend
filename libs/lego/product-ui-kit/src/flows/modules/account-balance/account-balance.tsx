/**@format */
import { useTheme } from '@emotion/react';
import React from 'react';

import {
  B3,
  InputStyleText,
  L1,
  Spacer,
  formatNumberToMoneyString,
} from '@tend/lego/product-ui-kit';
import { SVGIcon, SVGIconProps } from '@tend/shared/design/ui-kit';

import {
  AccountBalanceInnerWrapper,
  AccountBalanceWrapper,
} from './account-balance.styled';

export interface AccountBalanceProps {
  amount: number;
  accountType: 'checking' | 'savings';
  accountNumberLastFour: number | string;
  errorMessage?: string;
}

export const AccountBalance: React.FC<AccountBalanceProps> = (props) => {
  const theme = useTheme();

  const { amount, accountType, accountNumberLastFour, errorMessage } = props;

  const svgIconProps: SVGIconProps = {
    iconName:
      accountType === 'checking' ? 'checking-compact' : 'checking-and-savings',
    boxSize: 32,
    color: accountType === 'checking' ? 'primary-magenta' : 'primary-yellow',
  };

  return (
    <AccountBalanceWrapper>
      <AccountBalanceInnerWrapper>
        <div className="icon-wrapper">
          <Spacer top={accountType === 'checking' ? 0 : 4} right={16}>
            <SVGIcon {...svgIconProps} />
          </Spacer>
        </div>
        <div className="account-details">
          <L1>
            {accountType.toUpperCase()} ({accountNumberLastFour})
          </L1>
          <Spacer top={16} />
          <InputStyleText
            variant="single-digit"
            className="amount"
            color={
              !errorMessage
                ? theme.colorSchemeConfig.primary.text
                : theme.colorSchemeConfig.state.error
            }
          >
            {formatNumberToMoneyString(amount)}
          </InputStyleText>
          <Spacer top={16} />
        </div>
      </AccountBalanceInnerWrapper>
      {!!errorMessage && (
        <B3
          color={theme.colorSchemeConfig.state.error}
          className="error-message"
        >
          {errorMessage}
        </B3>
      )}
    </AccountBalanceWrapper>
  );
};

export default AccountBalance;
