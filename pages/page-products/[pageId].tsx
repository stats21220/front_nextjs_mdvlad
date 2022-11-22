import { GetStaticProps } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { ICatalogItem } from "../../interfaces/catalog.interface";
import { Htag } from "../../components";

function PageProducts({ catalog }: IPageProductsProps) {

  return (
    <>
      <Htag tag="h1" color="black" >Hello</Htag>
    </>
  );
}

export default withLayout(PageProducts);

export const getStaticProps: GetStaticProps<IPageProductsProps> = async () => {
  const {data: catalog} = await axios.get<ICatalogItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page');
  const firstCategory = 0;
  return {
    props: {
      catalog,
      firstCategory
    }
  };
};

interface IPageProductsProps extends Record<string, unknown> {
  catalog: ICatalogItem[];
  firstCategory: number;
}
