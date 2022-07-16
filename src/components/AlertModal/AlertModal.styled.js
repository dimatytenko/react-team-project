import styled from '@emotion/styled';
import { mediaTablet } from '../../functions/media';

export const AlertTitle = styled.p`
  font-family: 'Verdana';
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #212121;
  margin-bottom: 20px;
  ${mediaTablet(`
    font-size: 14px;
  `)}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonConfirm = styled.button`
  width: 80px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  cursor: pointer;
  margin-right: 20px;
  color: ${props => props.theme.fontColors.buttonPrimary};
  background: ${props =>
    props.theme.backgrounds.buttonPrimary};
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: transform
      ${props => props.theme.transitions.primary},
    background-color
      ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props =>
      props.theme.hovers.secondary};
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: ${props => props.theme.fontColors.buttonSecondary};
  background: ${props =>
    props.theme.backgrounds.buttonSecondary};
  border: none;
  border: 2px solid
    ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 30px;
  transition: transform
    ${props => props.theme.transitions.primary};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
