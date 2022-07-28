import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { SideBarListItem as Item } from '../SideBarListItem';
import { SideBarList as List } from '../SideBarList';
import { getInfoByDate } from '../../services/connectionsAPI';
import { getUnhealthyProducts } from '../../services/productsAPI';
import { formatDateForFetch } from '../../functions/formatDateForFetch';
import { formatDateForUser } from '../../functions/formatDataForUser';
import {
  Title,
  Wrapper,
  SideBarItem,
  SideBarSummary,
  NotHelthyGroup,
} from './RightSideBar.styled';
import '../../utils/i18next';

const defaultState = {
  left: '000',
  consumed: '000',
  daily_rate: '000',
  percentage_of_normal: 0,
};
export function RightSideBar({ date, summary }) {
  const { t } = useTranslation();
  const [notHelthy, setNotHelthy] = useState([]);
  const [calculation, setCalculation] =
    useState(defaultState);

  useEffect(() => {
    const pickedDate = date
      ? formatDateForFetch(date)
      : formatDateForFetch(new Date());
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
      } catch {
        setCalculation(defaultState);
      }
    };
    fetchNotHelthy(4, 1);
    fetchCalculation(pickedDate);
  }, [date]);

  const data = summary ? summary : calculation;
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
          {t('summary.summuryTitle')}{' '}
          {date
            ? formatDateForUser(date)
            : formatDateForUser(new Date())}
        </Title>
        <ul>
          <SideBarItem>
            <span>
              {left >= 0
                ? `${t('summary.left')}`
                : `${t('summary.overate')}`}
            </span>
            <span>
              {left >= 0 ? left : Math.abs(left)}{' '}
              {t('summary.kcal')}
            </span>
          </SideBarItem>
          <SideBarItem>
            <span>{t('summary.consumed')}</span>
            <span>
              {consumed} {t('summary.kcal')}
            </span>
          </SideBarItem>
          <SideBarItem>
            <span>{t('summary.dailyRate')}</span>
            <span>
              {daily_rate} {t('summary.kcal')}
            </span>
          </SideBarItem>
          <SideBarItem>
            <span>{t('summary.normal')}</span>
            <span>{percentage_of_normal} &#37;</span>
          </SideBarItem>
        </ul>
      </SideBarSummary>
      <NotHelthyGroup>
        <Title>{t('summary.notRecommended')}</Title>
        {notHelthy.length < 1 && (
          <p>{t('summary.displayed')}</p>
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
}
RightSideBar.propTypes = {
  date: PropTypes.instanceOf(Date),
};
