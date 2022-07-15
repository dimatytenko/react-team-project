import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { MainBox } from '../MainPage/MainPage.styled';
import { LoginRegisterWrapper } from '../LoginPage/LoginPage.styled';
import RegistrationForm from '../../components/AuthForms/RegistrationForm';

export default function RegistrationPage(props) {
  return (
    <Container>
      <MainBox>
        <LoginRegisterWrapper>
          <RegistrationForm />
        </LoginRegisterWrapper>
      </MainBox>
    </Container>
  );
}

RegistrationPage.propTypes = {};
