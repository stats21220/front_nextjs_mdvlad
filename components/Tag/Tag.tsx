import cn from 'classnames';
import styles from './Tag.module.css';
import { ITag } from "./Tag.props";

export const Tag = ({size='m', color='cream',href, children, className, ...props}: ITag) => {
  return <div className={cn(styles.tag, className, {
    [styles.cream]: color === 'cream',
    [styles.m]: size === 'm'
  })} {...props}>
    {
      href 
        ? <a href={href} tabIndex={-1} >{children}</a>
        : <>{children}</>
    }
  </div>;
};