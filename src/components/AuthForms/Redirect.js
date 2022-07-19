import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { googleAuth } from '../../redux/auth/authOperations';

export const Redirect = props => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
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

    dispatch(googleAuth(Sdata));
  }, [dispatch, searchParams]);

  return (
    <div>
      <Rings />
    </div>
  );
};
