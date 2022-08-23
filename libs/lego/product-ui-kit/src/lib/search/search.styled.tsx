/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchResults = styled.div<{ topY: number }>`
  position: fixed;
  top: ${(props) => calculateWithUnit(props.topY, 'rem', props.theme)};
  left: 0;
  width: 100vw;
  height: calc(
    100% - ${(props) => calculateWithUnit(props.topY, 'rem', props.theme)}
  );
  background: ${(props) => props.theme.colorScheme.secondary.background};
  z-index: ${(props) => props.theme.zIndex.dropdown};

  & {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      & > li {
        padding: ${(props) =>
            calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)}
          ${(props) => calculateWithUnit(30, 'rem', props.theme)};
        color: ${(props) => `${props.theme.color['neutral-off-white']}80`};
        user-select: none;

        &:active {
          background: ${(props) => props.theme.colorScheme.primary.background};
          color: ${(props) => props.theme.color['neutral-white']};
        }

        .highlighted {
          color: ${(props) => props.theme.color['neutral-white']};
        }
      }
    }
  }
`;
