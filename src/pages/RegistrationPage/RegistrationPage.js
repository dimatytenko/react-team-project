import { Container } from '../../components/Container';
import { MainBox } from '../MainPage/MainPage.styled';
import { LoginRegisterWrapper } from '../LoginPage/LoginPage.styled';
import RegistrationForm from '../../components/AuthForms/RegistrationForm';

export default function RegistrationPage() {
  return (
    <MainBox>
      <Container>
        <LoginRegisterWrapper>
          <RegistrationForm />
        </LoginRegisterWrapper>
      </Container>
    </MainBox>
  );
}
