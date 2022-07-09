import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { MainBox } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm';
import { getKcal } from '../../services/connectionsAPI';

export default function MainPage(props) {
  const [calculatingData, setCalculatingData] = useState(
    {}
  );
  const calculatorSubmitHandler = calculatingData => {
    setCalculatingData(calculatingData);
    window.localStorage.setItem(
      'calculatingData',
      JSON.stringify(calculatingData)
    );
  };

  useEffect(() => {
    const getCardsItem = async () => {
      if (Object.keys(calculatingData).length === 0) {
        return;
      } else {
        try {
          const dataKcal = await getKcal(calculatingData);
          console.log(dataKcal);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCardsItem();
  }, [calculatingData]);

  return (
    <>
      <MainBox>
        <Container>
          <DailyCaloriesForm
            onFormSubmit={calculatorSubmitHandler}
          />
        </Container>
      </MainBox>
    </>
  );
}

MainPage.propTypes = {};
