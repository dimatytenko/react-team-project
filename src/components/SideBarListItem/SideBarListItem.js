import { useSelector } from 'react-redux';

import { Item } from './SideBarListItem.styled';
import { languageSelectors } from '../../redux/language';

export const SideBarListItem = ({ title }) => {
  const lang = useSelector(languageSelectors.getLanguage);
  return (
    <Item>
      <p>{title[lang]}</p>
    </Item>
  );
};
