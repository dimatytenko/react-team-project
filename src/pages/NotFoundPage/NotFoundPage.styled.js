import styled from '@emotion/styled';

import strawberry from '../../images/bg-pictures/tablet/strawberry.png';
import banana from '../../images/bg-pictures/tablet/banana.png';
import leaves from '../../images/bg-pictures/tablet/leaves.png';
import stain from '../../images/bg-pictures/tablet/stain.svg';

import leaves_main from '../../images/bg-pictures/desktop/leaves_main.png';
import strawberry_desk from '../../images/bg-pictures/desktop/strawberry_desk.png';
import banana_desk from '../../images/bg-pictures/desktop/banana_desk.png';
import stain_desk from '../../images/bg-pictures/desktop/stain_desk.svg';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const MainBackground = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${strawberry});
  background-size: 308px 303px;
  background-position: right -145px bottom 155px;
  background-repeat: no-repeat;

  ${mediaTablet(`
  background-image: url(${strawberry}), url(${banana}),
      url(${leaves});
    background-size: 308px 303px, 491px 431px, 602px 531px;
    background-position: right 24px bottom 168px,
      right 0 bottom 0, right 166px bottom -130px;
    background-repeat: no-repeat;
  `)}

  ${mediaDesktop(`background-image: url(${leaves_main}),
      url(${banana_desk}), url(${strawberry_desk}),
      url(${stain_desk});
    background-size: 746px 820px, 715px 510px, 386px 379px,
      715px 849px;
    background-position: right 195px top -30px,
      right -247px top -50px, right -8px top 470px,
      right -113px top 70px;
    background-repeat: no-repeat;`)}
`;

export const NotFoundContainer = styled.div`
  padding-top: 130px;

  ${mediaDesktop(`padding-top: 230px;`)}
`;

export const NotFoundImg = styled.div`
  ${mediaDesktop(`
    margin-left: 0px;

   & img {
    width: 420px;
  }
  `)}
`;

export const NotFoundBoxContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;

  ${mediaTablet(`
  align-items: center;
  margin-bottom: -10px;
  `)}

  ${mediaDesktop(`
  margin-bottom: 40px;
  `)}
`;

export const NotFoundContent = styled.div`
  font-size: 23px;

  ${mediaDesktop(`
  font-size: 40px;
  max-width: 650px;
  `)}
`;

export const NotFoundContentMod = styled.div`
  font-size: 33px;
  color: ${props => props.theme.fontColors.secondary};

  ${mediaDesktop(`
  font-size: 75px;
  `)}
`;
