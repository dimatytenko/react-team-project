import styled from '@emotion/styled';

export const AddButtonBody = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme.backgrounds.buttonPrimary};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
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
