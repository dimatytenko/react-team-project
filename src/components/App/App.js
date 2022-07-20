import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeLight, ThemeDark } from '../../styles/Theme';
import { GlobalStyles } from '../../styles/GlobalStyles';
import {
  authOperations,
  authSelectors,
} from '../../redux/auth';
import { themeSelectors } from '../../redux/theme';
import { MainLoader } from '../../components/MainLoader';
import { PublicRoute } from '../../routes/PublicRoute';
import { PrivateRoute } from '../../routes/PrivateRoute';
import { Layout } from '../../Layout';
import { Redirect } from '../AuthForms/Redirect';

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
  const dispatch = useDispatch();
  const isRefreshing = useSelector(
    authSelectors.getIsRefreshing
  );

  const isTheme = useSelector(themeSelectors.getTheme);
  const currentTheme = !isTheme ? ThemeLight : ThemeDark;

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <ThemeProvider theme={currentTheme}>
          <Global styles={GlobalStyles} />

          <Suspense
            fallback={<MainLoader theme={currentTheme} />}
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <PublicRoute
                      restricted
                      redirectTo="/calculator"
                    >
                      <MainPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="login"
                  element={
                    <PublicRoute
                      restricted
                      redirectTo="/calculator"
                    >
                      <LoginPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="google-redirect"
                  element={
                    <PublicRoute
                      restricted
                      redirectTo="/calculator"
                    >
                      <Redirect />
                    </PublicRoute>
                  }
                />

                <Route
                  path="register"
                  element={
                    <PublicRoute
                      restricted
                      redirectTo="/calculator"
                    >
                      <RegistrationPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="diary"
                  element={
                    <PrivateRoute>
                      <DiaryPage theme={currentTheme} />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="calculator"
                  element={
                    <PrivateRoute>
                      <CalculatorPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="*"
                  element={<NotFoundPage />}
                />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </>
    )
  );
}
