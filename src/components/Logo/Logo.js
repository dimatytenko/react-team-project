import { Link } from 'react-router-dom';
import { LogoContainer } from './Logo.styled';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer></LogoContainer>
    </Link>
  );
};
