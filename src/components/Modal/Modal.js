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
} from './Modal.styled';
import arrow from '../../images/arrow.svg';

export function Modal({
  modalData,
  onClick,
  modalCloseBtn,
}) {
  console.log(modalData);

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
