import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { MainBox, MainWrapper } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm.js';
import { getKcal } from '../../services/getKcal';

import { Modal } from '../../components/Modal/Modal';

export default function MainPage(props) {
  const [modalData, setModalData] = useState({});
  const [calculatingData, setCalculatingData] = useState(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);

  const calculatorSubmitHandler = calculatingData => {
    setCalculatingData(calculatingData);
    window.localStorage.setItem(
      'calculatingData',
      JSON.stringify(calculatingData)
    );
    setCalculatingData({});
  };

  useEffect(() => {
    const getCalculatingData = async () => {
      if (Object.keys(calculatingData).length === 0) {
        return;
      } else {
        try {
          setIsLoading(true);
          const dataKcal = await getKcal(calculatingData);
          setModalData(dataKcal.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCalculatingData();
  }, [calculatingData]);

  const modalClose = e => {
    if (e.currentTarget === e.target) {
      setModalData({});
    }
  };
  const modalCloseBtn = e => {
    setModalData({});
  };

  return (
    <>
      <Container>
        <MainBox>
          <MainWrapper>
            <DailyCaloriesForm
              onFormSubmit={calculatorSubmitHandler}
              data={{}}
              isLoading={isLoading}
            />
            {Object.keys(modalData).length !== 0 && (
              <Modal
                modalData={modalData}
                onClick={modalClose}
                modalCloseBtn={modalCloseBtn}
              />
            )}
          </MainWrapper>
        </MainBox>
      </Container>
    </>
  );
}

MainPage.propTypes = {};
