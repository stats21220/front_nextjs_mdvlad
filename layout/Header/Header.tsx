import { IHeaderProps } from "./Header.props";
import styles from './Header.module.css';
import ILogo from './logo.svg';
import Link from "next/link";

export const Header = ({...props}: IHeaderProps) => {
  return (
    <header {...props}>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
            <div><Link href="/company"><span>О компании</span></Link></div>
          <div><span>Покупателям</span></div>
          <div><span>Поставщикам</span></div>
          <div><span>Оплата и доставка</span></div>
          <div><span>Контакты</span></div>
          <div><span>Акции</span></div>
        </div>
        <div className={styles.wrapper_user}>
          <div><span>Регистрация</span></div>
          <div><span>Вход</span></div>
        </div>
      </nav>
      <div>
        <div className={styles.wrapper_block_2}>
          <div className={styles.logo}><ILogo/></div>
          <div className={styles.search}><input type="text" /></div>
          <div className={styles.phone}>8 (4922) 22-21-02</div>
          <div className={styles.cart}>корзина</div>
        </div>
      </div>
      <div>
        <div className={styles.wrapper_menu}>
          <div className={styles.menu_1}><span>Весь каталог</span></div>
          <div className={styles.menu_2}><span>Программа лояльности</span></div>
          <div className={styles.menu_3}><span>Услуги</span></div>
          <div className={styles.menu_4}><span>Оплата и доставка</span></div>
          <div className={styles.menu_5}><span>Новости и акции</span></div>
          <div className={styles.menu_6}><span>Распрадажа</span></div>
        </div>
      </div>
    </header>
  );
};