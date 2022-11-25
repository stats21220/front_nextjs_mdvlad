import { IFooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';
import { Htag } from "../../components";
import { Ptag } from "../../components";
import IPhone from './phone.svg';
import IClock from './clock.svg';
import IMail from './mail.svg';
import IAddress from './address.svg';
import IVk from './vk.svg';
import IYoutube from './youtube.svg';

export const Footer = ({className,...props}: IFooterProps) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
        <div className={cn(styles.wrapper, styles.list_1)}>
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
        <div className={cn(styles.wrapper, styles.list_2)}>
          <Htag className={styles.title} tag="h4" color="black" >КАТАЛОГ</Htag>
          <ul className={styles.list}>
            <li className={styles.listItem}><a href="#">Пиломатериалы</a></li>
            <li className={styles.listItem}><a href="#">Стройматериалы</a></li>
            <li className={styles.listItem}><a href="#">Банный магазин</a></li>
            <li className={styles.listItem}><a href="#">Сопутствующие товары</a></li>
            <li className={styles.listItem}><a href="#">Дверные и окнные блоки</a></li>
            <li className={styles.listItem}><a href="#">Лакокрасочные материалы</a></li>
            <li className={styles.listItem}><a href="#">Назначение</a></li>
            <li className={styles.listItem}><a className={styles.sale} href="#">РАСПРОДАЖА</a></li>
          </ul>
        </div>
        <div className={cn(styles.wrapper, styles.list_3)}>
          <Htag className={styles.title} tag="h4" color="black" >КОНТАКТЫ</Htag>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.phone} href="tel:8 (4922) 22-21-02">
                <IPhone/><span>8 (4922) 22-21-02</span>
              </a></li>
            <li className={styles.listItem}>
              <span className={styles.time}>
                <IClock/>
                <span>Пн. - Сб.: c 8:00 до 18:00<br/>Вс.: c 8:00 до 15:00</span>
              </span>
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
        <div className={styles.map}><iframe src="https://yandex.ru/map-widget/v1/?z=17&ol=biz&oid=1288897412" width="100%" height="100%" frameBorder="0"></iframe></div>
        <div className={styles.footer_bottom}>
            <div className={styles.footer_bottom_element}>
              <div>
                <a href="#" className={styles.footer_bottom_link} target="_blank"><span>Политика конфиденциальность</span></a>
                <a href="#" className={styles.footer_bottom_link}><span>Карта сайта</span></a>
              </div>
            </div>
            <div className={styles.footer_bottom_element}>
                <div>
                  <Ptag size="s" color="black">© 2012 - {format(new Date(), 'yyyy')} ТД Мир Дерева Владимир<br/>
                      Публикация информации с сайта mdvlad.ru без разрешения запрещена. <br/>
                      Информация на сайте mdvlad.ru не является публичной офертой.
                  </Ptag>
                </div>
                <div className={styles.icon}>
                  <IVk/>
                  <IYoutube/>
                </div>
            </div>
        </div>
    </footer>
  );
};