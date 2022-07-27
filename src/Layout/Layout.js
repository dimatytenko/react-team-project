import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { SwitchTheme } from '../components/SwitchTheme';
import { SwitchLanguage } from '../components/SwitchLanguage';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { SwitchSubContainer } from '../components/SwitchTheme/SwithTheme.styled';
export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <SwitchSubContainer>
            <SwitchTheme />
            <SwitchLanguage />
          </SwitchSubContainer>
        </Container>

        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
}
