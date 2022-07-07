// import {
//   authSelectors,
//   authOperations,
// } from '../../redux/auth';
// import { useSelector, useDispatch } from 'react-redux';

import {
  UserInfowrapper,
  UserName,
  UserButton,
} from './UserInfo.styled';

export function UserInfo() {
  //   const dispatch = useDispatch();
  // const nameUser = useSelector(authSelectors.getUsername);

  return (
    <UserInfowrapper>
      <UserName>
        Nic
        {/* {nameUser} */}
      </UserName>
      <UserButton
        // onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Exit
      </UserButton>
    </UserInfowrapper>
  );
}
