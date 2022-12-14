import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../../interfaces/menu.interface";
import { IPageProductsModel } from "../../interfaces/page-products.interface";
import { IProductsModel } from "../../interfaces/products.interface";
import {ParsedUrlQuery} from 'node:querystring';
import { PageProductsComponent } from "../../page-components";

import translit, { translitForUrl } from "translit-npm";


function PageProducts({ menu, pageProducts, products, firstCategory }: IPageProductsProps) {


  return <PageProductsComponent 
    menu={menu}
    pageProducts={pageProducts} 
    products={products} 
    firstCategory={firstCategory}
  />;
}

export default withLayout(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {

  const {data: menu} = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');

  const first: string[] = []

  for (const f of menu) {
    if (f.parentId[0] === 0) {
      first.push(f.route)
    }
  }

  const page = menu.map((item) => `/page-products/${item.route}`);

  console.log(first);
  
  console.log(page);
  
  
  return {
    paths: page,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<IPageProductsProps> = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  
  if (!params) {
    return {
      notFound: true
    };
  }


  try {
    const {data: menu} = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');
    if(menu.length == 0) {
      return {
        notFound: true
      };
    }
    const {data: pageProducts} = await axios.get<IPageProductsModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getPage/' + params.pageId);
    const {data: products} = await axios.post<IProductsModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      categories: [pageProducts.pageId],
      limit: 10
    });
    const firstCategory = 0;
    return {
      props: {
        menu,
        firstCategory,
        pageProducts,
        products
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

interface IPageProductsProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
  pageProducts: IPageProductsModel;
  products: IProductsModel[];
}
