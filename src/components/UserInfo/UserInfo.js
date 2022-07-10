import { useSelector, useDispatch } from 'react-redux';

import {
  authSelectors,
  authOperations,
} from '../../redux/auth';

import { UserName, UserButton } from './UserInfo.styled';

export function UserInfo() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);

  return (
    <>
      <UserName>{nameUser}</UserName>
      <UserButton
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Exit
      </UserButton>
    </>
  );
}
