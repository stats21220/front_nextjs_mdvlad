import { IFooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { Htag } from "../../components";
import IPhone from './phone.svg';
import IClock from './clock.svg';
import IMail from './mail.svg';
import IAddress from './address.svg';
import IVk from './vk.svg';
import IYoutube from './youtube.svg';

export const Footer = ({className,...props}: IFooterProps) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.wrapper}>
        <div>
          <Htag className={styles.title} tag="h4" color="black" >О КОМПАНИИ</Htag>
          <ul className={styles.list}>
            <li className={styles.listItem}><a href="#">О магазине</a></li>
            <li className={styles.listItem}><a href="#">Юридическим лицам</a></li>
            <li className={styles.listItem}><a href="#">Поставщикам</a></li>
            <li className={styles.listItem}><a href="#">Оплата и доставка</a></li>
            <li className={styles.listItem}><a href="#">Условия возврата</a></li>
            <li className={styles.listItem}><a href="#">Акции</a></li>
            <li className={styles.listItem}><a href="#">Программа лояльности</a></li>
          </ul>
        </div>
        <div>
          <Htag className={styles.title} tag="h4" color="black" >КАТАЛОГ</Htag>
          <ul className={styles.list}>
            <li className={styles.listItem}><a href="#">Пиломатериалы</a></li>
            <li className={styles.listItem}><a href="#">Стройматериалы</a></li>
            <li className={styles.listItem}><a href="#">Банный магазин</a></li>
            <li className={styles.listItem}><a href="#">Сопутствующие товары</a></li>
            <li className={styles.listItem}><a href="#">Дверные и окнные блоки</a></li>
            <li className={styles.listItem}><a href="#">Лакокрасочные материалы</a></li>
            <li className={styles.listItem}><a href="#">Назначение</a></li>
            <li className={styles.listItem}><a href="#">РАСПРОДАЖА</a></li>
          </ul>
        </div>
        <div>
          <Htag className={styles.title} tag="h4" color="black" >КОНТАКТЫ</Htag>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="tel:8 (4922) 22-21-02">
                <IPhone/>8 (4922) 22-21-02
              </a></li>
            <li className={styles.listItem}>
              <a href="#" className={styles.time}>
                <IClock/>
                <span>Пн. - Сб.: c 8:00 до 18:00<br/>Вс.: c 8:00 до 15:00</span>
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="mailto:info@mdvlad.ru" className={styles.mail}>
                <IMail/>
                <span>info@mdvlad.ru</span>
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="#" className={styles.address}>
                <IAddress/>
                <span>
                  г.Владимир, ул. Куйбышева, 16а
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.map}></div>
        <div className={styles.footer_bottom}>
            <div className={styles.footer_bottom_div}>
              <div>
                <a href="#" className={styles.footer_bottom_link}><span>Политика конфиденциальность</span></a>
                <a href="#" className={styles.footer_bottom_link}><span>Карта сайта</span></a>
              </div>
            </div>
            <div className={styles.footer_bottom_div}>
                <div>
                  <p>© 2012 - 2022 ТД Мир Дерева Владимир<br/>
                      Публикация информации с сайта mdvlad.ru без разрешения запрещена.<br/>
                      Информация на сайте mdvlad.ru не является публичной офертой.
                  </p>
                </div>
                <div className={styles.icon}>
                  <IVk/>
                  <IYoutube/>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};