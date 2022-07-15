import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const Title = styled.p`
  color: ${props => props.theme.fontColors.secondary};
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
`;
export const Wrapper = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  min-width: 288px;
  height: 100%;
  ${mediaTablet(`
  display: flex;`)};
  ${mediaDesktop(`
  display: block;
  `)}
`;
export const SideBarItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const SideBarSummary = styled.div`
  width: 288px;
  margin-bottom: 40px;
  ${mediaTablet(`
  margin-bottom: 0px;
  margin-right: 80px`)};
  ${mediaDesktop(`
  margin-bottom: 40px;
  margin-right: 0px
  `)}
`;
export const NotHelthyGroup = styled.div`
  width: 288px;
`;
