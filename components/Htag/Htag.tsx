import { IHtagProps } from "./Htag.props";
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({tag, color, weight = 500, children, className, ...props}: IHtagProps): JSX.Element => {
  switch(tag) {
    case 'h1':
      return <><h1 className={cn(styles.h1, className, {
        [styles.black]: color === 'black',
        [styles.white]: color === 'white',
        [styles.primary]: color === 'primary',
        [styles.s]: weight === 500,
        [styles.m]: weight === 700,
        [styles.l]: weight === 900
      })} {...props} >{children}</h1></>;
    case 'h2':
      return <h2 className={cn(styles.h2, className, {
        [styles.black]: color === 'black',
        [styles.white]: color === 'white',
        [styles.primary]: color === 'primary',
        [styles.s]: weight === 500,
        [styles.m]: weight === 700,
        [styles.l]: weight === 900
      })} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(styles.h3, className, {
        [styles.black]: color === 'black',
        [styles.white]: color === 'white',
        [styles.primary]: color === 'primary',
        [styles.s]: weight === 500,
        [styles.m]: weight === 700,
        [styles.l]: weight === 900
      })}{...props}>{children}</h3>;
    default:
      return <></>;
  }
};