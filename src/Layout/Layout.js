import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SwitchTheme } from '../components/SwitchTheme';

import { Header } from '../components/Header';
import { MainModal } from '../components/MainModal';

export function Layout() {
  return (
    <>
      <Header />
      <SwitchTheme />
      <main>
        <Outlet />
        <MainModal />
      </main>
      <ToastContainer />
    </>
  );
}
