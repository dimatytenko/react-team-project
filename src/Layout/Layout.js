import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SwitchTheme } from '../components/SwitchTheme';

import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { SwitchSubContainer } from '../components/SwitchTheme/SwithTheme.styled';
import { Main } from './Layout.styled';
export function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <SwitchSubContainer>
            <SwitchTheme />
          </SwitchSubContainer>
        </Container>

        <Outlet />
      </Main>
      <ToastContainer />
    </>
  );
}
