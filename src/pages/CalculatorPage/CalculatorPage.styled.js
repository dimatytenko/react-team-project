import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const CalculatorWrapper = styled.div`
  padding-top: 152px;
  padding-bottom: 30px;

  ${mediaTablet(`
padding-top: 180px;
`)}

  ${mediaDesktop(`
padding-top: 293px;
display: flex;
`)}
`;
