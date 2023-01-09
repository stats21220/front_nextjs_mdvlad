import { Menu } from "../../layout/Menu/Menu";
import { IPageProductsComponentProps } from "./Page-productsComponent.props";
import styles from './Page-productsComponent.module.css';
import { Products } from "../../layout/Products/Products";
import { Htag, Ptag, Sort } from "../../components";
import { BreadCrumbs } from "../../layout/BreadCrumbs/BreadCrumbs";
import { СhildСategories } from "../../layout/СhildСategories/СhildСategories";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";
import { useReducer } from "react";


export const PageProductsComponent = ({products, pageProducts}: IPageProductsComponentProps) => {

  const [{products: sortedProducts, sort}, dispatch] = useReducer(sortReducer, {products, sort: SortEnum.Price})   

  const sorted =  (sort: SortEnum) => {
    dispatch({type: sort})
  }

  return (
    <div className={styles.wrapper}>
      <BreadCrumbs className={styles.BreadCrumbs}/>
      <div className={styles.titleAndCategories}>
        <Htag className={styles.title} tag="h3" color="black">{pageProducts && pageProducts.title}</Htag>
        <СhildСategories className={styles.СhildСategories}/>
        <Sort sort={sort} setSort={sorted}/>
      </div>
      <Menu className={styles.menu}/>
      {sortedProducts && <Products className={styles.products} products={sortedProducts} />}
      <Ptag className={styles.description} size="m" color="black">{pageProducts?.description}</Ptag>
    </div>
  );
};