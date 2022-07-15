import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { SideBarListItem as Item } from '../SideBarListItem';
import { SideBarList as List } from '../SideBarList';
import { useSelector } from 'react-redux';
import { getInfoByDate } from '../../services/connectionsAPI';

import { getUnhealthyProducts } from '../../services/productsAPI';
import { getUserDailyRate } from '../../redux/auth/authSelectors';
import {
  Title,
  Wrapper,
  SideBarItem,
  SideBarSummary,
  NotHelthyGroup,
} from './RightSideBar.styled';
const defaultState = {
  left: '000',
  consumed: '000',
  daily_rate: '000',
  percentage_of_normal: '000',
};
export const RightSideBar = ({
  date,
  independent = false,
  summary = defaultState,
}) => {
  const [notHelthy, setNotHelthy] = useState([]);
  const [calculation, setCalculation] =
    useState(defaultState);
  const dailyRate = useSelector(getUserDailyRate);

  useEffect(() => {
    const fetchNotHelthy = async (limit, page) => {
      try {
        const { data } = await getUnhealthyProducts(
          limit,
          page
        );

        setNotHelthy(data.unhealthyProducts);
      } catch {}
    };

    const fetchCalculation = async date => {
      try {
        const { data } = await getInfoByDate(date);

        setCalculation(data.summary);
      } catch (error) {
        setCalculation({
          left: dailyRate ?? 0,
          consumed: 0,
          daily_rate: dailyRate ?? 0,
          percentage_of_normal: 0,
        });
      }
    };
    if (independent) {
      const date = format(new Date(), 'yyyy-MM-dd');
      fetchCalculation(date);
    }
    fetchNotHelthy(4, 1);
  }, [independent, dailyRate]);
  //if props.summary === null return defaultState
  const newSummary = summary ?? {
    left: dailyRate ?? 0,
    consumed: 0,
    daily_rate: dailyRate ?? 0,
    percentage_of_normal: 0,
  };

  //choosing an operating mode
  const data = independent ? calculation : newSummary;

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
            <span>{left} kcal</span>
          </SideBarItem>
          <SideBarItem>
            <span>Consumed</span>
            <span>{consumed} kcal</span>
          </SideBarItem>
          <SideBarItem>
            <span>Daily rate</span>
            <span>{daily_rate} kcal</span>
          </SideBarItem>
          <SideBarItem>
            <span>n &#37; of normal</span>
            <span>{percentage_of_normal} &#37;</span>
          </SideBarItem>
        </ul>
      </SideBarSummary>
      <NotHelthyGroup>
        <Title>Food not recommended</Title>
        {notHelthy.length < 1 && (
          <p>Your diet will be displayed here</p>
        )}
        {notHelthy.length > 1 && (
          <List>
            {notHelthy.map(
              ({ product_id, product_title }) => (
                <Item
                  key={product_id}
                  title={product_title}
                />
              )
            )}
          </List>
        )}
      </NotHelthyGroup>
    </Wrapper>
  );
};
RightSideBar.propTypes = {
  date: PropTypes.string,
  independent: PropTypes.bool,
};
