import { GoPlus } from 'react-icons/go';
import { useSelector } from 'react-redux';

import { AddButtonBody } from './AddButton.styled';
import { themeSelectors } from '../../redux/theme';

export function AddButton() {
  const isTheme = useSelector(themeSelectors.getTheme);

  return (
    <AddButtonBody>
      <GoPlus
        size={22}
        color={!isTheme ? '#ffffff' : '#9B9FAA'}
      />
    </AddButtonBody>
  );
}
