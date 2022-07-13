import { Link } from 'react-router-dom';
import {
  LogoContainer,
  LogoMom,
  LogoSlim,
  LogoFirst,
} from './Logo.styled';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        <LogoFirst></LogoFirst>
        <LogoSlim></LogoSlim>
        <LogoMom></LogoMom>
      </LogoContainer>
    </Link>
  );
};
