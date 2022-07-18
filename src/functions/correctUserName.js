export function correctUserName(nameUser) {
  const convertNameToArray = nameUser.split(' ');
  if (
    convertNameToArray.length >= 2 ||
    convertNameToArray[0].length > 20
  ) {
    const getFirstLatters = convertNameToArray.map(char =>
      char.slice(0, 1).toUpperCase()
    );
    const arrayFirstLatters = getFirstLatters.join(' ');
    return arrayFirstLatters;
  } else return nameUser;
}
