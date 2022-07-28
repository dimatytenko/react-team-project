import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
import '../../utils/i18next';

export const NavInHeader = () => {
  const { t } = useTranslation();
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
                {t('auth.signTitle')}
              </NavLinkBlack>
            </NavItem>
            <NavItem>
              <NavLinkGrey to={ROUTES.register.path}>
                {t('auth.registerTitle')}
              </NavLinkGrey>
            </NavItem>
          </NavListNotSigned>
        </NavigationNotSigned>
      ) : (
        <nav>
          <NavListSigned>
            <NavItem>
              <NavLinkBlack to={ROUTES.diary.path}>
                {t('nav.diary')}
              </NavLinkBlack>
            </NavItem>
            <NavItem>
              <NavLinkGrey to={ROUTES.calculator.path}>
                {t('nav.calc')}
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
  const { t } = useTranslation();

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
                {t('nav.diary')}
              </NavLinkDrawerGrey>
            </NavItemDrawer>
            <NavItemDrawer>
              <NavLinkDrawerWhite
                to="/calculator"
                onClick={event => setMenuOpen(!isMenuOpen)}
              >
                {t('nav.calc')}
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
