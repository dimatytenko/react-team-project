import styled from '@emotion/styled';

export const AlertTitle = styled.p`
  font-family: 'Verdana';
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 80px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
  }
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
