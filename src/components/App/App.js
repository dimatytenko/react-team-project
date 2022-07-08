import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { ThemeLight, ThemeDark } from '../../Theme';
import { GlobalStyles } from '../../GlobalStyles';
import { themeSelectors } from '../../redux/theme';
import { Container } from '../Container';
import { SwitchTheme } from '../SwitchTheme';

// const { MainPage } = lazy(() =>
//   import('../../pages/MainPage')
// );
// const { LoginPage } = lazy(() =>
//   import('../../pages/LoginPage')
// );
// const { RegistrationPage } = lazy(() =>
//   import('../../pages/RegistrationPage')
// );
// const { DiaryPage } = lazy(() =>
//   import('../../pages/DiaryPage')
// );
// const { CalculatorPage } = lazy(() =>
//   import('../../pages/CalculatorPage')
// );

export function App() {
  const isTheme = useSelector(themeSelectors.getTheme);
  return (
    <>
      <ThemeProvider
        theme={!isTheme ? ThemeLight : ThemeDark}
      >
        <Global styles={GlobalStyles} />

        <Container>
          <SwitchTheme />
        </Container>

        <Suspense fallback={<p>download...</p>}>
          <Routes></Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
