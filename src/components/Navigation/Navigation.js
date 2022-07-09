import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Container } from '../Container';
import {
  NavListSigned,
  NavListNotSigned,
  NavItem,
  NavLinkBlack,
  NavLinkGrey,
  NavListDrawer,
  NavItemDrawer,
  NavLinkDrawerGrey,
  NavLinkDrawerWhite,
  NavDrawerWrapper,
} from './Navigation.styled';
import propTypes from 'prop-types';

export const NavInHeader = () => {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  return (
    <nav>
      {!isLoggedIn ? (
        <NavListNotSigned>
          <NavItem>
            <NavLinkBlack to="/login" exact="true">
              sign in
            </NavLinkBlack>
          </NavItem>
          <NavItem>
            <NavLinkGrey to="/register" exact="true">
              registration
            </NavLinkGrey>
          </NavItem>
        </NavListNotSigned>
      ) : (
        <NavListSigned>
          <NavItem>
            <NavLinkBlack to="/diary" exact="true">
              diary
            </NavLinkBlack>
          </NavItem>
          <NavItem>
            <NavLinkGrey to="/calculator" exact="true">
              calculator
            </NavLinkGrey>
          </NavItem>
        </NavListSigned>
      )}
    </nav>
  );
};

export const NavInDrawer = ({
  setMenuOpen,
  isMenuOpen,
}) => {
  return (
    <Container>
      <NavDrawerWrapper>
        <nav>
          <NavListDrawer>
            <NavItemDrawer>
              <NavLinkDrawerGrey
                to="/diary"
                exact="true"
                onClick={event => setMenuOpen(!isMenuOpen)}
              >
                diary
              </NavLinkDrawerGrey>
            </NavItemDrawer>
            <NavItemDrawer>
              <NavLinkDrawerWhite
                to="/calculator"
                exact="true"
                onClick={event => setMenuOpen(!isMenuOpen)}
              >
                calculator
              </NavLinkDrawerWhite>
            </NavItemDrawer>
          </NavListDrawer>
        </nav>
      </NavDrawerWrapper>
    </Container>
  );
};

NavInDrawer.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
  setMenuOpen: propTypes.func.isRequired,
};
