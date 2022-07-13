import styled from '@emotion/styled';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

import strawberry from '../../assets/images/bg-pictures/tablet/strawberry.png';
import banana from '../../assets/images/bg-pictures/tablet/banana.png';
import leaves from '../../assets/images/bg-pictures/tablet/leaves.png';
import stain from '../../assets/images/bg-pictures/tablet/stain.svg';

import leaves_main from '../../assets/images/bg-pictures/desktop/leaves_main.png';
import strawberry_desk from '../../assets/images/bg-pictures/desktop/strawberry_desk.png';
import banana_desk from '../../assets/images/bg-pictures/desktop/banana_desk.png';
import stain_desk from '../../assets/images/bg-pictures/desktop/stain_desk.svg';

export const MainBox = styled.div`
  width: 100%;

  ${mediaTablet(`
  min-height: 100vh;
    background-image: url(${strawberry}), url(${banana}),
      url(${leaves}), url(${stain});
    background-size: 308px 303px, 491px 431px, 602px 531px,
      521px 563px;
    background-position: right 24px bottom 168px,
      right 0 bottom 0, right 166px bottom -50px,
      right 0 bottom -4px;
    background-repeat: no-repeat;
  `)}

  ${mediaDesktop(`
 background-image: url(${leaves_main}),
      url(${banana_desk}), url(${strawberry_desk}),
      url(${stain_desk});
    background-size: 746px 820px, 715px 510px, 386px 379px,
      715px 849px;
    background-position: right 195px top 0px,
      right -247px top -50px, right -8px top 470px,
      right -113px top 70px;
    background-repeat: no-repeat;
  `)}
`;

export const MainWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;

  ${mediaTablet(`
  padding-top: 180px;
  `)}

  ${mediaDesktop(`
  padding-top: 293px;
  `)}
`;
