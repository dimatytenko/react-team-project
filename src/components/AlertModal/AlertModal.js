import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {
  ButtonConfirm,
  Button,
  ButtonWrapper,
  AlertTitle,
} from './AlertModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 310,
  borderRadius: '4px',
  bgcolor: '#fff',
  p: 4,
  '@media (min-width: 768px)': {
    width: 400,
  },
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
            <ButtonConfirm onClick={handleConfirm}>
              YES
            </ButtonConfirm>
            <Button onClick={handleClose}>NO</Button>
          </ButtonWrapper>
        </Box>
      </Modal>
    </>
  );
}
