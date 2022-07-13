import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { SideBarListItem as Item } from '../SideBarListItem';
import { SideBarList as List } from '../SideBarList';
import {
  Title,
  Wrapper,
  SideBarItem,
  SideBarSummary,
} from './RightSideBar.styled';
export const RightSideBar = ({
  date,
  notHelthy = [],
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
    <Wrapper>
      <SideBarSummary>
        <Title>
          Summary for{' '}
          {date ? date : format(new Date(), 'dd.MM.yyyy')}
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
        {notHelthy.length < 1 && (
          <p>Your diet will be displayed here</p>
        )}
        {notHelthy.length > 1 && (
          <List>
            {notHelthy.map(item => (
              <Item key={item._id} title={item.title} />
            ))}
          </List>
        )}
      </div>
    </Wrapper>
  );
};
RightSideBar.propTypes = {
  date: PropTypes.string,
  notHelthy: PropTypes.array,
  calculation: PropTypes.objectOf({
    left: PropTypes.number.isRequired,
    consumed: PropTypes.number.isRequired,
    daily_rate: PropTypes.number.isRequired,
    percentage_of_normal: PropTypes.number.isRequired,
  }),
};
