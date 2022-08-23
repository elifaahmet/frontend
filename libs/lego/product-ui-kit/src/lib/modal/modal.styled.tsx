/** @format */

import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const ANIMATION_TIMING_MS = 150;
export const ICON_BOX_SIZE = 24;

/**
 * @tech-debt: Replace animation values with tokens one we have them.
 */
export const StyledModal = styled.div<{ isVisible: boolean }>`
  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
  z-index: ${(props) => props.theme.zIndex.modal};
  animation: ${150}ms ease-in-out 0ms 1
    ${(props) => (props.isVisible ? 'slideUp' : 'slideDown')} forwards;

  background-color: ${(props) => props.theme.colorScheme.secondary.brand};
  color: ${(props) => props.theme.colorScheme.neutral.light};
  width: 100%;
  max-height: 90vh;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: ${(props) => calculateWithUnit(16, 'rem', props.theme)};
  border-start-start-radius: ${(props) =>
    calculateWithUnit(8, 'rem', props.theme)};
  border-start-end-radius: ${(props) =>
    calculateWithUnit(8, 'rem', props.theme)};

  & {
    .modal-header {
      display: flex;
      flex-direction: row-reverse;
      margin: 0;
      padding: 0;
      padding-block-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        background: none;
        border: none;
      }
    }
    .modal-title {
      display: flex;
      margin-inline-start: auto;
      margin-inline-end: auto;
      align-items: center;
      padding-inline-start: calc(
        ${(props) => calculateWithUnit(ICON_BOX_SIZE, 'rem', props.theme)}
      );
    }
    .modal-content {
      margin: 0;
      padding-block-start: ${(props) =>
        calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
      padding-block-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};

      overflow-y: auto;
      max-height: calc(
        90vh -
          ${(props) =>
            calculateWithUnit(
              3 * props.theme.__spacer(16) + ICON_BOX_SIZE,
              'rem',
              props.theme
            )}
      );
    }

    .modal-body {
      margin: 0;
      padding: 0;
    }

    .modal-action {
      margin: 0;
      padding: 0;
      padding-block-start: ${(props) =>
        calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
    }
  }
`;
