import styled from '@emotion/styled';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const ContainerBody = styled.div`
  max-width: 300px;
  padding: 0 10px;
  margin: 0 auto;

  ${mediaTablet(`max-width: 724px;`)}

  ${mediaDesktop(`max-width: 1268px;`)}
`;
