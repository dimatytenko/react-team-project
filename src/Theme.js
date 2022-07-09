import { createTheme } from '@mui/material/styles';

export const ThemeLight = createTheme({
  palette: { mode: 'light' },
  backgrounds: {
    bodyPrimary: '#ffffff',
    buttonPrimary: '#FC842D',
    buttonSecondary: '#ffffff',
    loaderPrimary: '#FC842D',
    backdrop: 'rgba(0, 0, 0, 0.55)',
  },
  fontColors: {
    primary: '#9B9FAA',
    secondary: '#212121',
    modify: '#FC842D',
    buttonPrimary: '#ffffff',
    buttonSecondary: '#FC842D',
  },
  hovers: {
    primary: '#FC842D',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});

export const ThemeDark = createTheme({
  palette: { mode: 'dark' },
  backgrounds: {
    bodyPrimary: '#4f4c4c',
    buttonPrimary: '#FC842D',
    buttonSecondary: '#ffffff',
    loaderPrimary: '#ffffff',
    backdrop: 'rgba(0, 0, 0, 0.05)',
  },
  fontColors: {
    primary: '#9B9FAA',
    secondary: '#212121',
    modify: '#FC842D',
    buttonPrimary: '#ffffff',
    buttonSecondary: '#FC842D',
  },
  hovers: {
    primary: '#FC842D',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});
