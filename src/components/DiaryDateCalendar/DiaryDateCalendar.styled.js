import styled from '@emotion/styled';
import DatePicker from 'react-date-picker';
import { mediaTablet } from '../../functions/media';

export const DateTime = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  color: ${props => props.theme.fontColors.secondary};
  margin-right: 20px;

  ${mediaTablet(`
    font-size: 34px;
    line-height: 41px;
   `)}
`;

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mediaTablet(`
    align-items: baseline;
   `)}
`;

export const Calendar = styled(DatePicker)`
  & .react-date-picker__wrapper {
    border: none;

    ${mediaTablet(`
    align-items: baseline;
   `)}
  }

  & .react-date-picker__inputGroup {
    display: none;
  }

  /* & .react-date-picker__inputGroup,
  & .react-date-picker__inputGroup__leadingZero {
    box-sizing: border-box;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.22;
    color: ${props => props.theme.fontColors.secondary};

    ${mediaTablet(`
    font-size: 34px;
    line-height: 41px;
   `)}
  } */

  & .react-date-picker__inputGroup__input {
    color: ${props => props.theme.fontColors.secondary};
  }

  & .react-date-picker__button {
    padding: 0;
    line-height: 0;
  }
`;
