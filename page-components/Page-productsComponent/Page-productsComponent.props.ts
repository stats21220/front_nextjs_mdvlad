import { IMenuItem } from "../../interfaces/menu.interface";
import { IPageProductsModel } from "../../interfaces/page-products.interface";
import { IProductsModel } from "../../interfaces/products.interface";

export interface IPageProductsComponentProps {
  menu: IMenuItem[];
  firstCategory: number;
  pageProducts: IPageProductsModel;
  products: IProductsModel[];
}