import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import format from 'date-fns/format';

import { DiaryProductsList } from '../../components/DiaryProductsList';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar';
import { Container } from '../../components/Container';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm';
import { DiaryPageWrapper } from './DiaryPage.styled';
import {
  UserPagesWrapper,
  UserPagesBackWrapper,
  RightSideBarWrapper,
} from '../CalculatorPage/CalculatorPage.styled';
import {
  // DiaryPageWrapper,
  DiaryAddProductFormWrapper,
  ButtonOpenModalWrapper,
  DiaryAddProductFormModalWrapper,
  DiaryPagesWrapper,
  DiaryPagesBackWrapper,
} from './DiaryPage.styled';
import { AddButton } from '../../components/AddButton';
import { MainModal } from '../../components/MainModal';

//це тимчасово
const products = [
  {
    title: {
      en: 'Chicken egg (dry yolk)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    _id: '5d51694802b2373622ff553b',
    weight: 100,
    calories: 623,
  },
  {
    title: {
      en: 'Buckwheat groats (kernel) green',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    _id: '5d51694802b2373622ff555c',
    weight: 100,
    calories: 296,
  },
  {
    title: {
      en: 'Omelet with cheese',
      ua: 'Омлет із сиром',
    },
    _id: '5d51694802b2373622ff5530',
    weight: 100,
    calories: 342,
  },
  {
    title: {
      en: 'Chicken egg (hard-boiled)',
      ua: 'Яйце куряче (варене круто)',
    },
    _id: '5d51694802b2373622ff5539',
    weight: 100,
    calories: 160,
  },
  {
    title: {
      en: 'Melange egg',
      ua: 'Меланж яєчний',
    },
    _id: '5d51694802b2373622ff552c',
    weight: 100,
    calories: 157,
  },
  {
    title: {
      en: 'Bulgur',
      ua: 'Булгур',
    },
    _id: '5d51694802b2373622ff5547',
    weight: 100,
    calories: 342,
  },
  {
    title: {
      en: 'Buckwheat flakes Myllyn Paras for porridge',
      ua: 'Гречані пластівці Myllyn Paras для каші',
    },
    _id: '5d51694802b2373622ff5565',
    weight: 100,
    calories: 340,
  },
  {
    title: {
      en: 'Buckwheat flakes Passim',
      ua: 'Гречані пластівці Пассим',
    },
    _id: '5d51694802b2373622ff5569',
    weight: 100,
    calories: 322,
  },
  {
    title: {
      en: 'Chicken egg',
      ua: 'Яйце куряче',
    },
    _id: '5d51694802b2373622ff5535',
    weight: 100,
    calories: 157,
  },
  {
    title: {
      en: 'Egg powder omelette',
      ua: 'Омлет з яєчного порошку',
    },
    _id: '5d51694802b2373622ff552f',
    weight: 100,
    calories: 200,
  },
  {
    title: {
      en: 'Chicken egg (poached)',
      ua: 'Яйце куряче (пашот)',
    },
    _id: '5d51694802b2373622ff553d',
    weight: 100,
    calories: 159,
  },
];

export default function DiaryPage({ theme }) {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const isPickedDateToday = () => {
    const formattedPickedDate = format(
      pickedDate,
      'dd-MM-yyyy'
    );
    const formattedToday = format(new Date(), 'dd-MM-yyyy');
    const areDatesEqual =
      formattedPickedDate === formattedToday;
    return areDatesEqual;
  };

  return (
    <DiaryPagesWrapper>
      <DiaryPagesBackWrapper>
        <Container>
          <DiaryPageWrapper>
            <div>
              <DiaryDateCalendar
                pickedDate={pickedDate}
                setPickedDate={setPickedDate}
              />
              <DiaryAddProductFormWrapper>
                <DiaryAddProductForm theme={theme} />
              </DiaryAddProductFormWrapper>

              <DiaryProductsList
                data={products}
                isPickedDateToday={isPickedDateToday()}
                pickedDate={pickedDate}
              />
              <ButtonOpenModalWrapper onClick={toggleModal}>
                <AddButton type="button" />
              </ButtonOpenModalWrapper>
            </div>

            <RightSideBarWrapper>
              <div>hello</div>
            </RightSideBarWrapper>

            {showModal && (
              <MainModal onClose={toggleModal}>
                <DiaryAddProductForm
                  theme={theme}
                  onClose={toggleModal}
                />
              </MainModal>
            )}
          </DiaryPageWrapper>
        </Container>
      </DiaryPagesBackWrapper>
    </DiaryPagesWrapper>
  );
}

DiaryPage.propTypes = {
  theme: PropTypes.object,
};
