import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';
export const Form = styled.form`
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

export const LoginHeader = styled.h1`
    text -align: center;
    margin-bottom: 60px;
    color: ${props => props.theme.fontColors.modify};
  
    ${mediaTablet(`
  margin: 0;
  font-family:'GothamproBold';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  margin-bottom: 60px;`)}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
