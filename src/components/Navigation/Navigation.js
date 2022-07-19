import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Container } from '../Container';
import { ROUTES } from '../../routes';
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
  NavigationNotSigned,
} from './Navigation.styled';
import propTypes from 'prop-types';

export const NavInHeader = () => {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  return (
    <>
      {!isLoggedIn ? (
        <NavigationNotSigned>
          <NavListNotSigned>
            <NavItem>
              <NavLinkBlack to={ROUTES.login.path}>
                {ROUTES.login.title}
              </NavLinkBlack>
            </NavItem>
            <NavItem>
              <NavLinkGrey to={ROUTES.register.path}>
                {ROUTES.register.title}
              </NavLinkGrey>
            </NavItem>
          </NavListNotSigned>
        </NavigationNotSigned>
      ) : (
        <nav>
          <NavListSigned>
            <NavItem>
              <NavLinkBlack to={ROUTES.diary.path}>
                {ROUTES.diary.title}
              </NavLinkBlack>
            </NavItem>
            <NavItem>
              <NavLinkGrey to={ROUTES.calculator.path}>
                {ROUTES.calculator.title}
              </NavLinkGrey>
            </NavItem>
          </NavListSigned>
        </nav>
      )}
    </>
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
                onClick={event => setMenuOpen(!isMenuOpen)}
              >
                diary
              </NavLinkDrawerGrey>
            </NavItemDrawer>
            <NavItemDrawer>
              <NavLinkDrawerWhite
                to="/calculator"
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
