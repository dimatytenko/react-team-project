import React from 'react';
// import { useDispatch } from 'react-redux';
// import { googleAuth } from '../../redux/auth/authOperations';
import { ButtonGoogle } from './forms.styled';
import { FcGoogle } from 'react-icons/fc';
import { baseURL } from '../../libs/constants';

export default function GoogleAuth() {
  //   const dispatch = useDispatch();

  return (
    <>
      <ButtonGoogle
        //   -- прямой запрос на бек для входа через гугл
        href={`${baseURL}/users/google`}

        // type="button"
        // onClick={() => dispatch(googleAuth())}
      >
        SignIn with{' '}
        <FcGoogle size={30} style={{ marginLeft: 5 }} />
      </ButtonGoogle>
    </>
  );
}
