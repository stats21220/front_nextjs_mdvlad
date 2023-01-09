import { IProducts } from "./Products.props";
import styles from './Products.module.css'
import cn from 'classnames';
import { Card } from "../../components";
import { priceRu } from "../../helpers/helpers";
// import { translitForUrl } from "translit-npm";


export const Products = ({products, className} :  IProducts) => {

  // const r = ['Пиломатериалы','Рейка потолочная Штиль','Вагонка Штиль Лиственица']
  // const f = (r: string[]) => r.map((i) => '/' + i).toString().replace(/,/g, '')
  
  // console.log(translitForUrl(f(r)));
  
  

  return (
    <>
      {products.length == 0 ? 
        <div className={styles.wrapperNotFound}><span className={styles.notFound}>Продукты не найдены</span></div> :
        <section className={cn(styles.wrapper, className)}>
          {products && products.map((p) => (
            <Card color="cream">
                          <div key={p._id} className={styles.itemProduct}>
              <div className={styles.imageProduct}>{p.image}</div>
              <div className={styles.infoProduct}>
                <span>Код: {p.productId}</span>
                {p.count > 0 ? <span><span className={styles.available}>Есть в наличии: </span>{p.productId}</span> : <span>Нет в наличии</span>}
                <h3 className={styles.title}>{p.title}</h3>
                <div className={styles.priceWrapper}>
                  <div className={styles.price}>
                    <span className={styles.priceValue}>{priceRu("1000")}</span>
                    <span className={styles.oldPriceValue}>{priceRu("800")}</span>
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
            </Card>
          ))}
        </section>}
    </>
  );
};