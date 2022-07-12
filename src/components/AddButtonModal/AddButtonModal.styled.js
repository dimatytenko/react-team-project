import styled from '@emotion/styled';

export const AddButtonModalBody = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 44px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'VerdanaBold';
  letter-spacing: 0.04em;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  color: ${props => props.theme.fontColors.buttonPrimary};
  background-color: ${props =>
    props.theme.backgrounds.buttonPrimary};
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
