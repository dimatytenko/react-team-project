import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DiaryProductsList } from '../../components/DiaryProductsList';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar';
import { RightSideBar } from '../../components/RightSideBar/RightSideBar';
import { Container } from '../../components/Container';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { formatDateForFetch } from '../../functions/formatDateForFetch';
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
import { MainModal } from '../../components/MainModal/MainModal';
import { useWindowDimensions } from '../../customHooks';
import { breakPoints } from '../../libs/constants';

export default function DiaryPage({ theme }) {
  useEffect(() => {
    document.title = 'Diary - SlimMom';
  }, []);

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

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [showModal]);

  useEffect(() => {
    const formattedPickedDate =
      formatDateForFetch(pickedDate);
    const fetchInfoForDay = async () => {
      try {
        const { data } = await axios.get(
          `/days/${formattedPickedDate}`
        );
        setProductsForDay(data.data.productsForDay);
        setSummary(data.data.summary);
      } catch (error) {
        if (error?.response?.status === 404) {
          setProductsForDay([]);
          setSummary(null);
        }
      }
    };
    fetchInfoForDay();
  }, [pickedDate]);

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

  return (
    <DiaryPagesWrapper>
      <UserPagesLayer>
        <UserPagesBackWrapper>
          <Container>
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
                      <AddButton
                        type="submit"
                        theme={theme}
                      />
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
          </Container>
        </UserPagesBackWrapper>
      </UserPagesLayer>
    </DiaryPagesWrapper>
  );
}

DiaryPage.propTypes = {
  theme: PropTypes.object.isRequired,
};
