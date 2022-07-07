import { createTheme } from '@mui/material/styles';

export const ThemeLight = createTheme({
  palette: { mode: 'light' },
  backgrounds: {
    primary: '#E5E5E5',
  },
  fontColors: {
    appPrimary: 'white',
    bodyPrimary: '#2a363b',
  },
  hovers: {},
  transitions: {
    primary: '0.5s ease 0s',
  },
});

export const ThemeDark = createTheme({
  palette: { mode: 'dark' },
});
