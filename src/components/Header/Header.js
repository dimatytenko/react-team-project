import { useState } from 'react';
import { Container } from '../Container';
import { NavInHeader } from '../Navigation';
import { BurgerMenu } from '../BurgerMenu';
import { UserInfo } from '../UserInfo';
import { BurgerDrawer } from '../BurgerDrawer';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { LinkLogo } from '../Logo/LinkLogo';

import { SwitchTheme } from '../../components/SwitchTheme';

import {
  NavWrapper,
  HeaderSubContainer,
  BurgerWrapper,
  HeaderStyled,
  UserInfoWrapperDesc,
  UserInfoWrapperMobile,
  UserBarMobile,
  SettingsIcon,
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
        {/* <SettingsIcon>settings</SettingsIcon> */}
        <Container>
          <NavWrapper>
            <LinkLogo />

            <NavInHeader />
            {isLoggedIn && (
              <>
                <UserInfoWrapperDesc>
                  <UserInfo />
                </UserInfoWrapperDesc>
                <BurgerWrapper>
                  <BurgerMenu
                    isMenuOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                    toggleDrawer={toggleDrawer}
                  />
                </BurgerWrapper>
              </>
            )}
          </NavWrapper>
        </Container>
      </HeaderStyled>
      {isLoggedIn && (
        <UserBarMobile>
          <Container>
            <UserInfoWrapperMobile>
              <UserInfo />
            </UserInfoWrapperMobile>
          </Container>
        </UserBarMobile>
      )}
      <BurgerDrawer
        setMenuOpen={setMenuOpen}
        isMenuOpen={isMenuOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};
