import format from 'date-fns/format';

export const formatDateForUser = pickedDate => {
  const formattedPickedDate = format(
    pickedDate,
    'dd.MM.yyyy'
  );
  return formattedPickedDate;
};
