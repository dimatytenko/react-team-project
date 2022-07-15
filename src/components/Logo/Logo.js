import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import {
  LogoContainer,
  LogoMom,
  LogoSlim,
  LogoFirst,
} from './Logo.styled';
import { useWindowDimensions } from '../../customHooks/useWindowDimensions';

export const Logo = () => {
  const { width } = useWindowDimensions();
  const isLoggedIn = useSelector(
    authSelectors.getIsLoggedIn
  );

  return (
    <LogoContainer>
      <LogoFirst></LogoFirst>
      {(isLoggedIn && <LogoSlim></LogoSlim>) ||
        (!isLoggedIn && width > 768 && (
          <LogoSlim></LogoSlim>
        ))}
      {(isLoggedIn && <LogoMom></LogoMom>) ||
        (!isLoggedIn && width > 768 && <LogoMom></LogoMom>)}
    </LogoContainer>
  );
};
