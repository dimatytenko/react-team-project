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
  just


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
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('https://cdn-icons-png.flaticon.com/24/197/197572.png')`,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#003892',

      width: 28,
      height: 28,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundImage: `url('https://cdn-icons-png.flaticon.com/24/323/323310.png')`,
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
