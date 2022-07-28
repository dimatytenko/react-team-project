import { useTranslation } from 'react-i18next';

import { AddButtonModalBody } from './AddButtonModal.styled';
import '../../utils/i18next';

export function AddButtonModal() {
  const { t } = useTranslation();

  return (
    <AddButtonModalBody>
      {t('diary.add')}
    </AddButtonModalBody>
  );
}
