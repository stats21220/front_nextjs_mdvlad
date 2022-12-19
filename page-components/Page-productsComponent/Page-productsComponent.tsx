import { Menu } from "../../layout/Menu/Menu";
import { IPageProductsComponentProps } from "./Page-productsComponent.props";
import styles from './Page-productsComponent.module.css';
import { Products } from "../../layout/Products/Products";
import { Htag, Ptag } from "../../components";
import Link from "next/link";

export const PageProductsComponent = ({products, pageProducts}: IPageProductsComponentProps) => {

  return (
    <div className={styles.wrapper}>
      <div><Link href="/"><span>главная</span></Link> {">"} <span>{pageProducts.title}</span></div>
      <Htag tag="h3" color="black">{pageProducts.title}</Htag>
      <Menu/>
      {products && pageProducts ? <Products products={products} /> : <></>}
      <div></div>
      <Ptag size="s" color="black">{pageProducts?.description}</Ptag>
    </div>
  );
};