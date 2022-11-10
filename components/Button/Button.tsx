import React from "react";
import { IButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames'; // нужно установить типы

export const Button = ({appearance, children, className, ...props}: IButtonProps): JSX.Element => {
  return <>
    <button className={cn(styles.button, styles.hover, className, {
      [styles.primary]: appearance == 'primary',
      [styles.green]: appearance == 'green',
      [styles.orange]: appearance == 'orange',
      })}
      {...props}>{children }</button>
  </>;
};