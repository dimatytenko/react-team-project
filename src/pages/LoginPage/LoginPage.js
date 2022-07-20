import { useEffect } from 'react';
import { Container } from '../../components/Container';
import Login from '../../components/AuthForms/Login';
import { MainBox } from '../MainPage/MainPage.styled';
import { LoginRegisterWrapper } from './LoginPage.styled';

export default function LoginPage() {
  useEffect(() => {
    document.title = 'Login - SlimMom ';
  }, []);

  return (
    <MainBox>
      <Container>
        <LoginRegisterWrapper>
          <Login />
        </LoginRegisterWrapper>
      </Container>
    </MainBox>
  );
}
