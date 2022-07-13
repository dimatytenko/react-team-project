import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SwitchTheme } from '../components/SwitchTheme';

import { Header } from '../components/Header';

export function Layout() {
  return (
    <>
      <Header />
      <SwitchTheme />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
}
