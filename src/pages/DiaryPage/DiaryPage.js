import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DiaryProductsList } from '../../components/DiaryProductsList';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar';
import { Container } from '../../components/Container';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm';

//форматування вибраної дати для req.params у форматі (рік-місяць-день)
import { formatDateForFetch } from '../../functions/formatDateForFetch';
//перевірка, чи співпадає дата вибрана в календарі з сьогоднішньою
import { isPickedDateToday } from '../../functions/isPickedDateToday';
import {
  UserPagesWrapper,
  UserPagesBackWrapper,
  RightSideBarWrapper,
} from '../CalculatorPage/CalculatorPage.styled';
import {
  // DiaryPageWrapper,
  DiaryAddProductFormWrapper,
  ButtonOpenModalWrapper,
  DiaryAddProductFormModalWrapper,
  DiaryPagesWrapper,
  DiaryPagesBackWrapper,
} from './DiaryPage.styled';
import { AddButton } from '../../components/AddButton';
import { MainModal } from '../../components/MainModal';

export default function DiaryPage({ theme }) {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [productsForDay, setProductsForDay] = useState([]);
  const [summary, setSummary] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
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
    <DiaryPagesWrapper>
      <DiaryPagesBackWrapper>
        <Container>
          <DiaryPageWrapper>
            <div>
              <DiaryDateCalendar
                pickedDate={pickedDate}
                setPickedDate={setPickedDate}
              />
              <DiaryAddProductFormWrapper>
                <DiaryAddProductForm theme={theme} />
              </DiaryAddProductFormWrapper>

              <DiaryProductsList
                data={products}
                isPickedDateToday={isPickedDateToday()}
                pickedDate={pickedDate}
              />
              <ButtonOpenModalWrapper onClick={toggleModal}>
                <AddButton type="button" />
              </ButtonOpenModalWrapper>
            </div>

        <DiaryProductsList
          productsForDay={productsForDay}
          setProductsForDay={setProductsForDay}
          setSummary={setSummary}
          isPickedDateToday={isPickedDateToday(pickedDate)}
        />

            <RightSideBarWrapper>
              <div>hello</div>
            </RightSideBarWrapper>

            {showModal && (
              <MainModal onClose={toggleModal}>
                <DiaryAddProductForm
                  theme={theme}
                  onClose={toggleModal}
                />
              </MainModal>
            )}
          </DiaryPageWrapper>
        </Container>
      </DiaryPagesBackWrapper>
    </DiaryPagesWrapper>
  );
}

DiaryPage.propTypes = {
  theme: PropTypes.object,
};
