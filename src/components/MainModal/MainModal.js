import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Overlay,
  BtnCloseModalMobile,
  ModalWindow,
  BtnCloseModal,
  ImgClose,
} from './MainModal.styled';
import arrow from '../../assets/icons/arrow.svg';
import { Container } from '../Container';

const modalRoot = document.querySelector('#modal-root');

export function MainModal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Container>
          <BtnCloseModalMobile
            type="button"
            onClick={onClose}
          >
            <img src={arrow} alt="arrow" />
          </BtnCloseModalMobile>
          {children}
        </Container>
        <BtnCloseModal type="button" onClick={onClose}>
          <ImgClose />
        </BtnCloseModal>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}

MainModal.propTypes = {
  onClose: PropTypes.func,
};
