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
    props.theme.backgrounds.bodyPrimary};
  border-bottom: 2px solid #e0e0e0;
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
    align-items: baseline;
    justify-content: start;
  `)}
`;

export const BurgerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -12px;
  ${mediaTablet(`
      margin-left: 26px;
  `)};
  ${mediaDesktop(`
      display: none;
  `)}
`;

export const UserInfoWrapperDesc = styled.div`
  display: none;
  gap: 30px;
  ${mediaTablet(`
      display: flex;
      margin-left: 384px;
  `)}
  ${mediaDesktop(`
      margin-left: auto;
      margin-right: 12px;
  `)}
`;

export const UserBarMobile = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
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
