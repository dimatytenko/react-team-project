import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

import leaves_sidebar from '../../assets/images/bg-pictures/tablet/leaves_sidebar.png';
import leaves_sidebar_desk from '../../assets/images/bg-pictures/desktop/leaves_sidebar_desk.png';

export const CalculatorWrapper = styled.div`
  padding-top: 152px;
  padding-bottom: 30px;

  ${mediaTablet(`
padding-top: 180px;
`)}

  ${mediaDesktop(`
padding-top: 293px;
margin-right: 237px;
display: flex;
justify-content: flex-end;
`)}
`;

export const UserPagesWrapper = styled.div`
  ${mediaDesktop(`
display: flex;
`)}
`;

export const RightSideBarWrapper = styled.div`
  background-color: ${props =>
    props.theme.backgrounds.bodySecondary};
  min-width: 100vh;
  min-height: 100vh;

  ${mediaTablet(`
    background-image: url(${leaves_sidebar});
    background-size: 378px 402px;
    background-position: right 15px bottom 0px;
    background-repeat: no-repeat;
  `)}

  ${mediaDesktop(`
  width: 740px;
  background-image: url(${leaves_sidebar_desk});
    background-size: 600px 790px;
    background-position: right 0px top 70px;
    background-repeat: no-repeat;
  `)}
`;
