import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import IArrow from './icons/arrow.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const Menu = () => {
  
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();


  const buildFirstLvl = () => { // подумать над роутами

    const firstMenu = menu?.find((i) => i._id === firstCategory);

    if (firstMenu) {
      return (
        <>
          {firstMenu.pagesLvl.map((firstMenuItem) => (
           <div key={firstMenuItem.pageId}>
            <Link href={'/page-products/' + firstMenuItem.pageId}>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: firstMenu._id === firstCategory
                })}>
                  <span>{firstMenuItem.title}</span>
                  <IArrow/>
                </div>
            </Link>
            {buildSecondLvl(firstMenuItem.pageId)}
           </div>
          ))}
        </>
      );
    }
  };

  const buildSecondLvl = (id) => {
    const secondMenu = menu.find((secondLevel) => secondLevel._id === id);
    if (secondMenu && router.asPath.split('/')[2] === '' + id) {
      secondMenu.isOpened = true; // не забудь
      
    }
    console.log(router.asPath.split('/')[2]);
    
      return (
        <div>
          {secondMenu?.pagesLvl.map((secondMenuItem) => (
          <div key={secondMenuItem.pageId}>
            <Link href={'/page-products/' + secondMenuItem.pageId}>
                <div className={cn(styles.secondLevel, {
                  [styles.visuallyHidden]: !secondMenu.isOpened
                })}>
                  <span>{secondMenuItem.title}</span>
                </div>
                {buildThirdLvl(secondMenuItem.pageId)}
            </Link>
          </div>))}
        </div>
      );
  };

  const buildThirdLvl = (id) => {
    const thirdMenu = menu.find((thirdLevel) => thirdLevel._id === id);

    if (thirdMenu) {

      thirdMenu.isOpened = true; // не забудь

      return (
        <div>
          {thirdMenu.isOpened && thirdMenu.pagesLvl.map((thirdMenuItem) => (
            <div key={thirdMenuItem.pageId}>
              <Link legacyBehavior href={'/page-products/' + thirdMenuItem.pageId}>
                    <div className={cn(styles.thirdLevel, {
                      [styles.thirdLevelBlockOpened]: thirdMenu.isOpened
                  })}>
                    <span>{thirdMenuItem.title}</span>
                    </div>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={styles.menu}>
      {buildFirstLvl()}
    </div>
  );
};
