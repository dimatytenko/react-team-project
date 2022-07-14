import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  authSelectors,
  authOperations,
} from '../../redux/auth';

import { UserName, UserButton } from './UserInfo.styled';
import { AlertModal } from '../AlertModal';

export function UserInfo() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // onClick={() => dispatch(authOperations.logOut())}
  const logOut = () => {
    dispatch(authOperations.logOut());
    handleClose();
  };

  return (
    <>
      <UserName>{nameUser}</UserName>
      <UserButton onClick={handleOpen} type="button">
        Exit
      </UserButton>
      <AlertModal
        open={open}
        handleClose={handleClose}
        handleConfirm={logOut}
        text={'Are you sure you want to exit?'}
      ></AlertModal>
    </>
  );
}
