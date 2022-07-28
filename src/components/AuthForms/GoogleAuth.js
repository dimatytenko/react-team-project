import { ButtonGoogle } from './forms.styled';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from 'react-i18next';

import { baseURL } from '../../libs/constants';
import '../../utils/i18next';

export default function GoogleAuth() {
  const { t } = useTranslation();

  return (
    <>
      <ButtonGoogle href={`${baseURL}/users/google`}>
        {t('auth.google')}{' '}
        <FcGoogle size={30} style={{ marginLeft: 5 }} />
      </ButtonGoogle>
    </>
  );
}
