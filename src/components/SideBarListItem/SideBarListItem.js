import { Item } from './SideBarListItem.styled';

export const SideBarListItem = ({ title }) => {
  return (
    <Item>
      <p>{title.en}</p>
    </Item>
  );
};
