import { Menu } from "../../layout/Menu/Menu";
import { IPageProductsComponentProps } from "./Page-productsComponent.props";
import styles from './Page-productsComponent.module.css';


export const PageProductsComponent = ({products}: IPageProductsComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <Menu/>
      {products && products.length}
    </div>
  );
};