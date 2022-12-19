import { IHeaderProps } from "./Header.props";
import styles from './Header.module.css';
import ILogo from './logo.svg';
import Link from 'next/link';
import { Ptag } from '../../components';
import IPhone from './phone.svg';
import IUser from './user.svg';
import IEnter from './enter.svg';
import ISale from './sale.svg';
import cn from 'classnames';

export const Header = ({className, ...props}: IHeaderProps) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <nav className={styles.nav}>
        <div className={styles.wrapper_nav}>
          <div className={styles.wrapper_nav_item}>
            <div><Link href="/company"><span>О компании</span></Link></div>
            <div><span>Покупателям</span></div>
            <div><span>Поставщикам</span></div>
            <div><span>Оплата и доставка</span></div>
            <div><span>Контакты</span></div>
            <div><span>Акции</span></div>
          </div>
          <div className={styles.wrapper_user}>
            <div className={styles.wrapper_user_item}><IUser/><span>Регистрация</span></div>
            <div className={styles.wrapper_user_item}><IEnter/><span>Вход</span></div>
          </div>
        </div>
      </nav>
      <div className={styles.block_1}>
        <div className={styles.wrapper_block_item}>
          <div className={styles.logo}><Link href={'/'}><ILogo/></Link><Ptag size="s" color="primary">ПРОДАЖА ПИЛОМАТЕРИАЛОВ И СТРОЙТОВАРОВ</Ptag></div>
          <div className={styles.search}><input type="text" /></div>
          <div className={styles.phone}><IPhone/><a href="tel:8 (4922) 22-21-02"><span>8 (4922) 22-21-02</span></a></div>
          <div className={styles.cart}>корзина</div>
        </div>
      </div>
      <div className={styles.block_2}>
        <div className={styles.wrapper_menu}>
          <div className={styles.menu_1}><span>Весь каталог</span></div>
          <div className={styles.menu_2}><span>Программа лояльности</span></div>
          <div className={styles.menu_3}><span>Услуги</span></div>
          <div className={styles.menu_4}><span>Оплата и доставка</span></div>
          <div className={styles.menu_5}><span>Новости и акции</span></div>
          <div className={styles.menu_6}><ISale/><span>Распрадажа</span></div>
        </div>
      </div>
    </header>
  );
};