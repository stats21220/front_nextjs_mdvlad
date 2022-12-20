import { Menu } from "../../layout/Menu/Menu";
import { IPageProductsComponentProps } from "./Page-productsComponent.props";
import styles from './Page-productsComponent.module.css';
import { Products } from "../../layout/Products/Products";
import { Htag, Ptag } from "../../components";
import Link from "next/link";
import { BreadCrumbs } from "../../layout/BreadCrumbs/BreadCrumbs";

export const PageProductsComponent = ({products, pageProducts}: IPageProductsComponentProps) => {

  return (
    <div className={styles.wrapper}>
      <BreadCrumbs/>
      <Htag tag="h3" color="black">{pageProducts && pageProducts.title}</Htag>
      <Menu/>
      {products && <Products products={products} />}
      <div></div>
      <Ptag size="s" color="black">{pageProducts?.description}</Ptag>
    </div>
  );
};