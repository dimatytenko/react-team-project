import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Form, Field } from 'formik';
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
  font-family: 'Verdana';
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
  margin-bottom: 16px;
  ${mediaTablet(` 
  margin-bottom: 20px;
 `)}

  label {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${props => props.theme.fontColors.primary};
  }
  div {
    &::before {
      border-bottom: none;
    }
    &::after {
      border-bottom: none;
    }
  }

  input {
    width: 280px;
    ${mediaTablet(` 
     width: 240px;
 `)}
    position: relative;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 7px;
    &:hover,
    &:focus {
      border-bottom: 1px solid #fc842d;
      background-color: rgba(255, 140, 0, 0.1);
    }
  }
  .css-348fk2.Mui-focused {
    color: ${props =>
      props.theme.fontColors.buttonSecondary};
  }
  p {
    position: absolute;
    margin-top: 0;
    color: #f0000f;
  }
`;

export const FormFlexContainer = styled.div`
  margin-bottom: 40px;
  ${mediaTablet(` 
  display: flex;
  margin-bottom: 60px;
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
  margin-top: 32px;
  ${mediaTablet(` 
  display: block;
  max-width: 240px;
  margin-top: 40px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 13px;
  }
  `)}
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

export const RadioButtonLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover span {
    background-color: #ccc;
  }
`;

export const RadioButtonInput = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  :checked + label {
    color: ${props =>
      props.theme.fontColors.buttonSecondary};
    font-weight: 700;
  }
  :checked + label span:after {
    display: block;
    background: ${props =>
      props.theme.fontColors.buttonSecondary};
  }
`;

export const CustomRadioButton = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background-color: ${props =>
    props.theme.backgrounds.buttonSecondary};
  :after {
    content: '';
    position: absolute;
    display: none;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props =>
      props.theme.fontColors.buttonSecondary};
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 13px 25px;
  width: 210px;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: ${props => props.theme.fontColors.buttonPrimary};
  background-color: ${props =>
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

export const CalculatorForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaTablet(` 
  align-items: flex-start;
`)}
  ${mediaDesktop(` 
  align-items: flex-end;
`)}
`;
