import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';
export const SideBarSection = styled.section`
  background-color: ${props =>
    props.theme.backgrounds.sidebar};
`;
export const Title = styled.p`
  color: ${props => props.theme.fontColors.secondary};
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  ${mediaTablet(`
  margin-bottom: 40px`)}
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 84px;
  ${mediaTablet(`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;`)};
`;
export const SideBarItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const SideBarSummary = styled.div`
  margin-bottom: 40px;
  ${mediaTablet(`
  margin-bottom: 0px;
  margin-right: 80px`)};
`;
export const notHelthyFood = styled.div``;
