import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const DiaryPageWrapper = styled.div`
  padding-top: 160px;
  padding-bottom: 30px;

  ${mediaTablet(`
  padding-top: 180px;
  `)}

  ${mediaDesktop(`
  padding-top: 293px;
  margin-right: 124px;
  display: flex;
  justify-content: flex-end;
  `)}
`;
