import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <>
      {shouldRedirect ? (
        <Navigate to={redirectTo} replace={false} />
      ) : (
        children
      )}
    </>
  );
}

