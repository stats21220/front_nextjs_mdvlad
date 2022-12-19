import { IMenuItem, IPageProductsModel, IProductsModel } from "../../interfaces";


export interface IPageProductsComponentProps {
  menu: IMenuItem;
  pageProducts: IPageProductsModel;
  products: IProductsModel[];
}