import styled from '@emotion/styled';

export const MainLoaderBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainLoaderBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    props.theme.backgrounds.backdrop};
`;
