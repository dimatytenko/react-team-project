import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
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
} from './Navigation.styled';

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

export const NavInDrawer = () => {
  return (
    <nav>
      <NavListDrawer>
        <NavItemDrawer>
          <NavLinkDrawerGrey to="/diary" exact="true">
            diary
          </NavLinkDrawerGrey>
        </NavItemDrawer>
        <NavItemDrawer>
          <NavLinkDrawerWhite to="/calculator" exact="true">
            calculator
          </NavLinkDrawerWhite>
        </NavItemDrawer>
      </NavListDrawer>
    </nav>
  );
};
