import { Turn as Hamburger } from 'hamburger-react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { themeSelectors } from '../../redux/theme';

export const BurgerMenu = ({
  isMenuOpen,
  setMenuOpen,
  toggleDrawer,
}) => {
  const isTheme = useSelector(themeSelectors.getTheme);

  return (
    <Hamburger
      toggled={isMenuOpen}
      toggle={setMenuOpen}
      size={20}
      color={isTheme ? '#ffffff' : '#212121'}
      onToggle={toggleDrawer}
    />
  );
};

BurgerMenu.propTypes = {
  toggleDrawer: propTypes.func.isRequired,
  isMenuOpen: propTypes.bool.isRequired,
  setMenuOpen: propTypes.func.isRequired,
};
