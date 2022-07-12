import styled from '@emotion/styled';
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
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 84px;
`;
export const SideBarItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const SideBarList = styled.ul`
  margin-bottom: 40px;
`;
