import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../../interfaces/menu.interface";
import { IPageProductsModel } from "../../interfaces/page-products.interface";
import { IProductsModel } from "../../interfaces/products.interface";
import {ParsedUrlQuery} from 'node:querystring';
import { MenuItem } from "../../layout/Menu/Menu";

function PageProducts({ menu, pageProducts, products }: IPageProductsProps) {

  return <>
      <MenuItem menu={menu}/>
    </>;
}

export default withLayout(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {

  const {data: menu} = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');
  const page = menu.flatMap((item) => ('/page-products/' + item.pagesLvl.pageId));
  
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


  const {data: menu} = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');
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
};

interface IPageProductsProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
  pageProducts: IPageProductsModel;
  products: IProductsModel[];
}
