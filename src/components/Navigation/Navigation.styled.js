import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import {
  mediaPhone,
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const NavigationNotSigned = styled.nav`
  ${mediaTablet(`
  margin-left: auto;
`)}
  ${mediaDesktop(`
  margin-left: 0;
`)}
`;

export const NavListSigned = styled.ul`
  display: none;

  ${mediaDesktop(
    `position: relative;
     display: flex;
     align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -19%;
    height: 2px;
    width: 32px;
    background-color: #e0e0e0;
    transform: rotate(90deg);
  }`
  )}
`;

export const NavListNotSigned = styled.ul`
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    ${mediaPhone(`display: none;`)}
    ${mediaDesktop(`
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: -19%;
    height: 2px;
    width: 32px;
    background-color: #e0e0e0;
    transform: rotate(90deg);
  `)}
  }
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const NavLinkBlack = styled(NavLink)`
  font-family: 'GothamproBold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.fontColors.secondary};
  transition: color
      ${props => props.theme.transitions.primary},
    font-size ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }

  &.active {
    color: ${props => props.theme.fontColors.modify};
  }
`;

export const NavLinkGrey = styled(NavLinkBlack)`
  color: ${props => props.theme.fontColors.primary};
`;

export const NavDrawerWrapper = styled.div`
  padding: 60px 0 40px 0;
  ${mediaTablet(`
  padding: 100px 0 40px 0;
`)}
`;

export const NavListDrawer = styled.ul`
  text-align: center;
`;

export const NavItemDrawer = styled.li`
  &:not(:last-child) {
    margin-bottom: 28px;
  }
`;

export const NavLinkDrawerGrey = styled(NavLink)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.fontColors.primary};
  transition: color
      ${props => props.theme.transitions.primary},
    font-size ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }

  &.active {
    color: ${props => props.theme.fontColors.modify};
  }

  ${mediaTablet(`
  font-size: 24px;
  line-height: 1.2;
`)}
`;

export const NavLinkDrawerWhite = styled(NavLinkDrawerGrey)`
  color: ${props => props.theme.fontColors.buttonPrimary};
`;
