import styled from '@emotion/styled';
import { IoCloseSharp } from 'react-icons/io5';

import { mediaTablet } from '../../functions';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 12000;

  ${mediaTablet(`
    background-color: rgba(33, 33, 33, 0.12);
  `)};
`;

export const BtnCloseModalMobile = styled.button`
  position: absolute;
  top: -25px;
  background-color: inherit;
  border: none;

  ${mediaTablet(`
  display: none;
  `)};
`;

export const ModalWindow = styled.div`
  position: relative;
  top: 126px;
  min-width: 320px;
  background-color: ${props =>
    props.theme.backgrounds.bodyPrimary};
  min-height: 100%;
  max-height: 100%;
  z-index: 12001;

  ${mediaTablet(`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: unset;
    width: 672px;
    height: 573px;
  `)};
`;

export const BtnCloseModal = styled.button`
  display: none;
  position: absolute;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 20px;
  right: 20px;
  transform: translate(30%, -30%);
  overflow: hidden;
  cursor: pointer;
  transition: background-color
    ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.hovers.secondary};
    color: 'white';
  }

  ${mediaTablet(`
    display: block;
    `)};
`;

export const ImgClose = styled(IoCloseSharp)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
