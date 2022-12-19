
export interface IProductPrice {
  price: string,
  measuring: 'шт.' | 'м2' | 'упак.';
}

export interface IProductsModel {
  _id: string;
  productId: string;
  sortId: number;
  categories: number[];
  image: string;
  title: string;
  priceProduct: IProductPrice[];
  oldPriceProduct: IProductPrice[];
  seoText: string;
  count: number;
}