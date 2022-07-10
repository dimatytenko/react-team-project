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
  transition: background-color
    ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.hovers.secondary};
  }
`;
