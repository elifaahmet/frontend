/**@format */
import styled from '@emotion/styled';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const AccountBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & {
    .error-message {
      padding-inline-start: ${(props) =>
        calculateWithUnit(48, 'rem', props.theme)};
    }
  }
`;

export const AccountBalanceInnerWrapper = styled.div`
  display: flex;
  align-items: center;

  & {
    .icon-wrapper {
    }

    .account-details {
      display: flex;
      flex-direction: column;
      max-height: ${(props) => calculateWithUnit(65, 'rem', props.theme)};

      .amount {
        font-size: ${(props) =>
          calculateWithUnit(props.theme.__fontSize(18), 'rem', props.theme)};
        line-height: ${(props) => props.theme.__lineHeight(1.2)};
      }
    }
  }
`;
