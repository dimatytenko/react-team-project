import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Form } from 'formik';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const FormContainer = styled.div`
  ${mediaTablet(
    ` max-width: 512px;
    `
  )}
`;

export const FormTitle = styled.h1`
  font-family: 'VerdanaBold';
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 32px;
  color: ${props => props.theme.fontColors.secondary};

  ${mediaTablet(
    ` font-size: 34px;
      line-height: 41px;
      margin-bottom: 68px;`
  )}
`;

export const TextFieldStyled = styled(TextField)`
  display: block;
  margin-bottom: 32px;
  ${mediaTablet(` 
&:last-of-type {
    margin-bottom: 48px;
  }
 `)}
  label {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${props => props.theme.fontColors.primary};
  }
  input {
    width: 240px;
    position: relative;
  }
  p {
    position: absolute;
    color: #cc5500;
  }
`;

export const FormFlexContainer = styled.div`
  ${mediaTablet(` 
  display: flex;
 `)}
`;

export const FormFlexContainerLeft = styled.div`
  ${mediaTablet(` 
  margin-right: 32px;
 `)}
`;

export const RadioButtonsTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
`;

export const RadioButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  &:not(:first-of-type) {
    margin-left: 24px;
  }
  ${mediaTablet(` 
&:not(:first-of-type) {
margin-left: 28px;
}
`)}
`;

export const RadioButtonInput = styled.input`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const RadioButtonLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.primary};
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 13px 25px;
  letter-spacing: 0.04em;
  margin-top: 40px;
  color: ${props => props.theme.fontColors.buttonPrimary};
  background: ${props =>
    props.theme.fontColors.buttonSecondary};
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: transform 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CalculatorForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaTablet(` 
align-items: flex-start;
`)}
  ${mediaDesktop(` 
align-items: center;
`)}
`;
