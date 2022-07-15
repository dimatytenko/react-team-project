import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Logo } from './Logo';

export const LinkLogo = () => {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  return (
    <>
      {!isLoggedIn ? (
        <Link to="/">
          <Logo />
        </Link>
      ) : (
        <Link to="/calculator">
          <Logo />
        </Link>
      )}
    </>
  );
};
