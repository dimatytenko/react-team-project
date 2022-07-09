import { useState } from 'react';
import { Container } from '../Container';
import { NavInHeader } from '../Navigation';
import { BurgerMenu } from '../BurgerMenu';
import { UserInfo } from '../UserInfo';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import {
  NavWrapper,
  BurgerWrapper,
  Logo,
  HeaderStyled,
} from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );
  return (
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
      </Container>
    </HeaderStyled>
  );
};