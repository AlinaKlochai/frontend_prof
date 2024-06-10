import { FC, useContext } from 'react';
import { IPageContext, PageContext } from '../../App';


const NavItem: FC<{ title: string }> = ({ title }) => {
  //3. Изпользование значения, полученного из еонтекста
  const { setPage } = useContext(PageContext) as IPageContext;
  return (
    <li onClick={() => setPage(title)} className="commonButton">{title}</li>
  );
};

export default NavItem;

