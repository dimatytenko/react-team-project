import { Outlet } from 'react-router-dom';

import { Container } from '../components/Container';
import { SwitchTheme } from '../components/SwitchTheme';
import { UserInfo } from '../components/UserInfo';

export function Layout() {
  return (
    <>
      <Container>
        <SwitchTheme />
        <UserInfo />
      </Container>
      <Outlet />
    </>
  );
}

Layout.propTypes = {};
