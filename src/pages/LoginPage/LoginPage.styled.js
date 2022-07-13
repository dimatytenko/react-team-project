import styled from '@emotion/styled';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const LoginRegisterWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;

  ${mediaTablet(`
  padding-top: 240px;
  `)}

  ${mediaDesktop(`
  padding-top: 306px;
  `)}
`;
