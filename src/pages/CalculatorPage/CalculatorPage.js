import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm';
import {
  CalculatorWrapper,
  UserPagesWrapper,
  RightSideBarWrapper,
} from './CalculatorPage.styled';
import { Container } from '../../components/Container';
import { fetchUserData } from '../../services/connectionsAPI';

export default function CalculatorPage(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [calculatingData, setCalculatingData] = useState(
    () => {
      return (
        JSON.parse(
          window.localStorage.getItem('calculatingData')
        ) ?? {}
      );
    }
  );

  const calculatorSubmitHandler = async calculatingData => {
    try {
      setIsLoading(true);
      await fetchUserData(calculatingData);
      setIsLoading(false);
      window.localStorage.setItem(
        'calculatingData',
        JSON.stringify({})
      );
      navigate('/diary');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserPagesWrapper>
      <Container>
        <CalculatorWrapper>
          <DailyCaloriesForm
            onFormSubmit={calculatorSubmitHandler}
            data={calculatingData}
            isLoading={isLoading}
          />
        </CalculatorWrapper>
      </Container>
      <RightSideBarWrapper>
        <Container></Container>
      </RightSideBarWrapper>
    </UserPagesWrapper>
  );
}

CalculatorPage.propTypes = {};
