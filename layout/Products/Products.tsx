import { IProducts } from "./Products.props";
import styles from './Products.module.css'
import cn from 'classnames';


export const Products = ({products, className} :  IProducts) => {

  return (
    <section className={cn(styles.wrapper, className)}>
    {products.length == 0 ? <span>Продукты не найдены</span> : <></>}
    {products && products.map((p) => (
      <div key={p._id} className={styles.itemProduct}>
        <div className={styles.imageProduct}>{p.image}</div>
        <div className={styles.infoProduct}>
          <span>Код: {p.productId}</span>
          {p.count > 0 ? <span><span className={styles.available}>Есть в наличии: </span>{p.productId}</span> : <span>Нет в наличии</span>}
          <h3 className={styles.title}>{p.title}</h3>
          <div className={styles.priceWrapper}>
            <div className={styles.price}>
              <span className={styles.priceValue}>999</span>
              <span className={styles.oldPriceValue}>888</span>
            </div>
            <div>
              <span>цена за</span>
              <select className={styles.measuring}>
                {p.priceProduct.map(m => <option key={m.price}>{m.measuring}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    ))}
  </section>
  );
};