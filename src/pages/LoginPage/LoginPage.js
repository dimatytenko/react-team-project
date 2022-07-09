import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import Login from "../../components/Login"
import { MainBox } from '../MainPage/MainPage.styled';

export default function LoginPage(props) {
  return (
    <MainBox>
    <Container>
    <Login/>
    </Container>
    </MainBox>
  );
}

LoginPage.propTypes = {};
