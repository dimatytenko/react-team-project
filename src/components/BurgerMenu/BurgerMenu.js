import { Turn as Hamburger } from 'hamburger-react';
import propTypes from 'prop-types';

export const BurgerMenu = ({
  isMenuOpen,
  setMenuOpen,
  toggleDrawer,
}) => {
  return (
    <Hamburger
      toggled={isMenuOpen}
      toggle={setMenuOpen}
      size={20}
      color={'#212121'}
      onToggle={toggleDrawer}
    />
  );
};

BurgerMenu.propTypes = {
  toggleDrawer: propTypes.func.isRequired,
  isMenuOpen: propTypes.bool.isRequired,
  setMenuOpen: propTypes.func.isRequired,
};
