import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import IArrow from './icons/arrow.svg';


export const Menu = () => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const router = useRouter();

  
  const openSecondLevel = (secondCategory: number) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id == secondCategory) {
				m.isOpened = m.isOpened === undefined ? true : !m.isOpened;
			}
			return m;
		}));
	};

  // useEffect(() => setMenu && setMenu(menu.map((item) => {
  //   // if (router.asPath.split('/')[2] == `${item.pagesLvl[0].parentId}`) {
      
  //   //   item.isOpened = false;
  //   //   return item;
  //   // }

  //   item.isOpened = true;
  //   return item;
  // })), []);


	// const buildFirstLevel = () => {
	// 	return (
	// 		<ul className={styles.firstLevelList}>
	// 			{firstLevelMenu && firstLevelMenu.map(m => (
	// 				<li key={m.title} aria-expanded={m.parentId == firstCategory}>
	// 					<div className={cn(styles.firstLevel, {
	// 								[styles.firstLevelActive]: m.parentId == firstCategory
	// 							})}>
	// 						<Link href={`/page-products/${m.pageId}`}><span className={cn({
  //               [styles.levelActiveFirst]: router.asPath.split('/')[2] === translit.translitForUrl(m.title)})
  //             }>{m.title}</span></Link>
                
  //             <div onClick={() => openSecondLevel(m.pageId)}>click</div>
  //           </div>
  //             {m.parentId == firstCategory && buildSecondLevel(m.pageId)}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// };

	// const buildSecondLevel = (secondId: number) => {
    

  //   return (
  //     <>
  //       {
  //         menu.map((secondMenu) => {
  //           if (secondMenu._id === secondId) {
  //             if ((router.asPath.split('/')[2] === `${secondId}`)) {
  //               secondMenu.isOpened = false;
  //             }
              
  //             if (!(router.asPath.split('/')[2] === `${secondId}`)) {
  //               menu.map((s) => {
  //                 if ([...s.pagesLvl.map(p => p.pageId)].includes(+router.asPath.split('/')[2])) {
  //                   s.isOpened = false;
  //                 }
  //               });
  //             }
  //             return (
  //               <ul key={secondMenu._id + ''} className={cn(styles.secondBlock, {
  //                     [styles.visuallyHidden]: secondMenu.isOpened,
  //                     [styles.thirdLevelActive]: `/page-products/${secondMenu?._id}` == router.asPath,
  //                     })}>
  //                 {
  //                   secondMenu.pagesLvl.map((secondItem) => {
  //                     return (<div key={secondItem.title}>
  //                       <Link href={'/page-products/' + secondItem.pageId}>
  //                         <li  className={cn({
  //                             [styles.visuallyHidden]: secondMenu.isOpened,
  //                             [styles.levelActive]: router.asPath.split('/')[2] === `${secondItem.pageId}`,
  //                             // [styles.visuallyHidden]: !firstLevelMenu?.pagesLvl.map((firstId) => {
  //                             //   firstId.pageId === secondId; // ДУМАЙ
  //                             // }),
  //                         })}>
  //                           {secondItem.title}
  //                         </li>
  //                       </Link>
  //                       {/* <div>{buildThirdLevel(secondItem.pageId)}</div> */}
  //                       </div>
  //                     );
  //                   })
  //                 }
  //               </ul>
  //             );
  //           }
  //         })
  //       }
  //     </>
  //   );
	// };

  return (
		<div className={styles.menu} role='navigation'>
			{/* {buildFirstLevel()} */}
		</div>
	);
};
