import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { DiaryProductsList } from '../../components/DiaryProductsList';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar';
import { Container } from '../../components/Container';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm';
import { DiaryPageWrapper } from './DiaryPage.styled';
//форматування вибраної дати для req.params у форматі (рік-місяць-день)
import { formatDateForFetch } from '../../functions/formatDateForFetch';
//перевірка, чи співпадає дата вибрана в календарі з сьогоднішньою
import { isPickedDateToday } from '../../functions/isPickedDateToday';

export default function DiaryPage({ theme }) {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [productsForDay, setProductsForDay] = useState([]);
  const [summary, setSummary] = useState([]);

  //ефект при маунті або якщо змінилася дата в календарі
  useEffect(() => {
    const formattedPickedDate =
      formatDateForFetch(pickedDate);
    const fetchInfoForDay = async () => {
      try {
        const { data } = await axios.get(
          `/days/${formattedPickedDate}`
        );
        //для таблиці
        setProductsForDay(data.data.productsForDay);
        //для summary по дню
        setSummary(data.data.summary);
      } catch (error) {
        console.log(error);
        //якщо данних по дню немає, бек кидає BAD REQUEST
        if (error?.response?.status === 400) {
          setProductsForDay([]);
          setSummary([]);
        }
      }
    };

    fetchInfoForDay();
  }, [pickedDate]);

  return (
    <Container>
      <DiaryPageWrapper>
        <DiaryDateCalendar
          pickedDate={pickedDate}
          setPickedDate={setPickedDate}
        />
        <DiaryAddProductForm theme={theme} />
        <DiaryProductsList
          productsForDay={productsForDay}
          setProductsForDay={setProductsForDay}
          setSummary={setSummary}
          isPickedDateToday={isPickedDateToday(pickedDate)}
        />
      </DiaryPageWrapper>
    </Container>
  );
}

// DiaryPage.propTypes = {};
