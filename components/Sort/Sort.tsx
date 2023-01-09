import { ISort, SortEnum } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from 'classnames';
import Isort from "./sort.svg";

export const Sort = ({sort = SortEnum.Price, setSort, className, ...props}: ISort) => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span>Сортировать: </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort ===  SortEnum.Price
                })}
            >
                <Isort className={styles.sortIcon}/>По цене
            </span>
            <span
                onClick={() => setSort(SortEnum.Name)}
                className={cn({
                    [styles.active]: sort ===  SortEnum.Name
                })}
            >
                <Isort className={styles.sortIcon}/>По названию
            </span>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort ===  SortEnum.Rating
                })}
            >
                <Isort className={styles.sortIcon}/>По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Date)}
                className={cn({
                    [styles.active]: sort ===  SortEnum.Date
                })}
            >
                <Isort className={styles.sortIcon}/>По дате
            </span>
        </div>
    )
}