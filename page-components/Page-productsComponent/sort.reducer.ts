import { SortEnum } from "../../components/Sort/Sort.props";
import { IProductsModel } from "../../interfaces";

export type SortAcions = {type: SortEnum.Price} | {type: SortEnum.Name} | {type: SortEnum.Rating} | {type: SortEnum.Date}


export interface SortReducerState {
    sort: SortEnum;
    products: IProductsModel[];
}

export const sortReducer = (state: SortReducerState, action: SortAcions): SortReducerState => {
    switch(action.type) {
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.productId > b.productId ? -1 : 1)
            }
        case SortEnum.Date:
            return{
                sort: SortEnum.Date,
                products: state.products.sort((a, b) => a.productId > b.productId ? 1 : -1)
            }
        case SortEnum.Rating:
            return{
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.productId > b.productId ? 1 : -1)
        }

        case SortEnum.Name:
            return{
                sort: SortEnum.Name,
                products: state.products.sort((a, b) => a.title > b.title ? 1 : -1)
            }
        default: 
            throw new Error('error my sort')
    }
}