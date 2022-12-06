import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import IArrow from './icons/arrow.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';



export const Menu = () => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const router = useRouter();

  
  const open = (isOpen: number) => {
    const newMenu = menu.map((m) => {
      if (m._id === isOpen) {
        m.isOpened = !m.isOpened;
      }
      return m;
    });
    setMenu && setMenu(newMenu);
  };
  
  useEffect(() => open(+router.asPath.split('/')[2]), []);

  const firstMenu = menu.find((i) => i._id === firstCategory);


  const buildFirstLvl = () => {

    if (firstMenu) {

    return (
      firstMenu.pagesLvl.map((first) => {
        return (<div key={first.title}>
          <div  className={styles.firstLevel} onClick={() => open(first.pageId)}>
            <Link href={'/page-products/' + first.pageId}><div>{first.title}</div></Link>
            <IArrow/>
          </div>
          {buildSecondLvl(first.pageId)}
        </div>);
      })
    );
    }
    return <></>;
  };

  const buildSecondLvl = (secondId: number) => {

    const secondLvl = menu.find((id) => id._id === secondId);


    return secondLvl && secondLvl?.pagesLvl.map((second) => {
      return (
              <div key={second.title} className={cn(styles.secondLevel, {
                [styles.visuallyHidden]: !secondLvl.isOpened
              })}>
                <Link  href={'/page-products/' + second.pageId}>
                  <div>{second.title}</div>
                </Link>
              </div>
            );
    });
    // const router = useRouter();

    // if ((router.asPath.split('/')[2] === secondId + '')) {
    //   return secondLvl?.pagesLvl.map((second) => {
    //     return (
    //       <div key={second.pageId} className={cn(styles.secondLevel)}>
    //         <Link href={'/page-products/' + second.pageId}>
    //           <div>{second.title}</div>
    //         </Link>
    //       </div>
    //     );
    //   });
    // }
    // return (<></>);

  };
  return (
    <div className={styles.menu}>
      {buildFirstLvl()}
    </div>
  );
};


//   const { menu, setMenu, firstCategory } = useContext(AppContext);
//   const router = useRouter();
//   console.log('menu');
  
//   const openLevel = (id: number) => {
//     console.log('openLvl');
    
//     setMenu && setMenu(menu.map((menuId) => {
      
//       if (menuId.isOpened === undefined) {
//         menuId.isOpened = !menuId.isOpened;
//       }

//       if (menuId._id === id) {
//         menuId.isOpened = !menuId.isOpened;
//       }
//       return menuId;
//     }));
//   };

//   const buildFirstLvl = () => { // подумать над роутами

//     const firstMenu = menu?.find((i) => i._id === firstCategory);
//     console.log('first');
    

//     if (firstMenu) {
//       return (
//         <>
//           {firstMenu.pagesLvl.map((firstMenuItem) => (
//            <div key={firstMenuItem.pageId}>
//             <Link href={'/page-products/' + firstMenuItem.pageId}>
//                 <div className={cn(styles.firstLevel, {
//                 })} onClick={() => openLevel(firstMenuItem.pageId)}>
//                   <span>{firstMenuItem.title}</span>
//                   <div><IArrow/></div>
//                 </div>
//             </Link>
//               {buildSecondLvl(firstMenuItem.pageId)}
//            </div>
//           ))}
//         </>
//       );
//     }
//   };

//   const buildSecondLvl = (id) => {
//     const secondMenu = menu.find((secondLevel) => secondLevel._id === id);

//     console.log('second');
    
//       if ( secondMenu && router.asPath.split('/')[2] === '' + secondMenu?._id && !(secondMenu?.isOpened)) {
//         secondMenu.isOpened = false;
//       }
    
//       return (
//         <div>
//           {secondMenu?.pagesLvl.map((secondMenuItem) => {

//             return (
//               <div key={secondMenuItem.pageId}>
//                 <Link href={'/page-products/' + secondMenuItem.pageId}>
//                     <div className={cn(styles.secondLevel, {
//                       [styles.visuallyHidden]: 
//                         secondMenu.isOpened === true ||
//                         secondMenu.isOpened === undefined &&
//                         (router.asPath.split('/')[2] !== '' + secondMenuItem.parentId),
//                       [styles.levelActive]: router.asPath.split('/')[2] === '' + secondMenuItem.pageId
//                     })} onClick={() => openLevel(secondMenuItem.pageId)}>
//                       <span>{secondMenuItem.title}</span>
//                     </div>
//                 </Link>
//               </div>);
//           })}
//         </div>
//       );
//   };

//   return (
//     <div className={styles.menu}>
//       {buildFirstLvl()}
//     </div>
//   );
// };
