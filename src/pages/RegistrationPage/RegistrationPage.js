import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { MainBox } from '../MainPage/MainPage.styled';
import { LoginRegisterWrapper } from '../LoginPage/LoginPage.styled';

export default function RegistrationPage(props) {
  return (
    <MainBox>
      <Container>
        <LoginRegisterWrapper>
          <div> RegistrationPage</div>
        </LoginRegisterWrapper>
      </Container>
    </MainBox>
  );
}

RegistrationPage.propTypes = {};
