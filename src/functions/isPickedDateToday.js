import format from 'date-fns/format';

export const isPickedDateToday = pickedDate => {
  const formattedPickedDate = format(
    pickedDate,
    'dd-MM-yyyy'
  );
  const formattedToday = format(new Date(), 'dd-MM-yyyy');
  const areDatesEqual =
    formattedPickedDate === formattedToday;
  return areDatesEqual;
};
