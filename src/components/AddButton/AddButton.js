import { GoPlus } from 'react-icons/go';
import PropTypes from 'prop-types';

import { AddButtonBody } from './AddButton.styled';

export function AddButton({ theme }) {
  return (
    <AddButtonBody>
      <GoPlus
        size={22}
        color={theme.fontColors.buttonPrimary}
      />
    </AddButtonBody>
  );
}
AddButton.propTypes = {
  theme: PropTypes.object.isRequired,
};
