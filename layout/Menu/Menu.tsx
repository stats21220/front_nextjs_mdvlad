import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import IArrow from './icons/arrow.svg';
import { IFirstItem } from '../../interfaces/menu.interface';


export const Menu = () => {
  const {menu, setMenu} = useContext(AppContext);
  
  const openSecondLevel = (pageId: number) => {
    setMenu && setMenu({
      firstRoute: menu?.firstRoute || [],
      secondRoute: menu?.secondRoute || [],
      thirdRoute: menu?.thirdRoute  || [],
      pages: menu?.pages.map((p: IFirstItem) => {
        if (p.pageId === pageId) {
          p.isActive = !p.isActive
        }
        return p
      }) || []
    });
  }

  const router = useRouter();
  
  const buildMunuFirstLvl = () => (
    <div>
      {
        menu?.pages?.map((first) => {

          if (first.route === router.asPath.split('/')[2]) {
            first.isActive = true
          }

          return (
            <ul key={first.route} className={styles.firstLevelList}>
              <li key={first.title} className={styles.firstLevel}>
                <Link href={'/' + 'page-products' + '/' + first.route}>
                  <div className={styles.firstLink}>
                    <span className={cn(styles.levelActiveFirstHover, {
                      [styles.levelActiveFirst] : first.route === router.asPath.split('/')[2]
                    })}>{first.title}
                    </span>
                  </div>
                </Link>
                <span className={styles.arrowActive} onClick={() => openSecondLevel(first.pageId)}><IArrow/></span>
              </li>
              <li className={cn({
                // [styles.visuallyHidden] : !(first.route === router.asPath.split('/')[2])
                [styles.visuallyHidden] : !first.isActive
              })}>
                {first.sec.map((second) => (
                  <ul key={second.route} className={styles.secondLevelList}>
                    <li key={second.title} className={styles.secondLevel}>
                      <Link href={'/' + 'page-products' + '/' + first.route + '/' + second.route}>
                        <div>
                          <span className={cn(styles.levelActiveHover, {
                            [styles.levelActive]: second.route === router.asPath.split('/')[3]
                          })}>
                            {second.title}
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                ))}
              </li>
            </ul>
          )
        }) 
      }
    </div>
  )
  return (
		<div className={styles.menu} role='navigation'>
      {buildMunuFirstLvl()}
		</div>
	);
};
