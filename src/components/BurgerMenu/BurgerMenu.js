import { Turn as Hamburger } from 'hamburger-react';

export const BurgerMenu = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <Hamburger
      toggled={isMenuOpen}
      toggle={setMenuOpen}
      size={20}
      color={'#212121'}
    />
  );
};
