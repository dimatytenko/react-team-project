import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" replace={false} />
      )}
    </>
  );
}
