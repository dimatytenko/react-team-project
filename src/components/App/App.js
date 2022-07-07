import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

import { ThemeLight } from '../../Theme';
import { GlobalStyles } from '../../GlobalStyles';
import { Container } from '../Container';

export function App() {
  return (
    <>
      <ThemeProvider theme={ThemeLight}>
        <Global styles={GlobalStyles} />
        <Container>
          <h1>Hi team</h1>
        </Container>
      </ThemeProvider>
    </>
  );
}
