import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

import leaves_sidebar from '../../assets/images/bg-pictures/tablet/leaves_sidebar.png';
import leaves_sidebar_desk from '../../assets/images/bg-pictures/desktop/leaves_sidebar_desk.png';

export const DiaryPagesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #292e4b;

  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 440px,
    rgba(240, 241, 243, 1) 375px
  );

  ${mediaTablet(`
    background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 620px,
    rgba(240, 241, 243, 1) 550px
  );
  `)}

  ${mediaDesktop(`
    background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 58%,
    rgba(240, 241, 243, 1) 42%
  );
  `)};
`;

export const DiaryPageWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 220px;

  ${mediaTablet(`
  padding-top: 180px;
  gap: 128px;
`)}

  ${mediaDesktop(`
  padding-top: 293px;
  padding-bottom: 110px;
  flex-direction: row;
  justify-content: space-between;
`)}
`;

export const DiaryAddProductFormWrapper = styled.div`
  display: none;

  ${mediaTablet(`
   display: block;
  `)}
`;

export const ButtonOpenModalWrapper = styled.div`
  position: absolute;
  top: 510px;
  left: 50%;
  transform: translateX(-50%);
`;

export const RightSideBarWrapper = styled.div`
  margin-right: 128px;
`;
