import styled from '@emotion/styled';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const ContainerBody = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  ${mediaTablet(`max-width: 768px;
  padding: 0 32px;
  
  `)}

  ${mediaDesktop(`max-width: 1280px;
  padding: 0 16px;
  `)}
`;
