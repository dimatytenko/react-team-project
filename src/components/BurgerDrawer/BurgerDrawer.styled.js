import Drawer from '@mui/material/Drawer';
import styled from '@emotion/styled';

export const DrawerStyled = styled(Drawer)`
  &.MuiDrawer-root,
  & .MuiBackdrop-root,
  & .MuiPaper-root {
    top: 80px;
  }

  & > div {
    height: 100%;
    background-color: #292e4b;
    background-image: none;
  }
`;
