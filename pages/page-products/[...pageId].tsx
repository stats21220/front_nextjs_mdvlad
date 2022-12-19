import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import {ParsedUrlQuery} from 'node:querystring';
import { PageProductsComponent } from "../../page-components";
import { IMenuItem, IPageProductsModel, IProductsModel } from "../../interfaces";


function PageProducts({ menu, pageProducts, products}: IPageProductsProps) {

  return (<PageProductsComponent 
    menu={menu}
    pageProducts={pageProducts} 
    products={products} 
  />);
}


export default withLayout(PageProducts);


export const getStaticPaths: GetStaticPaths = async () => {

  const {data: menu} = await axios.get<IMenuItem>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');
  
  const firstRoutes = menu.firstRoute.map(i =>  '/page-products' + i)
  const secondRoutes = menu.secondRoute.map(i =>  '/page-products' + i)
  const thirdRoutes = menu.thirdRoute.map(i =>  '/page-products' + i)

  return {
    paths: [...firstRoutes, ...secondRoutes, ...thirdRoutes],
    fallback: true
  };
};


export const getStaticProps = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>): Promise<
    { notFound: boolean; props?: undefined; } | 
    { props: { menu: IMenuItem; pageProducts: IPageProductsModel; products: IProductsModel[]; }; notFound?: undefined; }> => {
  

  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data: menu } = await axios.get<IMenuItem>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');
    
    if (!menu) {
      
      return {
        notFound: true
      };
    }

    const { data: pageProducts } = await axios.get<IPageProductsModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/page/getPage/${'' + params?.pageId?.slice(-1)}`);
    
    if (!pageProducts) {
      return {
        notFound: true
      }
    }

    const { data: products } = await axios.post<IProductsModel[] | []>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      categories: [pageProducts.pageId],
      limit: 10
    });

    return {
      props: {
        menu,
        pageProducts,
        products
      }
    };
  } catch {
    return {
      notFound: true
    };
  } 
}


interface IPageProductsProps extends Record<string, unknown> {
  menu: IMenuItem;
  pageProducts: IPageProductsModel;
  products: IProductsModel[];
}
