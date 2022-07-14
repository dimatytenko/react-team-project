import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {
  Button,
  ButtonWrapper,
  AlertTitle,
} from './AlertModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#fff',
  p: 4,
};

export function AlertModal({
  open,
  handleClose,
  text,
  handleConfirm,
}) {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AlertTitle>{text}</AlertTitle>
          <ButtonWrapper>
            <Button onClick={handleConfirm}>YES</Button>
            <Button onClick={handleClose}>NO</Button>
          </ButtonWrapper>
        </Box>
      </Modal>
    </>
  );
}
