import { createTheme } from '@mui/material/styles';

export const ThemeLight = createTheme({
  palette: { mode: 'light' },
  backgrounds: {
    bodyPrimary: '#E5E5E5',
    buttonPrimary: '#FC842D',
    buttonSecondary: '#ffffff',
  },
  fontColors: {
    primary: '#9B9FAA',
    secondary: '#212121',
    modify: '#FC842D',
    buttonPrimary: '#ffffff',
    buttonSecondary: '#FC842D',
  },
  hovers: {},
  transitions: {
    primary: '0.5s ease 0s',
  },
});

export const ThemeDark = createTheme({
  palette: { mode: 'dark' },
  backgrounds: {
    bodyPrimary: '#4f4c4c',
  },
  fontColors: {
    primary: '#9B9FAA',
    secondary: '#212121',
    modify: '#FC842D',
    buttonPrimary: '#ffffff',
    buttonSecondary: '#FC842D',
  },
  hovers: {},
  transitions: {
    primary: '0.5s ease 0s',
  },
});
