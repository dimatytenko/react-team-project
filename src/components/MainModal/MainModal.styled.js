import styled from '@emotion/styled';

import { mediaTablet, mediaDesktop } from '../../functions';

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
`;

export const ModalWindow = styled.div`
  position: relative;
  top: 128px;
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

  // ${mediaDesktop(`
  // display: block;
  // `)}
`;
