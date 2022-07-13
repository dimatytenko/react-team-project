import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1200;
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
  z-index: 1201;
`;
