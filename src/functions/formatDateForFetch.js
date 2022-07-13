import format from 'date-fns/format';

export const formatDateForFetch = pickedDate => {
  const formattedPickedDate = format(
    pickedDate,
    'yyyy-MM-dd'
  );
  return formattedPickedDate;
};
