import styled from '@emotion/styled';
import logo from '../../images/logo.svg';
import logoT from '../../images/LogoTab.svg';
import logoD from '../../images/LogoDes.svg';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const LogoContainer = styled.div`
  width: 47px;
  height: 44px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  ${mediaTablet(`
  background-image: url(${logoT});
       width: 162px;
  `)}
  ${mediaDesktop(`
  background-image: url(${logoD});
       width: 167px;
       height: 66px;
       margin-right: 40px;
  `)}
`;

export const Slim = styled.span``;
export const Mom = styled.span``;
