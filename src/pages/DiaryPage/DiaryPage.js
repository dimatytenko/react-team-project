import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm';
import { MainWrapper } from '../MainPage/MainPage.styled';

export default function DiaryPage(props) {
  return (
    <Container>
      <MainWrapper>
        <div>DiaryPage</div>
        <DiaryAddProductForm />
      </MainWrapper>
    </Container>
  );
}

DiaryPage.propTypes = {};
