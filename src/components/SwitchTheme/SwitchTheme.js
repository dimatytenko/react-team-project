import { SwitchThemes } from './SwithTheme.styled';
import { useDispatch, useSelector } from 'react-redux';

import { themeReducer } from '../../redux/theme';
import { themeSelectors } from '../../redux/theme';

export const SwitchTheme = () => {
  const dispatch = useDispatch();
  const isTheme = useSelector(themeSelectors.getTheme);
  const { switchTheme } = themeReducer;

  function handleClick(e) {
    dispatch(switchTheme(e.target.checked));
  }

  return <SwitchThemes checked={isTheme} onClick={handleClick} />;
};
