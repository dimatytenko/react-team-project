import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm';
import { CalculatorWrapper } from '../CalculatorPage/CalculatorPage.styled';
import { Container } from '../../components/Container';
import { useAddUserDataMutation } from '../../redux/users/usersSlice';

export default function CalculatorPage(props) {
  const navigate = useNavigate();
  const [calculatingData, setCalculatingData] = useState(
    () => {
      return (
        JSON.parse(
          window.localStorage.getItem('calculatingData')
        ) ?? {}
      );
    }
  );
  const [addUserData, { isLoading }] =
    useAddUserDataMutation();

  const calculatorSubmitHandler = async calculatingData => {
    try {
      await addUserData({ data: calculatingData });
      navigate('/diary');
      window.localStorage.setItem(
        'calculatingData',
        JSON.stringify({})
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <CalculatorWrapper>
        <DailyCaloriesForm
          onFormSubmit={calculatorSubmitHandler}
          data={calculatingData}
          isLoading={isLoading}
        />
      </CalculatorWrapper>
    </Container>
  );
}

CalculatorPage.propTypes = {};
