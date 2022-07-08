import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { BurgerMenu } from '../BurgerMenu';

export const NavInHeader = () => {
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  return (
    <nav>
      {isLoggedIn ? (
        <ul>
          <li>
            <NavLink to="/login" exact="true">
              sign in
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" exact="true">
              registration
            </NavLink>
          </li>
        </ul>
      ) : (
        <div>
          <BurgerMenu />
          <ul>
            <li>
              <NavLink to="/diary" exact="true">
                diary
              </NavLink>
            </li>
            <li>
              <NavLink to="/calculator" exact="true">
                calculator
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export const NavInOverlay = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/diary" exact="true">
            diary
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" exact="true">
            calculator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
