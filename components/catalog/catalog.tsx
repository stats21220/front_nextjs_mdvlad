import { ICatalogItemsProp } from "./catalog.props";


export const Catalog = ({catalog}: ICatalogItemsProp) => {

  const lvl = (id: number) => <>
    {
      catalog.map((catalogItem) => <>
        {
          catalogItem._id === id ? <>
          {catalogItem.pagesLvl.map((category) => <ul key={category.title}>
          {category.parentId == id ? <>
          <li key={category.pageId}>{category.title}</li><>{lvl(category.pageId)}</></> : <></>}
          </ul>)}</> : <></> 
        }
      </>)
    }
  </>;
  return lvl(0);
};


// export const Catalog = ({catalog}: ICatalogItemsProp) => {


//   const lvl = (id: number, parentId: number) => <>
//     {
//       catalog.map((itemLvl) => <>
//         {
//           itemLvl._id === id ? <>{itemLvl.pagesLvl.map((c) => <ul>
//             {c.parentId == parentId  ? <li>{c.title}</li> : <></>}
//             {lvl(c.pageId,c.pageId )}
//           </ul>)}</> : <></> 
//         }
//       </>)
//     }
//   </>;

//   return lvl(0, 0);
// };