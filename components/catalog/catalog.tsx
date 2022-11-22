// import styles from './catalog.module.css';
// import { ICatalogItemsProp } from "./catalog.props";
// import cn from 'classnames';


// export const Catalog = ({catalog, className, ...props}: ICatalogItemsProp) => {

//   //вывод массива
//   console.log(catalog);

//   const lvl = (id: number) =>
//     catalog.map((catalogItem) => <>
//       {
//         catalogItem._id === id ? 
//           catalogItem.pagesLvl.map((category) => <ul className={cn(className, styles.list)} key={catalogItem._id} {...props}>{
//               <li key={category.pageId}>{category.title}</li>
//               }
//         </ul>) :
//           <></>
//       }
//     </>
//   );
//   return lvl(0);
// };



  //лучше подумать над формированием
  // const lvl = (id: number) => <>
  //   {
  //     catalog.map((catalogItem) => <>
  //       {
  //         catalogItem._id === id ? 
  //           <>{catalogItem.pagesLvl.map((category) => <ul key={category.title}>{
  //               category.parentId == id ? 
  //                 <><li key={category.pageId}>{category.title}</li><>{lvl(category.pageId)}</></> : 
  //                 <></>}
  //           </ul>)}</> :
  //           <></>
  //       }
  //     </>)
  //   }
  // </>;