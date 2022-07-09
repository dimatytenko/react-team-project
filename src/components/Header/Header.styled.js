import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const HeaderStyled = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  padding: 18px 0 16px 0;
  background-color: ${props =>
    props.theme.fontColors.buttonPrimary};
  border-bottom: 2px solid #e0e0e0;
  ${mediaDesktop(`
    padding: 80px 0 20px 0;
    background-color: transparent;
    border-bottom: none;
  `)}
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mediaDesktop(`
    justify-content: start;
  `)}
`;

export const BurgerWrapper = styled.div`
  ${mediaTablet(`
      margin-left: 26px;
  `)};
  ${mediaDesktop(`
      display: none;
  `)}
`;

// тимчасова заглушка
export const Logo = styled.div`
  width: 47px;
  height: 44px;
  background-color: tomato;
  ${mediaTablet(`
       width: 162px;
  `)}
  ${mediaDesktop(`
       width: 167px;
       height: 66px;
       margin-right: 40px;
  `)}
`;
