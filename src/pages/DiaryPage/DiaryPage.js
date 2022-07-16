import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DiaryProductsList } from '../../components/DiaryProductsList';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar';
import { RightSideBar } from '../../components/RightSideBar/RightSideBar';
import { Container } from '../../components/Container';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';

//форматування вибраної дати для req.params у форматі (рік-місяць-день)
import { formatDateForFetch } from '../../functions/formatDateForFetch';
//перевірка, чи співпадає дата вибрана в календарі з сьогоднішньою
import { isPickedDateToday } from '../../functions/isPickedDateToday';
import {
  UserPagesBackWrapper,
  UserPagesLayer,
} from '../CalculatorPage/CalculatorPage.styled';
import {
  DiaryPageWrapper,
  ButtonOpenModalWrapper,
  DiaryPagesWrapper,
  RightSideBarWrapper,
} from './DiaryPage.styled';
import { AddButton } from '../../components/AddButton';
import { MainModal } from '../../components/MainModal';
import { useWindowDimensions } from '../../customHooks';
import { breakPoints } from '../../libs/constants';

export default function DiaryPage({ theme }) {
  const windowDimensions = useWindowDimensions();
  const [pickedDate, setPickedDate] = useState(new Date());
  const [productsForDay, setProductsForDay] =
    useState(null);

  const [summary, setSummary] = useState(null);

  const [showModal, setShowModal] = useState(false);

  if (showModal) {
  } else {
  }
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  useEffect(() => {
    if (windowDimensions.width >= breakPoints.TABLET) {
      setShowModal(false);
    }
  }, [windowDimensions]);

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
        // console.log(error);
        //якщо данних по дню немає, бек кидає BAD REQUEST
        if (error?.response?.status === 404) {
          setProductsForDay([]);
          setSummary(null);
        }
      }
    };
    fetchInfoForDay();
  }, [pickedDate]);

  // ===== get newProduct and summary ==== //
  function getAddProduct(data) {
    const newProduct = data.addedProduct;
    const newSummary = data.summary;

    setProductsForDay(state => {
      if (state === null) {
        return [newProduct];
      } else {
        return [newProduct, ...state];
      }
    });
    setSummary(newSummary);
    return data;
  }
  // =================================== //

  return (
    <DiaryPagesWrapper>
      <UserPagesLayer>
        <Container>
          <UserPagesBackWrapper>
            <DiaryPageWrapper>
              <div>
                <DiaryDateCalendar
                  pickedDate={pickedDate}
                  setPickedDate={setPickedDate}
                />

                {windowDimensions.width >=
                  breakPoints.TABLET &&
                  formatDateForFetch(pickedDate) ===
                    formatDateForFetch(new Date()) && (
                    <DiaryAddProductForm
                      theme={theme}
                      getProduct={getAddProduct}
                      date={formatDateForFetch(pickedDate)}
                    />
                  )}

                {/* <DiaryProductsList
                data={products}
                isPickedDateToday={isPickedDateToday()}
                pickedDate={pickedDate}
              /> */}

                <DiaryProductsList
                  productsForDay={productsForDay}
                  setProductsForDay={setProductsForDay}
                  setSummary={setSummary}
                  isPickedDateToday={isPickedDateToday(
                    pickedDate
                  )}
                />

                {windowDimensions.width <
                  breakPoints.TABLET &&
                  formatDateForFetch(pickedDate) ===
                    formatDateForFetch(new Date()) && (
                    <ButtonOpenModalWrapper
                      onClick={toggleModal}
                    >
                      <AddButton type="submit" />
                    </ButtonOpenModalWrapper>
                  )}
              </div>

              <RightSideBarWrapper>
                <RightSideBar
                  summary={summary}
                  date={pickedDate}
                />
              </RightSideBarWrapper>

              {showModal && (
                <MainModal onClose={toggleModal}>
                  <DiaryAddProductForm
                    theme={theme}
                    getProduct={getAddProduct}
                    date={formatDateForFetch(pickedDate)}
                    onClose={toggleModal}
                  />
                </MainModal>
              )}
            </DiaryPageWrapper>
          </UserPagesBackWrapper>
        </Container>
      </UserPagesLayer>
    </DiaryPagesWrapper>
  );
}

DiaryPage.propTypes = {
  theme: PropTypes.object.isRequired,
};
