import styled from '@emotion/styled';
//import { VscSettingsGear } from 'react-icons/vsc';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 18px 0 16px 0;
  background-color: ${props =>
    props.theme.backgrounds.bodyPrimary};
  transition: background-color
    ${props => props.theme.transitions.primary};
  border-bottom: 2px solid #e0e0e0;

  ${mediaTablet(`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  `)}

  ${mediaDesktop(`
    padding: 80px 0 20px 0;
    background-color: transparent;
    border-bottom: none;
  `)}
`;

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mediaTablet(`
    justify-content: start;
  `)}
  ${mediaDesktop(`
    align-items: end;
    justify-content: start;
  `)}
`;

export const BurgerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -12px;
  ${mediaDesktop(`
      display: none;
  `)}
`;

export const UserInfoWrapperDesc = styled.div`
  display: none;
  gap: 30px;
  ${mediaTablet(`
      display: flex;
      margin-left: auto;
      margin-right: 74px;

  `)}
  ${mediaDesktop(`
      margin-right: 12px;
  `)}
`;

export const UserBarMobile = styled.div`
  width: 100%;
  padding: 15px 0 13px 0;
  background-color: ${props =>
    props.theme.backgrounds.userInfo};
  ${mediaTablet(`
      display: none;
  `)}
`;

export const UserInfoWrapperMobile = styled.div`
  display: flex;
  justify-content: end;
  gap: 30px;
`;

// export const SettingsIcon = styled.div`
//   position: absolute;
//   right: 0;
//   top: 30px;

//   transform: rotate(90deg);
// `;
