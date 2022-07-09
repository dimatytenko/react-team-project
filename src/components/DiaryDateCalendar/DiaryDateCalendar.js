import { useState } from 'react';
import { RiCalendar2Fill } from 'react-icons/ri';
import { Calendar } from './DiaryDateCalendar.styled';

export const DiaryDateCalendar = () => {
  const [pickedDate, setPickedDate] = useState(new Date());

  return (
    <Calendar
      onChange={setPickedDate}
      value={pickedDate}
      autoFocus={false}
      clearIcon={null}
      showLeadingZeros={true}
      calendarIcon={
        <RiCalendar2Fill color={'#9B9FAA'} size={20} />
      }
    />
  );
};
