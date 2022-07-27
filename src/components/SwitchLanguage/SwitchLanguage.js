import {
  SwitchLanguages,
  SwitchLanguageWrapper,
} from './SwitchLanguage.styled';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';

import {
  languageReducer,
  languageSelectors,
} from '../../redux/language';

export const SwitchLanguage = () => {
  const dispatch = useDispatch();
  const lang = useSelector(languageSelectors.getLanguage);
  const { switchLanguage } = languageReducer;

  function handleClick(e) {
    let lang = !e.target.checked ? 'en' : 'ua';
    dispatch(switchLanguage(lang));
    i18next.changeLanguage(lang);
  }

  return (
    <SwitchLanguageWrapper>
      <SwitchLanguages
        checked={lang === 'en' ? false : true}
        onClick={handleClick}
      />
    </SwitchLanguageWrapper>
  );
};
