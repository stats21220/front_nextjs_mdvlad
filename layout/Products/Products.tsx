import { IProducts } from "./Products.props";
import styles from './Products.module.css'
import { Htag } from "../../components";


export const Products = ({products} :  IProducts) => {

  return (
    <section className={styles.wrapper}>
    {products && products.map((p) => (
      <article key={p._id} className={styles.itemProduct}>
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
      </article>
    ))}
  </section>
  );
};