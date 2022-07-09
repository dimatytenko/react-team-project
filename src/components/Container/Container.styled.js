import styled from '@emotion/styled';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const ContainerBody = styled.div`
  width: 300px;
  padding: 0 10px;
  margin: 0 auto;

  ${mediaTablet(` width: 724px;`)}

  ${mediaDesktop(`width: 1268px;`)}
`;
