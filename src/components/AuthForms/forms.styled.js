import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';
import {
  Container,
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
} from '@mui/material';

export const FormContainer = styled.div`
  ${mediaTablet(
    ` max-width: 512px;
    `
  )}
`;

export const MyInput = styled(TextField)`
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
  /* div {
    &::before {
      border-bottom: none;
    }
    &::after {
      border-bottom: none;
    }
  } */

  /* input {
    width: 240px;
    position: relative;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 7px;
    &:hover,
    &:focus {
      border-bottom: 1px solid #fc842d;
      background-color: rgba(255, 140, 0, 0.1);
    }
  }  */
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${props =>
      props.theme.fontColors.buttonSecondary};
  }
  p {
    position: absolute;
    margin-top: 0;
    color: #f0000f;
  }
`;

export const FormTitle = styled.h1`
  font-family: 'GothamproBold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
  color: ${props => props.theme.fontColors.modify};

  ${mediaTablet(
    ` 
     line-height: 13px;
     `
  )}
`;

export const FormFlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  ${mediaTablet(` 
    width: 240px;
 `)}
`;

export const Button = styled.button`
  width: 182px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* padding: 13px 0; */
  letter-spacing: 0.04em;
  cursor: pointer;

  &:not(:last-child) {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  color: ${props => props.theme.fontColors.buttonSecondary};
  background: ${props =>
    props.theme.fontColors.buttonPrimary};
  border: 2px solid #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: transform 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  ${mediaTablet(` 
   margin-top: 40px; 
  &:not(:last-child) {
    margin-right: 32px;
  }
 `)}
`;

export const ButtonLink = styled(Link)`
  width: 182px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* padding: 13px 0; */
  letter-spacing: 0.04em;
  cursor: pointer;

  &:not(:last-child) {
    margin-top: 40px;
    margin-bottom: 20px;
  }

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

  ${mediaTablet(` 
   margin-top: 40px; 
  &:not(:last-child) {
    margin-right: 32px;
  }
 `)}
`;

export const AuthForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaTablet(` 
align-items: flex-start;
`)}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;

  ${mediaTablet(`
        padding: 0 32px; 
        max-width: 320px;
      align-items: flex-start;`)};
  ${mediaDesktop(`
        padding: 0 16px;
      max-width: 400px; `)}
`;

export const BtnWrapp = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
    max-width: 280px; */

  ${mediaTablet(`
        flex-direction: row`)}
`;