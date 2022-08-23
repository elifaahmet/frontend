/** @format */

import React, { useState, useEffect, ReactNode } from 'react';
import ModalOverlay from './modal-overlay';
import {
  StyledModal,
  ANIMATION_TIMING_MS,
  ICON_BOX_SIZE,
} from './modal.styled';
import {
  SVGIcon,
  ButtonProduct,
  ButtonProps,
} from '@tend/shared/design/ui-kit';
import { L1 } from '../typography/labels';

export interface ModalAction {
  type: 'cancel' | 'confirm' | 'custom';
  buttonProps: ButtonProps;
}

export interface ModalProps {
  show: boolean;
  title?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
  children: ReactNode;
  actions?: ModalAction[];
}

export const Modal: React.FC<ModalProps> = (props) => {
  const [showModal, setShowModal] = useState(props.show);
  const [clear, setClear] = useState(true);

  useEffect(() => {
    if (!showModal) {
      setTimeout(() => setClear(true), ANIMATION_TIMING_MS);
    }
  }, [showModal]);

  useEffect(() => {
    if (props.show) {
      setClear(false);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [props.show]);

  const closeModal = () => {
    setShowModal(false);
    if (props.onClose) props.onClose();
  };

  const onCancel = () => {
    if (props.onCancel) props.onCancel();
    closeModal();
  };

  const onConfirm = () => {
    if (props.onConfirm) props.onConfirm();
    closeModal();
  };

  return clear ? null : (
    <ModalOverlay>
      <StyledModal isVisible={showModal}>
        <div className="modal-header">
          <button onClick={onCancel}>
            <SVGIcon
              iconName="close"
              color="neutral-white"
              boxSize={ICON_BOX_SIZE}
            />
          </button>
          <div className="modal-title" hidden={!props.title}>
            <L1>{props.title}</L1>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-body">{props.children}</div>
          {props.actions &&
            props.actions.map((action, index) => {
              const { buttonProps, type } = action;
              const { children, ...restProps } = buttonProps;

              const spreadProps = { ...restProps, children };
              switch (type) {
                case 'cancel':
                  spreadProps.onClick = onCancel;
                  break;
                case 'confirm':
                  spreadProps.onClick = onConfirm;
                  break;
                case 'custom':
                default:
                  if (!spreadProps.twoGang) {
                    spreadProps.onClick = (e) => {
                      restProps.onClick(e);
                      closeModal();
                    };
                  } else {
                    const { twoGang } = spreadProps;
                    const { twoGangOnClick } = twoGang;

                    spreadProps.twoGang.twoGangOnClick = [
                      (e) => {
                        twoGangOnClick[0](e);
                        closeModal();
                      },
                      (e) => {
                        twoGangOnClick[1](e);
                        closeModal();
                      },
                    ];
                  }
              }
              return (
                <div
                  className="modal-action"
                  key={`${children.toString()}-${index}`}
                >
                  <ButtonProduct {...spreadProps} />
                </div>
              );
            })}
        </div>
      </StyledModal>
    </ModalOverlay>
  );
};

export default Modal;
