import { ButtonGoogle } from './forms.styled';
import { FcGoogle } from 'react-icons/fc';
import { baseURL } from '../../libs/constants';

export default function GoogleAuth() {
  return (
    <>
      <ButtonGoogle href={`${baseURL}/users/google`}>
        SignIn with{' '}
        <FcGoogle size={30} style={{ marginLeft: 5 }} />
      </ButtonGoogle>
    </>
  );
}
