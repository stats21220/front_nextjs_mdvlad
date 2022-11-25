  export interface ProductCharacteristic {
      name: string;
      value: string;
  }

  export interface PriceProduct {
      price: string;
      measuring: string;
  }

  export interface OldPriceProduct {
      price: string;
      measuring: string;
  }

  export interface IProductModel {
      _id: string;
      productId: string;
      sortId: number;
      categories: number[];
      image: string;
      title: string;
      description: string;
      seoText: string;
      characteristics: ProductCharacteristic[];
      priceProduct: PriceProduct[];
      oldPriceProduct: OldPriceProduct[];
      count: number;
      tags: string[];
  }
