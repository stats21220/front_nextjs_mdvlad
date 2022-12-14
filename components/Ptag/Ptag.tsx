
import styles from './Ptag.module.css';
import cn from 'classnames';
import { IPtag } from './Ptag.props';

export const Ptag = ({size = 'm', color, children, className, ...props}: IPtag) => {
  switch(size) {
    case 's':
      return <>
        <p className={cn(styles.p, styles.s, className, {
          [styles.black]: color === 'black',
          [styles.white]: color === 'white',
          [styles.primary]: color === 'primary'
        })}{...props}>{children}</p>
      </>;
    case 'm':
      return <>
        <p className={cn(styles.p, styles.m, className, {
          [styles.black]: color === 'black',
          [styles.white]: color === 'white',
          [styles.primary]: color === 'primary'
        })}{...props}>{children}</p>
      </>;
    case 'l':
      return <>
        <p className={cn(styles.p, styles.l, className, {
          [styles.black]: color === 'black',
          [styles.white]: color === 'white',
          [styles.primary]: color === 'primary'
        })}>{children}</p>
      </>;
    default: 
       return <></>;
  }
};