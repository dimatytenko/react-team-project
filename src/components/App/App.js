import { Global } from '@emotion/react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { ThemeLight, ThemeDark } from '../../Theme';
import { GlobalStyles } from '../../GlobalStyles';
import { themeSelectors } from '../../redux/theme';
import { Container } from '../Container';
import { SwitchTheme } from '../SwitchTheme';

export function App() {
  const isTheme = useSelector(themeSelectors.getTheme);
  return (
    <>
      <ThemeProvider
        theme={!isTheme ? ThemeLight : ThemeDark}
      >
        <Global styles={GlobalStyles} />
        <Container>
          <h1>Hi team</h1>
          <SwitchTheme />
        </Container>
      </ThemeProvider>
    </>
  );
}
