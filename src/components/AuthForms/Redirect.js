import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { googleAuth } from '../../redux/auth/authOperations';

// ---- для вытягивания параметров с URL которые присылает бек -------
export const Redirect = props => {
  //useState(defaultState);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log('SP_token:', searchParams.get('token'));
    console.log('SP_email:', searchParams.get('email'));
    console.log('SP_name:', searchParams.get('name'));

    const SP_token = searchParams.get('token');
    const SP_email = searchParams.get('email');
    const SP_name = searchParams.get('name');

    const Sdata = {
      user: {
        name: SP_name,
        email: SP_email,
      },
      token: SP_token,
    };
    console.log(Sdata);
    dispatch(googleAuth(Sdata));
  }, [searchParams]);

  return (
    <div>
      <Rings />
    </div>
  );
};
