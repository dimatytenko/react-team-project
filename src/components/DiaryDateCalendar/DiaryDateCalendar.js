import { RiCalendar2Fill } from 'react-icons/ri';
import { Calendar } from './DiaryDateCalendar.styled';

export const DiaryDateCalendar = ({
  pickedDate,
  setPickedDate,
}) => {
  return (
    <Calendar
      onChange={setPickedDate}
      value={pickedDate}
      autoFocus={false}
      clearIcon={null}
      showLeadingZeros={true}
      maxDate={new Date()}
      calendarIcon={
        <RiCalendar2Fill color={'#9B9FAA'} size={20} />
      }
    />
  );
};
