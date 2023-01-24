import styled from '@emotion/styled';

import {
  mediaTablet,
  mediaMaxPhone,
} from '../../functions/media';

export const DiaryAddProduct = styled.div`
  position: relative;

  ${mediaMaxPhone(`
  padding-top: 80px;
    padding-bottom: 20px;
  `)}

  ${mediaTablet(`
  margin-bottom: 60px;
  `)}
`;

export const FormBody = styled.div`
  display: flex;

  ${mediaMaxPhone(`
  min-width: 280px;
  flex-direction: column;
  align-items: center;
  `)}

  ${mediaTablet(`
  display: flex;
  `)}
`;

export const FormInputGrams = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.fontColors.primary};

  ::placeholder {
    color: ${props => props.theme.fontColors.primary};
    font-family: 'VerdanaBold';
    letter-spacing: 0.04em;
  }

  ${mediaMaxPhone(`
  width: 100%;
  margin-bottom: 60px;
  `)}

  ${mediaTablet(`
  width: 106px;
  margin-bottom: 0;

  text-align: right;
  margin-left: 22px;
  margin-right: 87px;

   ::placeholder {
    text-align: right;
  }
  `)}
`;

export const ProductsList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 280px;
  overflow: auto;
  top: 100px;
  left: 0;
  z-index: 5;
  border: 1px solid #e0e0e0;
  padding: 0 10px 0 10px;
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #264061;
  }

  background-color: ${props =>
    props.theme.backgrounds.bodyPrimary};

  ${mediaTablet(`
  top: 55px;
  width: 370px;
  `)}
`;

export const ProductsItem = styled.li`
  padding: 5px 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background-color
    ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.hovers.primary};
  }
`;

export const AddButtonWrapper = styled.div`
  ${mediaMaxPhone(`
   display: none;
  `)}
`;
