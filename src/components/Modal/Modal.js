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
} from './Modal.styled';
import arrow from '../../images/arrow.svg';
import { useEffect } from 'react';

export function Modal({
  modalData,
  onClick,
  modalCloseBtn,
}) {
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
      <ModalWindow>
        <Title>
          Your recommended daily calorie intake is
        </Title>
        <DailyRate>
          {Math.round(modalData.dailyRate)}
          <Kcal> kcal</Kcal>
        </DailyRate>
        <TitleNotEat>Foods you should not eat</TitleNotEat>
        <ListNotEat start="1">
          {modalData.notHealthy.map(item => (
            <ListNotEatItem key={item._id}>
              {item.title.en}
            </ListNotEatItem>
          ))}
        </ListNotEat>
        <LinkHome to="/register">
          <Button type="button">Start losing weight</Button>
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
