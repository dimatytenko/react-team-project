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
    const SP_height = searchParams.get('height');
    const SP_age = searchParams.get('age');
    const SP_weight_current = searchParams.get(
      'weight_current'
    );
    const SP_weight_desired = searchParams.get(
      'weight_desired'
    );
    const SP_blood = searchParams.get('blood');

    const Sdata = {
      user: {
        name: SP_name,
        email: SP_email,
        height: Number(SP_height) || null,
        age: Number(SP_age) || null,
        weight_current: Number(SP_weight_current) || null,
        weight_desired: Number(SP_weight_desired) || null,
        blood: Number(SP_blood) || null,
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
