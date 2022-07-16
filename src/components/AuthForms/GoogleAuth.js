import React from 'react';
import { useDispatch } from 'react-redux';
import { googleAuth } from '../../redux/auth/authOperations';
import { ButtonGoogle } from './forms.styled';

export default function GoogleAuth() {
  const dispatch = useDispatch();

  return (
    <ButtonGoogle
      type="button"
      onClick={() => dispatch(googleAuth())}
    >
      Sign in with Google
    </ButtonGoogle>
  );
}
