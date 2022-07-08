import { Outlet } from 'react-router-dom';

import { Container } from '../components/Container';
import { SwitchTheme } from '../components/SwitchTheme';

export function Layout() {
  return (
    <>
      <Container>
        <SwitchTheme />
      </Container>
      <Outlet />
    </>
  );
}

Layout.propTypes = {};
