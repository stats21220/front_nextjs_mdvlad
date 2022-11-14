import React from "react";
import { IButtonProps } from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames'; // нужно установить типы

export const Button = ({appearance, arrow = 'none', children, className, ...props}: IButtonProps): JSX.Element => {
  return <>
    <button className={cn(styles.button, styles.hover, className, {
      [styles.primary]: appearance == 'primary',
      [styles.green]: appearance == 'green',
      [styles.orange]: appearance == 'orange',
      })}
      {...props}>{children}
      {arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow === 'down',
        [styles.right]: arrow === 'right'
      })}><ArrowIcon/></span>}
      </button>
  </>;
};