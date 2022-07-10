import styled from '@emotion/styled';

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

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 13px 25px;
  letter-spacing: 0.04em;

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

  &:nth-of-type(2) {
    color: ${props =>
      props.theme.fontColors.buttonSecondary};
    background: #ffffff;
    border: 2px solid #fc842d;
  }

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

export const AuthForm = styled(Form)`
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
