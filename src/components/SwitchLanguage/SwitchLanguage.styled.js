import styled from '@emotion/styled';
import Switch from '@mui/material/Switch';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const SwitchLanguageWrapper = styled.div`
  ${mediaTablet(`
  position: absolute;
  z-index: 200;
  right: 50px;
  top:85px;
  `)}

  ${mediaDesktop(`
    right: 80px;
    top: 50px;
  `)}
`;

export const SwitchSubContainer = styled.div`
  width: 280px;
  height: 38px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  ${mediaTablet(`
    position: relative;
    min-width: 704px;
    height: unset;

  `)}

  ${mediaDesktop(`
    min-width: 1264px;
  `)}
`;

export const SwitchLanguages = styled(Switch)(
  ({ theme }) => ({
    width: 54,
    height: 32,
    padding: 7,

    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:after': {
          content: "'ua'",
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? '#003892'
          : '#001e3c',
      width: 28,
      height: 28,
      '&:after': {
        content: "'en'",
        position: 'absolute',
        width: '100%',
        height: '100%',
        color:
          theme.palette.mode === 'dark'
            ? '#ffffff'
            : '#aab4be',
        left: '50%',
        top: '50%',
        transform: 'translate(-35%, -35%)',
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? '#8796A5'
          : '#aab4be',
      borderRadius: 20 / 2,
    },
  })
);
