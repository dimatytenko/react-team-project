import {
  BtnCloseModal,
  ImgClose,
  ModalWindow,
  Overlay,
  Title,
  BtnCloseModalMobile,
  DailyRate,
  Kcal,
  TitleNotEat,
  ContainerBtnCloseModalMobile,
  ListNotEat,
  ListNotEatItem,
  Button,
  LinkHome,
  sink,
} from './Modal.styled';
import arrow from '../../assets/icons/arrow.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { languageSelectors } from '../../redux/language';

export function Modal({
  modalData,
  onClick,
  modalCloseBtn,
}) {
  const { t } = useTranslation();
  const lang = useSelector(languageSelectors.getLanguage);

  useEffect(() => {
    window.addEventListener('keydown', cleanEventListener);
  });

  const cleanEventListener = e => {
    if (e.code === 'Escape') {
      window.removeEventListener(
        'keydown',
        cleanEventListener
      );
      modalCloseBtn();
    }
  };

  return (
    <Overlay onClick={event => onClick(event)}>
      <ContainerBtnCloseModalMobile>
        <BtnCloseModalMobile
          type="button"
          onClick={modalCloseBtn}
        >
          <img src={arrow} alt="arrow" />
        </BtnCloseModalMobile>
      </ContainerBtnCloseModalMobile>
      <ModalWindow
        className={css`
          animation: ${sink} 0.5s ease;
        `}
      >
        <Title>{t('modal.title')}</Title>
        <DailyRate>
          {Math.round(modalData.dailyRate)}
          <Kcal>{t('summary.kcal')}</Kcal>
        </DailyRate>
        <TitleNotEat>{t('modal.notEat')}</TitleNotEat>
        <ListNotEat start="1">
          {modalData.notHealthy.map(item => (
            <ListNotEatItem key={item._id}>
              {item.title[lang]}
            </ListNotEatItem>
          ))}
        </ListNotEat>
        <LinkHome to="/register">
          <Button type="button">
            {t('calculator.start')}
          </Button>
        </LinkHome>
        <BtnCloseModal
          type="button"
          onClick={modalCloseBtn}
        >
          <ImgClose />
        </BtnCloseModal>
      </ModalWindow>
    </Overlay>
  );
}
