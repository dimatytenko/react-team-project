import { DrawerStyled } from './BurgerDrawer.styled';
import { NavInDrawer } from '../Navigation';
import propTypes from 'prop-types';

export const BurgerDrawer = ({
  toggleDrawer,
  isMenuOpen,
  setMenuOpen,
}) => {
  return (
    <DrawerStyled
      anchor="bottom"
      open={isMenuOpen}
      onClose={toggleDrawer}
    >
      <NavInDrawer
        setMenuOpen={setMenuOpen}
        isMenuOpen={isMenuOpen}
      />
    </DrawerStyled>
  );
};

BurgerDrawer.propTypes = {
  toggleDrawer: propTypes.func.isRequired,
  isMenuOpen: propTypes.bool.isRequired,
  setMenuOpen: propTypes.func.isRequired,
};
