import PropTypes from 'prop-types';
import {
  SideBarSection,
  Title,
  Wrapper,
  SideBarItem,
  SideBarList,
} from './RightSideBar.styled';
import { Container } from '../Container';
export const RightSideBar = ({
  date,
  notHelthyFood = [],
  calculation = {
    left: '000',
    consumed: '000',
    daily_rate: '000',
    percentage_of_normal: '000',
  },
}) => {
  return (
    <SideBarSection>
      <Container>
        <Wrapper>
          <Title>Summary for {date}</Title>
          <SideBarList>
            <SideBarItem>
              <span>Left</span>
              <span>{calculation.left}</span>
            </SideBarItem>
            <SideBarItem>
              <span>Consumed</span>
              <span>{calculation.consumed}</span>
            </SideBarItem>
            <SideBarItem>
              <span>Daily rate</span>
              <span>{calculation.daily_rate}</span>
            </SideBarItem>
            <SideBarItem>
              <span>n &#37; of normal</span>
              <span>
                {calculation.percentage_of_normal}
              </span>
            </SideBarItem>
          </SideBarList>
          <Title>Food not recommended</Title>

          {notHelthyFood.length < 1 &&
            'Your diet will be displayed here'}
        </Wrapper>
      </Container>
    </SideBarSection>
  );
};
RightSideBar.propTypes = {
  date: PropTypes.string.isRequired,
};
