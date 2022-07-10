import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const UserInfowrapper = styled.div`
  display: none;
  gap: 30px;
  ${mediaTablet(`
      display: flex;
      margin-left: auto;
  `)}
  ${mediaDesktop(`
      margin-left: auto;
      margin-right: 12px;
  `)}
`;

export const UserName = styled.button`
  position: relative;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'GothamproBold';
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.secondary};
  transition: color
      ${props => props.theme.transitions.primary},

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    width: 32px;
    background-color: #e0e0e0;
    transform-origin: center center;
    transform: rotate(90deg);
  }
`;

export const UserButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'GothamproBold';
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.primary};
  transition: color
      ${props => props.theme.transitions.primary},
    font-size ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }
`;
