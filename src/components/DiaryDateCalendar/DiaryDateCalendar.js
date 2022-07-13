import { RiCalendar2Fill } from 'react-icons/ri';
import {
  Calendar,
  CalendarWrapper,
  DateTime,
} from './DiaryDateCalendar.styled';
import format from 'date-fns/format';

export const DiaryDateCalendar = ({
  pickedDate,
  setPickedDate,
}) => {
  return (
    <CalendarWrapper>
      <DateTime>
        {format(pickedDate, 'dd.MM.yyyy')}
      </DateTime>
      <Calendar
        onChange={setPickedDate}
        value={pickedDate}
        autoFocus={false}
        clearIcon={null}
        maxDate={new Date()}
        calendarIcon={
          <RiCalendar2Fill color={'#9B9FAA'} size={20} />
        }
      />
    </CalendarWrapper>
  );
};
