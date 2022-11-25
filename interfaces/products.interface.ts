export interface IProductsModel {
  _id: string;
  productId: string;
  sortId: number;
  categories: number[];
  image: string;
  title: string;
  seoText: string;
  count: number;
}