import { createTheme } from '@mui/material/styles';

export const ThemeLight = createTheme({
  palette: { mode: 'light' },
  backgrounds: {
    bodyPrimary: '#ffffff',
    bodySecondary: '#F0F1F3',
    buttonPrimary: '#FC842D',
    buttonSecondary: '#ffffff',
    loaderPrimary: '#FC842D',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    userInfo: '#EFF1F3',
    sidebar: '#F0F1F3',
    userBack: 'transparent',
    modalOverlay: 'rgba(33, 33, 33, 0.12)',
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
    secondary: '#9d5623',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});

export const ThemeDark = createTheme({
  palette: { mode: 'dark' },
  backgrounds: {
    bodyPrimary: '#292e4b',
    bodySecondary: '#0f1136',
    buttonPrimary: '#FC842D',
    buttonSecondary: '#ffffff',
    loaderPrimary: '#ffffff',
    backdrop: 'rgba(0, 0, 0, 0.00)',
    userInfo: '#9B9FAA',
    sidebar: '#363570',
    userBack: '#292e4b',
    modalOverlay: 'rgba(33, 33, 33, 0.12)',
  },
  fontColors: {
    primary: '#ffffff',
    secondary: '#ffffff',
    modify: '#FC842D',
    buttonPrimary: '#ffffff',
    buttonSecondary: '#FC842D',
  },
  hovers: {
    primary: '#FC842D',
    secondary: '#9d5623',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});
