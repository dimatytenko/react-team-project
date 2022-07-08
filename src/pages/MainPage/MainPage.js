import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { MainBox } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm';

export default function MainPage(props) {
  const calculatorSubmitHandler = calculatingData => {
    window.localStorage.setItem(
      'calculatingData',
      JSON.stringify(calculatingData)
    );
    console.log(calculatingData.bloodType);
  };

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
