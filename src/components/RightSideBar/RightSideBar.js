import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { SideBarListItem as Item } from '../SideBarListItem';
import { SideBarList as List } from '../SideBarList';
import {
  SideBarSection,
  Title,
  Wrapper,
  SideBarItem,
  SideBarSummary,
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
  const {
    left,
    consumed,
    daily_rate,
    percentage_of_normal,
  } = calculation;
  return (
    <SideBarSection>
      <Container>
        <Wrapper>
          <SideBarSummary>
            <Title>
              Summary for{' '}
              {date
                ? date
                : format(new Date(), 'dd.MM.yyyy')}
            </Title>
            <ul>
              <SideBarItem>
                <span>Left</span>
                <span>{left}</span>
              </SideBarItem>
              <SideBarItem>
                <span>Consumed</span>
                <span>{consumed}</span>
              </SideBarItem>
              <SideBarItem>
                <span>Daily rate</span>
                <span>{daily_rate}</span>
              </SideBarItem>
              <SideBarItem>
                <span>n &#37; of normal</span>
                <span>{percentage_of_normal}</span>
              </SideBarItem>
            </ul>
          </SideBarSummary>
          <div>
            <Title>Food not recommended</Title>
            {notHelthyFood.length < 1 &&
              'Your diet will be displayed here'}
            {notHelthyFood.length > 1 && (
              <List>
                {notHelthyFood.map(item => (
                  <Item
                    key={item._id}
                    title={item.title}
                  ></Item>
                ))}
              </List>
            )}
          </div>
        </Wrapper>
      </Container>
    </SideBarSection>
  );
};
RightSideBar.propTypes = {
  date: PropTypes.string,
  notHelthyFood: PropTypes.array.isRequired,
  calculation: PropTypes.objectOf({
    left: PropTypes.number.isRequired,
    consumed: PropTypes.number.isRequired,
    daily_rate: PropTypes.number.isRequired,
    percentage_of_normal: PropTypes.number.isRequired,
  }),
};
