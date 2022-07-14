import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { SideBarListItem as Item } from '../SideBarListItem';
import { SideBarList as List } from '../SideBarList';

import {
  getUnhealthyProducts,
  getInfoByDate,
} from '../../services/connectionsAPI';

import {
  Title,
  Wrapper,
  SideBarItem,
  SideBarSummary,
} from './RightSideBar.styled';

export const RightSideBar = ({
  date,
  independent = false,
  summary,
}) => {
  const [notHelthy, setNotHelthy] = useState([]);
  const [calculation, setCalculation] = useState({
    left: '000',
    consumed: '000',
    daily_rate: '000',
    percentage_of_normal: '000',
  });
  useEffect(() => {
    const fetchNotHelthy = async (limit, page) => {
      const { data } = await getUnhealthyProducts(
        limit,
        page
      );

      setNotHelthy(data.unhealthyProducts);
    };

    const fetchCalculation = async date => {
      const { data } = await getInfoByDate(date);
      console.log(data);
      setCalculation(data.summary);
    };
    if (independent) {
      const date = format(new Date(), 'yyyy-MM-dd');
      fetchCalculation(date);
    }
    fetchNotHelthy(4, 1);
  }, [independent]);

  console.log(summary);
  //choosing an operating mode
  const data = independent ? calculation : summary;

  const {
    left,
    consumed,
    daily_rate,
    percentage_of_normal,
  } = data;

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
              <Item
                key={item.product_id}
                title={item.product_title}
              />
            ))}
          </List>
        )}
      </div>
    </Wrapper>
  );
};
RightSideBar.propTypes = {
  date: PropTypes.string,
  independent: PropTypes.bool,
  summary: PropTypes.objectOf({
    left: PropTypes.number.isRequired,
    consumed: PropTypes.number.isRequired,
    daily_rate: PropTypes.number.isRequired,
    percentage_of_normal: PropTypes.number.isRequired,
    createdAt: PropTypes.string,
    date: PropTypes.string,
    updatedAt: PropTypes.string,
    user_id: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
