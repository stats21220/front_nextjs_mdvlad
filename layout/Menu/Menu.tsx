import { IMenuProps } from "./Menu.props";
import styles from './Menu.module.css';
import cn from 'classnames';



export const MenuItem = ({menu, className, ...props}: IMenuProps) => {

  return (
        <div className={cn(styles.menu)}>{menu?.map((first) => first._id === 0 ? 
          <ul key={first.pagesLvl.pageId} className={cn(styles.List)}>
            <li key={first.pagesLvl.title} className={cn(styles.firstListItem)}>
              <span>{first.pagesLvl.title}</span>
            </li>
            <ul className={cn(styles.secondList)}>{menu?.map((second) => first.pagesLvl.pageId === second._id ? 
            <li key={second.pagesLvl.title} className={cn(styles.secondListItem)}>
              <span>{second.pagesLvl.title}</span>
            </li> :
            <></>)}
            </ul>
          </ul> : 
          <></>
      )}</div>
  );
};
