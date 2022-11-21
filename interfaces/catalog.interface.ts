
export interface IChildCatalogItem {
  pageId: number;
  parentId: number;
  title: string;
  sortId: number;
}

export interface ICatalogItem {
  _id: number;
  pagesLvl: IChildCatalogItem[]
}