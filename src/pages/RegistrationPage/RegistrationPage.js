import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { MainPage } from '../MainPage/MainPage.styled';

export default function RegistrationPage(props) {
  return (
    <MainPage>
      <Container>
        <div> RegistrationPage</div>
      </Container>
    </MainPage>
  );
}

RegistrationPage.propTypes = {};
