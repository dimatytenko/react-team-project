import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';

import { DailyCaloriesForm } from '../../components/DailyCaloriesForm';
import {
  UserPagesWrapper,
  UserPagesBackWrapper,
  CalculatorWrapper,
  UserPagesLayer,
} from './CalculatorPage.styled';
import { Container } from '../../components/Container';
import { RightSideBar } from '../../components/RightSideBar/RightSideBar';
import { fetchUserData } from '../../services/connectionsAPI';

export default function CalculatorPage(props) {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );
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
      <UserPagesLayer>
        <Container>
          <UserPagesBackWrapper>
            <CalculatorWrapper>
              <DailyCaloriesForm
                onFormSubmit={calculatorSubmitHandler}
                data={calculatingData}
                isLoading={isLoading}
              />
              {isLoggedIn && <RightSideBar />}
            </CalculatorWrapper>
          </UserPagesBackWrapper>
        </Container>
      </UserPagesLayer>
    </UserPagesWrapper>
  );
}

CalculatorPage.propTypes = {};
