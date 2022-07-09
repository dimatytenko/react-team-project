import styled from '@emotion/styled';

import strawberry from '../../assets/images/bg-pictures/tablet/strawberry.png';
import banana from '../../assets/images/bg-pictures/tablet/banana.png';
import leaves from '../../assets/images/bg-pictures/tablet/leaves.png';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const MainBackground = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${strawberry}), url(${banana}),
    url(${leaves});
  background-size: 308px 303px, 491px 431px, 602px 531px;
  background-position: right 24px bottom 168px,
    right 0 bottom 0, right 166px bottom -130px;
  background-repeat: no-repeat;
`;

export const NotFoundContainer = styled.div`
  padding-top: 140px;

  ${mediaDesktop(`padding-top: 230px;`)}
`;

export const NotFoundImg = styled.div`
  ${mediaDesktop(`
    margin-left: 30px;

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
  margin-bottom: 10px;
  `)}

  ${mediaDesktop(`
  margin-bottom: 20px;
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
