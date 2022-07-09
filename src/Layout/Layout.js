import { Outlet } from 'react-router-dom';
// import { SwitchTheme } from '../components/SwitchTheme';

import { Header } from '../components/Header';

export function Layout() {
  return (
    <>
      {/* <SwitchTheme /> */}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
