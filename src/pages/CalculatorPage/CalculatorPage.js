import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../../redux/auth/authOperations';
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
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );
  const userData = useSelector(authSelectors.getUserData);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const parsedData = JSON.parse(
    window.localStorage.getItem('calculatingData')
  );
  const isLsDataAvailable =
    Object.keys(parsedData).length !== 0;
  const calculatingData = isLsDataAvailable
    ? parsedData
    : userData;

  const calculatorSubmitHandler = async calculatingData => {
    try {
      setIsLoading(true);
      await fetchUserData(calculatingData);
      const {
        height,
        age,
        weight_current,
        weight_desired,
        blood,
      } = calculatingData;
      dispatch(
        fetchCurrentUser({
          height,
          age,
          weight_current,
          weight_desired,
          blood,
        })
      );
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
              {isLoggedIn && (
                <DailyCaloriesForm
                  onFormSubmit={calculatorSubmitHandler}
                  data={calculatingData}
                  isLoading={isLoading}
                />
              )}
              {isLoggedIn && <RightSideBar />}
            </CalculatorWrapper>
          </UserPagesBackWrapper>
        </Container>
      </UserPagesLayer>
    </UserPagesWrapper>
  );
}

CalculatorPage.propTypes = {};
