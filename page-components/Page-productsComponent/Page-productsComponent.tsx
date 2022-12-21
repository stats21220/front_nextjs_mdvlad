import { Menu } from "../../layout/Menu/Menu";
import { IPageProductsComponentProps } from "./Page-productsComponent.props";
import styles from './Page-productsComponent.module.css';
import { Products } from "../../layout/Products/Products";
import { Htag, Ptag } from "../../components";
import { BreadCrumbs } from "../../layout/BreadCrumbs/BreadCrumbs";
import { СhildСategories } from "../../layout/СhildСategories/СhildСategories";

export const PageProductsComponent = ({products, pageProducts}: IPageProductsComponentProps) => {

  return (
    <div className={styles.wrapper}>
      <BreadCrumbs className={styles.BreadCrumbs}/>
      <div className={styles.titleAndCategories}>
        <Htag className={styles.title} tag="h3" color="black">{pageProducts && pageProducts.title}</Htag>
        <СhildСategories className={styles.СhildСategories}/>
      </div>
      <Menu className={styles.menu}/>
      {products && <Products className={styles.products} products={products} />}
      <Ptag className={styles.description} size="s" color="black">{pageProducts?.description}</Ptag>
    </div>
  );
};