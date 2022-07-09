import {
  BtnCloseModal,
  ImgClose,
  ModalWindow,
  Overlay,
  Title,
} from './Modal.styled';

export function Modal({
  modalData,
  onClick,
  modalCloseBtn,
}) {
  console.log(modalData);

  return (
    <Overlay onClick={event => onClick(event)}>
      <ModalWindow>
        <Title>
          Your recommended daily calorie intake is
        </Title>
        <div>{modalData.dailyRate}kcal</div>
        <p>Foods you should not eat</p>
        <ul>
          {modalData.notHealthy.map(item => (
            <li key={item._id}>{item.title.en}</li>
          ))}
        </ul>
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
