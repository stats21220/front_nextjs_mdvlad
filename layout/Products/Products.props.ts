import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IPageProductsModel, IProductsModel } from "../../interfaces";

export interface IProducts extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    products: IProductsModel[];
}