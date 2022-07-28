import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  authSelectors,
  authOperations,
} from '../../redux/auth';
import { UserName, UserButton } from './UserInfo.styled';
import { AlertModal } from '../AlertModal';
import { correctUserName } from '../../functions/correctUserName';
import '../../utils/i18next';

export function UserInfo() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const logOut = () => {
    dispatch(authOperations.logOut());
    handleClose();
  };

  return (
    <>
      <UserName>{correctUserName(nameUser)}</UserName>
      <UserButton onClick={handleOpen} type="button">
        {t('userInfo.exit')}
      </UserButton>
      <AlertModal
        open={open}
        handleClose={handleClose}
        handleConfirm={logOut}
        text={t('userInfo.wantExit')}
      ></AlertModal>
    </>
  );
}
