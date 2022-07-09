import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { ThemeLight, ThemeDark } from '../../Theme';
import { GlobalStyles } from '../../GlobalStyles';
import { themeSelectors } from '../../redux/theme';
import { MainLoader } from '../../components/MainLoader';

import { Layout } from '../../Layout';
const MainPage = lazy(() => import('../../pages/MainPage'));
const LoginPage = lazy(() =>
  import('../../pages/LoginPage')
);
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage')
);
const DiaryPage = lazy(() =>
  import('../../pages/DiaryPage')
);
const CalculatorPage = lazy(() =>
  import('../../pages/CalculatorPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage')
);

export function App() {
  const isTheme = useSelector(themeSelectors.getTheme);
  const currentTheme = !isTheme ? ThemeLight : ThemeDark;
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Global styles={GlobalStyles} />

        <Suspense
          fallback={<MainLoader theme={currentTheme} />}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />

              <Route
                path="register"
                element={<RegistrationPage />}
              />

              <Route path="login" element={<LoginPage />} />

              <Route path="diary" element={<DiaryPage />} />

              <Route
                path="calculator"
                element={<CalculatorPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
