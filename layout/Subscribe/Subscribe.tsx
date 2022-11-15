import { ISubscribeProps } from "./Subscribe.props";
import styles from './Subscribe.module.css';
import cn from 'classnames';
import { Htag } from "../../components";
import { Button } from "../../components";

export const Subscribe = ({className, ...props}: ISubscribeProps) => {
  return (
    <div className={cn(styles.subscribe, className)} {...props}>
      <div className={styles.wrapper}>
        <Htag tag="h4" color="white" >ПОДПИШИСЬ НА РАССЫЛКУ НАШИХ АКЦИЙ И НОВОСТЕЙ</Htag>
        <form action="">
          <input type="text" />
          <Button appearance="orange">ПОДПИСАТЬСЯ</Button>
        </form>
      </div>
    </div>
  );
};