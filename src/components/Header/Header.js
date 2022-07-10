import { useState } from 'react';
import { Container } from '../Container';
import { NavInHeader } from '../Navigation';
import { BurgerMenu } from '../BurgerMenu';
import { UserInfo } from '../UserInfo';
import { BurgerDrawer } from '../BurgerDrawer';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Logo } from '../Logo';
import { SwitchTheme } from '../../components/SwitchTheme';

import {
  NavWrapper,
  BurgerWrapper,
  HeaderStyled,
} from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  const toggleDrawer = isMenuOpen => event => {
    if (
      event?.type === 'keydown' &&
      (event?.key === 'Tab' || event?.key === 'Shift')
    ) {
      return;
    }
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderStyled>
        <Container>
          <NavWrapper>
            <Logo />
            <NavInHeader />
            {isLoggedIn && (
              <>
                <UserInfo />
                <BurgerWrapper>
                  <BurgerMenu
                    isMenuOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                  />
                </BurgerWrapper>
              </>
            )}
          </NavWrapper>
          {/* <SwitchTheme /> */}
        </Container>
      </HeaderStyled>
      <BurgerDrawer
        setMenuOpen={setMenuOpen}
        isMenuOpen={isMenuOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};
