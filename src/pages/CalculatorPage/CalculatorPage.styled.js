import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

import leaves_sidebar from '../../assets/images/bg-pictures/tablet/leaves_sidebar.png';
import leaves_sidebar_desk from '../../assets/images/bg-pictures/desktop/leaves_sidebar_desk.png';

export const UserPagesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 565px,
    rgba(240, 241, 243, 1) 500px
  );

  ${mediaTablet(`
    background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 710px,
    rgba(240, 241, 243, 1) 680px
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

export const UserPagesBackWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props =>
    props.theme.backgrounds.userBack};

  ${mediaTablet(`
    background-image: url(${leaves_sidebar});
    background-size: 378px 402px;
    background-position: right 15px bottom 0px;
    background-repeat: no-repeat;
  `)};

  ${mediaDesktop(`
  background-image: url(${leaves_sidebar_desk});
    background-size: 600px 790px;
    background-position: right 0px top 70px;
    background-repeat: no-repeat;
  `)};
`;

export const CalculatorWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  ${mediaTablet(`
  padding-top: 180px;
  gap: 128px;
`)}

  ${mediaDesktop(`
  padding-top: 293px;
  padding-bottom: 110px;
  flex-direction: row;
  gap: 320px;
`)}
`;

export const RightSideBarWrapper = styled.div``;
