/**@format */
import styled from '@emotion/styled';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const ConfirmationSummary = styled.div`
  text-align: center;

  & {
    .money-portion {
      font-size: ${(props) =>
        calculateWithUnit(props.theme.__fontSize(30), 'rem', props.theme)};
      font-weight: bold;
    }
  }
`;

export const SendToUser = styled.div`
  display: flex;
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.offset, 'rem', props.theme)};
  padding-inline-end: ${(props) =>
    calculateWithUnit(props.theme.offset, 'rem', props.theme)};
  border-bottom: ${(props) =>
    `${calculateWithUnit(3, 'rem', props.theme)} solid ${
      props.theme.colorScheme.secondary.brand
    }`};
  margin-inline-start: ${(props) =>
    calculateWithUnit(-props.theme.offset, 'rem', props.theme)};
`;

export const OptionInternationTransferText = styled.div`
  text-align: center;
  opacity: 0.75;

  & {
    .underline {
      text-decoration: underline;
    }
  }
`;

export const FromAccountBalance = styled.div`
  display: flex;
  flex-direction: row;

  & {
    span.svg-wrapper {
      margin: ${(props) =>
        calculateWithUnit(props.theme.__spacer(20), 'rem', props.theme)};
      margin-inline-start: 0;
      display: inline-flex;
    }

    .account-balance {
      display: inline-flex;
      flex-direction: column;

      & {
        label {
          display: block;
          padding-block-start: ${(props) =>
            calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
        }
      }
    }
  }
`;

export const TransferCompleteSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & {
    div {
      display: flex;
      justify-content: center;
    }

    p {
      text-align: center;

      &.sent-text {
        color: ${(props) => props.theme.colorScheme.primary.text};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        font-size: ${(props) =>
          calculateWithUnit(props.theme.__fontSize(21), 'rem', props.theme)};
        line-height: ${(props) => props.theme.__lineHeight(1.33)};

        & {
          .currency {
            font-weight: ${(props) => props.theme.fontWeight.regular};
            font-size: ${(props) =>
              calculateWithUnit(
                props.theme.__fontSize(16),
                'rem',
                props.theme
              )};
            line-height: ${(props) => props.theme.__lineHeight(1.06)};
          }
        }
      }
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
`;
